#!/usr/bin/env bash
# Compress originals from images/blend/ + images/retouch/ to WebP at max edge 2000px,
# quality 82, and write a sidecar manifest.json the gallery + hero slideshow read from.
#
# Idempotent: re-running only encodes files that don't already have a .webp output.
# Requires: cwebp (brew install webp), sips (built-in macOS).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIRS=("$ROOT/images/blend" "$ROOT/images/retouch")
OUT_DIR="$ROOT/images/photos"
MANIFEST="$OUT_DIR/manifest.json"
MAX_EDGE=2000
QUALITY=82

mkdir -p "$OUT_DIR"

command -v cwebp >/dev/null || { echo "cwebp not found. Run: brew install webp" >&2; exit 1; }
command -v sips  >/dev/null || { echo "sips not found (macOS only script)" >&2; exit 1; }

total_in=0
total_out=0
encoded=0
skipped=0

# Pass 1: encode missing .webp files
for dir in "${SRC_DIRS[@]}"; do
  [ -d "$dir" ] || continue
  for src in "$dir"/*.jpg "$dir"/*.JPG "$dir"/*.jpeg "$dir"/*.JPEG; do
    [ -f "$src" ] || continue
    base="$(basename "$src")"
    name="${base%.*}"
    out="$OUT_DIR/$name.webp"

    in_size=$(stat -f%z "$src")
    total_in=$((total_in + in_size))

    if [ -f "$out" ]; then
      skipped=$((skipped + 1))
      out_size=$(stat -f%z "$out")
      total_out=$((total_out + out_size))
      continue
    fi

    w=$(sips -g pixelWidth  "$src" | awk '/pixelWidth/{print $2}')
    h=$(sips -g pixelHeight "$src" | awk '/pixelHeight/{print $2}')

    # Bound the longest edge: portrait → -resize 0 MAX_EDGE; else → -resize MAX_EDGE 0.
    if [ "$h" -gt "$w" ]; then
      resize_args=(-resize 0 "$MAX_EDGE")
    else
      resize_args=(-resize "$MAX_EDGE" 0)
    fi

    echo "  $name.jpg ($w x $h) → $name.webp"
    cwebp -quiet -q "$QUALITY" -m 6 -resize_mode down_only "${resize_args[@]}" \
      "$src" -o "$out"

    encoded=$((encoded + 1))
    out_size=$(stat -f%z "$out")
    total_out=$((total_out + out_size))
  done
done

# Pass 2: build manifest.json from whatever sits in OUT_DIR (sorted alphabetically)
echo "Writing $MANIFEST..."
{
  echo "["
  first=1
  for out in "$OUT_DIR"/*.webp; do
    [ -f "$out" ] || continue
    base="$(basename "$out")"
    w=$(sips -g pixelWidth  "$out" | awk '/pixelWidth/{print $2}')
    h=$(sips -g pixelHeight "$out" | awk '/pixelHeight/{print $2}')
    if [ "$h" -gt "$w" ]; then orient="portrait"; else orient="landscape"; fi
    ratio=$(awk -v w="$w" -v h="$h" 'BEGIN{printf "%.3f", w/h}')

    if [ $first -eq 1 ]; then first=0; else echo ","; fi
    printf '  { "file": "%s", "w": %s, "h": %s, "orient": "%s", "ratio": %s }' \
      "$base" "$w" "$h" "$orient" "$ratio"
  done
  echo
  echo "]"
} > "$MANIFEST"

# Summary
human() { awk -v b="$1" 'BEGIN{ split("B KB MB GB",u); s=b; i=1; while(s>=1024 && i<4){s/=1024; i++}; printf "%.1f %s", s, u[i] }'; }
echo
echo "Encoded:  $encoded"
echo "Skipped:  $skipped (already had .webp)"
echo "Input:    $(human $total_in)"
echo "Output:   $(human $total_out)"
if [ "$total_in" -gt 0 ]; then
  pct=$(awk -v i="$total_in" -v o="$total_out" 'BEGIN{printf "%.1f", (1 - o/i)*100}')
  echo "Savings:  $pct%"
fi
