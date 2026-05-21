#!/usr/bin/env bash
# Compress originals from images/original/ to JPG at max edge 2000px,
# with explicit sRGB color management so the gallery looks identical across
# browsers / devices regardless of the source camera's color profile.
# Also writes a sidecar manifest.json the gallery + hero slideshow read from.
#
# Idempotent: re-running only encodes files that don't already have a .jpg output.
# To regenerate everything with new settings, delete the contents of images/photos/ first.
# Requires: ImageMagick 7 (brew install imagemagick).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC_DIRS=("$ROOT/images/original")
OUT_DIR="$ROOT/images/photos"
MANIFEST="$OUT_DIR/manifest.json"
MAX_EDGE=2000
QUALITY=92

mkdir -p "$OUT_DIR"

command -v magick >/dev/null || { echo "magick not found. Run: brew install imagemagick" >&2; exit 1; }

total_in=0
total_out=0
encoded=0
skipped=0

# Pass 1: encode missing .jpg files
for dir in "${SRC_DIRS[@]}"; do
  [ -d "$dir" ] || continue
  for src in "$dir"/*.jpg "$dir"/*.JPG "$dir"/*.jpeg "$dir"/*.JPEG; do
    [ -f "$src" ] || continue
    base="$(basename "$src")"
    name="${base%.*}"
    out="$OUT_DIR/$name.jpg"

    in_size=$(stat -f%z "$src")
    total_in=$((total_in + in_size))

    if [ -f "$out" ]; then
      skipped=$((skipped + 1))
      out_size=$(stat -f%z "$out")
      total_out=$((total_out + out_size))
      continue
    fi

    dims=$(magick identify -format "%w %h" "$src")
    w=${dims% *}; h=${dims#* }
    echo "  $base ($w x $h) → $name.jpg"

    # -auto-orient                 apply EXIF rotation then drop the tag
    # -colorspace sRGB             color-manage pixels into sRGB (handles Adobe RGB, Display P3 sources)
    # -filter Lanczos              pin downscale filter (already the default for shrink, but explicit guards against future IM swaps)
    # -resize "WxH>"               bound the longest edge to MAX_EDGE, shrink-only
    # -unsharp 0x0.75+0.75+0.008   post-resize web-export sharpening — restores detail lost in Lanczos downscale without halos
    # -sampling-factor 4:2:0       standard chroma subsampling for web JPGs — halves chroma resolution, tiny visible cost
    # -interlace JPEG              progressive JPEG so the photo paints top-to-bottom in passes instead of one big load
    # No -strip: the (now-sRGB) ICC profile stays embedded so every browser renders identically.
    magick "$src" \
      -auto-orient \
      -colorspace sRGB \
      -filter Lanczos \
      -resize "${MAX_EDGE}x${MAX_EDGE}>" \
      -unsharp 0x0.75+0.75+0.008 \
      -sampling-factor 4:2:0 \
      -interlace JPEG \
      -quality "$QUALITY" \
      "$out"

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
  for out in "$OUT_DIR"/*.jpg; do
    [ -f "$out" ] || continue
    base="$(basename "$out")"
    dims=$(magick identify -format "%w %h" "$out")
    w=${dims% *}; h=${dims#* }
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
echo "Skipped:  $skipped (already had .jpg)"
echo "Input:    $(human $total_in)"
echo "Output:   $(human $total_out)"
if [ "$total_in" -gt 0 ]; then
  pct=$(awk -v i="$total_in" -v o="$total_out" 'BEGIN{printf "%.1f", (1 - o/i)*100}')
  echo "Savings:  $pct%"
fi
