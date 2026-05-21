/* Wedding Website JS · Huy & Nguyên · 06.06.2026 */


/* ── i18n: Vietnamese / English ── */
const I18N_DICT = {
  vi: {
    _title: 'Đức Huy & Đài Nguyên — Thiệp Cưới',
    _description: 'Trân trọng kính mời bạn đến dự lễ cưới của Đức Huy & Đài Nguyên. Hãy cùng chúng tôi chia sẻ niềm vui trong ngày trọng đại này.',
    _ogLocale: 'vi_VN',

    'nav.home': 'Trang Chủ',
    'nav.invitation': 'Thiệp Mời',
    'nav.story': 'Câu Chuyện',
    'nav.gallery': 'Album',
    'nav.gift': 'Mừng Cưới',

    'hero.eyebrow': 'Save The Date',
    'hero.scrollAria': 'Cuộn xuống',

    'cd.days': 'Ngày',
    'cd.hours': 'Giờ',
    'cd.minutes': 'Phút',
    'cd.seconds': 'Giây',

    'inv.familyMan': 'Nhà Trai',
    'inv.familyWoman': 'Nhà Gái',
    'inv.announce': 'Trân trọng báo tin',
    'inv.roles': 'Trưởng Nam  ·  Thứ Nữ',

    'event.vuquy.date': 'Thứ Bảy, 30 tháng 05 năm 2026',
    'event.vuquy.time': 'Đón khách 10:00  ·  Khai tiệc 11:00',
    'event.thanhhon.date': 'Thứ Bảy, 06 tháng 06 năm 2026',
    'event.thanhhon.time': 'Đón khách 18:00  ·  Khai tiệc 19:00',
    'event.mapLink': 'Xem trên Google Maps ↗',
    'event.photoCaption': 'AMOR RESORT · Sảnh BELLA VITA · TP. Hồ Chí Minh',
    'event.photoAlt': 'Không gian tiệc cưới',

    'story.eye': 'Câu Chuyện Của Chúng Tôi',
    'story.title': 'Hành Trình Tình Yêu',
    'story.item1.title': 'Lần Đầu Gặp Gỡ',
    'story.item1.body': 'Hai người đã biết nhau qua mạng xã hội từ trước — những tin nhắn qua lại, những cuộc trò chuyện khuya. Rồi một ngày, cả hai hẹn gặp tại một quán cafe nhỏ ở Gò Vấp. Từ màn hình điện thoại ra ngoài đời thực, mọi thứ đều tự nhiên hơn, ấm áp hơn — và đẹp hơn rất nhiều.',
    'story.item2.title': 'Trở Thành Đôi',
    'story.item2.body': 'Trong không gian dịu nhẹ của một nhà hàng lãng mạn, Huy đã thổ lộ những điều lâu nay chỉ dám giữ trong lòng. Không cần lời hoa mỹ, chỉ là sự chân thành — và Nguyên đã nhận lời, bắt đầu hành trình hai người bên nhau từ đó.',
    'story.item3.title': 'Cầu Hôn',
    'story.item3.body': 'Không tiệc tùng, không cầu kỳ — Huy đã lặng lẽ chuẩn bị một chiếc nhẫn ngay trong căn nhà của mình. Đơn giản thôi, nhưng Nguyên đã bật khóc và gật đầu. Bởi với cô, điều quan trọng nhất không phải là sự hoàn hảo — mà là người đứng trước mặt mình.',
    'story.item4.title': 'Ngày Trọng Đại',
    'story.item4.body': 'Hai ngày, hai lễ, một tình yêu. Chúng tôi trân trọng từng khoảnh khắc được có nhau — và hạnh phúc hơn khi có quý khách cùng chứng kiến chương đẹp nhất của cuộc đời này.',

    'gallery.eye': 'Khoảnh Khắc Yêu Thương',
    'gallery.title': 'Trân Trọng Kỷ Niệm',

    'gift.eye': 'Chung Vui Cùng Chúng Tôi',
    'gift.title': 'Mừng Cưới',
    'gift.intro': 'Được chào đón bạn trong ngày trọng đại này là niềm hạnh phúc lớn lao nhất của bọn mình.<br>Nếu bạn muốn gửi chút lòng mừng cưới, dưới đây là thông tin chuyển khoản của hai đứa.',
    'gift.role.groom': 'Chú Rể',
    'gift.role.bride': 'Cô Dâu',
    'gift.bank': 'Ngân hàng',
    'gift.account': 'Số tài khoản',
    'gift.copy.groom': 'Sao chép số tài khoản chú rể',
    'gift.copy.bride': 'Sao chép số tài khoản cô dâu',

    'footer.thank': 'Sự hiện diện của quý khách',
    'footer.thankSub': 'là niềm vinh hạnh cho gia đình chúng tôi',

    'lightbox.close': 'Đóng',
    'lightbox.prev': 'Ảnh trước',
    'lightbox.next': 'Ảnh sau',

    'lang.toVi': 'Tiếng Việt',
    'lang.toEn': 'English',
  },

  en: {
    _title: 'Huy & Nguyên — Wedding Invitation',
    _description: 'You are cordially invited to celebrate the wedding of Huy & Nguyên. Join us in sharing the joy of our special day.',
    _ogLocale: 'en_US',

    'nav.home': 'Home',
    'nav.invitation': 'Invitation',
    'nav.story': 'Story',
    'nav.gallery': 'Album',
    'nav.gift': 'Gifts',

    'hero.eyebrow': 'Save The Date',
    'hero.scrollAria': 'Scroll down',

    'cd.days': 'Days',
    'cd.hours': 'Hours',
    'cd.minutes': 'Minutes',
    'cd.seconds': 'Seconds',

    'inv.familyMan': "Groom's Family",
    'inv.familyWoman': "Bride's Family",
    'inv.announce': 'Joyfully announce the wedding of',
    'inv.roles': 'Eldest Son  ·  Second Daughter',

    'event.vuquy.date': 'Saturday, May 30, 2026',
    'event.vuquy.time': 'Reception 10:00  ·  Banquet 11:00',
    'event.thanhhon.date': 'Saturday, June 6, 2026',
    'event.thanhhon.time': 'Reception 18:00  ·  Banquet 19:00',
    'event.mapLink': 'View on Google Maps ↗',
    'event.photoCaption': 'AMOR RESORT · BELLA VITA Hall · Ho Chi Minh City',
    'event.photoAlt': 'Wedding venue interior',

    'story.eye': 'Our Love Story',
    'story.title': 'A Journey of Love',
    'story.item1.title': 'First Meeting',
    'story.item1.body': "We had known each other through social media for some time — late-night messages, easy conversations. Then one day, we met at a small café in Gò Vấp. From phone screens into real life, everything felt more natural, warmer — and far more beautiful.",
    'story.item2.title': 'Becoming Us',
    'story.item2.body': "In the soft glow of a romantic restaurant, Huy finally spoke of the feelings he had quietly held inside. No grand words, only sincerity — and Nguyên said yes, beginning our journey together from that moment on.",
    'story.item3.title': 'The Proposal',
    'story.item3.body': "No party, no fanfare — Huy quietly prepared a ring right in his own home. Simple, yet Nguyên burst into tears and nodded. Because for her, what matters most is not perfection — but the person standing before her.",
    'story.item4.title': 'The Big Day',
    'story.item4.body': "Two days, two ceremonies, one love. We cherish every moment of being together — and are even happier to share the most beautiful chapter of our lives with you.",

    'gallery.eye': 'Cherished Moments',
    'gallery.title': 'Treasured Memories',

    'gift.eye': 'Celebrate With Us',
    'gift.title': 'Wedding Gifts',
    'gift.intro': "Having you with us on this special day is our greatest joy.<br>If you wish to send a token of love, here is our bank transfer information.",
    'gift.role.groom': 'The Groom',
    'gift.role.bride': 'The Bride',
    'gift.bank': 'Bank',
    'gift.account': 'Account Number',
    'gift.copy.groom': "Copy groom's account number",
    'gift.copy.bride': "Copy bride's account number",

    'footer.thank': 'Your presence',
    'footer.thankSub': "is our family's greatest honor",

    'lightbox.close': 'Close',
    'lightbox.prev': 'Previous image',
    'lightbox.next': 'Next image',

    'lang.toVi': 'Tiếng Việt',
    'lang.toEn': 'English',
  },
};

const I18N_STORAGE_KEY = 'huynguyen_lang';

function detectInitialLanguage() {
  try {
    const stored = localStorage.getItem(I18N_STORAGE_KEY);
    if (stored && I18N_DICT[stored]) return stored;
  } catch (_) { /* localStorage may be disabled */ }

  const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
  if (nav.startsWith('vi')) return 'vi';
  return 'en';
}

function applyLanguage(lang) {
  if (!I18N_DICT[lang]) lang = 'vi';
  const dict = I18N_DICT[lang];

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr');
    spec.split(',').forEach((pair) => {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key && dict[key] !== undefined) {
        el.setAttribute(attr, dict[key]);
      }
    });
  });

  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  if (dict._title) document.title = dict._title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && dict._description) metaDesc.setAttribute('content', dict._description);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc && dict._description) ogDesc.setAttribute('content', dict._description);

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale && dict._ogLocale) ogLocale.setAttribute('content', dict._ogLocale);

  document.querySelectorAll('.lang-btn').forEach((b) => {
    const isActive = b.dataset.lang === lang;
    b.classList.toggle('active', isActive);
    b.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });
}

(function initI18n() {
  const initial = detectInitialLanguage();
  applyLanguage(initial);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      if (!I18N_DICT[lang]) return;
      try { localStorage.setItem(I18N_STORAGE_KEY, lang); } catch (_) {}
      applyLanguage(lang);
    });
  });
})();


/* ── Countdown Timer ── */
(function initCountdown() {
  const vuQuy   = new Date('2026-05-30T10:00:00+07:00');
  const wedding = new Date('2026-06-06T15:00:00+07:00');

  const els = {
    daysBride:   document.getElementById('cd-days-bride'),
    daysWedding: document.getElementById('cd-days-wedding'),
    hours:       document.getElementById('cd-hours'),
    minutes:     document.getElementById('cd-minutes'),
    seconds:     document.getElementById('cd-seconds'),
  };

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const now = Date.now();
    const diffVuQuy   = vuQuy.getTime() - now;
    const diffWedding = wedding.getTime() - now;

    const dBride   = diffVuQuy   > 0 ? Math.floor(diffVuQuy   / 86400000) : 0;
    const dWedding = diffWedding > 0 ? Math.floor(diffWedding / 86400000) : 0;

    if (els.daysBride)   els.daysBride.textContent   = pad(dBride);
    if (els.daysWedding) els.daysWedding.textContent = pad(dWedding);

    // hours / minutes / seconds count toward the closer event
    const diffActive = diffVuQuy > 0 ? diffVuQuy : diffWedding;
    if (diffActive <= 0) {
      if (els.hours)   els.hours.textContent   = '00';
      if (els.minutes) els.minutes.textContent = '00';
      if (els.seconds) els.seconds.textContent = '00';
      return;
    }

    if (els.hours)   els.hours.textContent   = pad(Math.floor((diffActive % 86400000) / 3600000));
    if (els.minutes) els.minutes.textContent = pad(Math.floor((diffActive % 3600000)  / 60000));
    if (els.seconds) els.seconds.textContent = pad(Math.floor((diffActive % 60000)    / 1000));
  }

  tick();
  setInterval(tick, 1000);
})();


/* ── Sticky Navigation ── */
(function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── Mobile Menu Toggle ── */
(function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  document.addEventListener('click', e => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
})();


/* ── Scroll Reveal ── */
(function initReveal() {
  const selectors = '.reveal, .reveal-left, .reveal-right';
  const items = document.querySelectorAll(selectors);
  if (!items.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // stagger siblings slightly
        const siblings = [...entry.target.parentElement.querySelectorAll(selectors)];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, idx * 100);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => obs.observe(el));
})();


/* ── Smooth Active Nav Link ── */
(function initActiveLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.nav-link');

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => obs.observe(s));
})();

/* ── Gallery Lightbox ── */
(function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const imgEl   = document.getElementById('lbImg');
  const counter = document.getElementById('lbCounter');
  const closeBtn = document.getElementById('lbClose');
  const prevBtn  = document.getElementById('lbPrev');
  const nextBtn  = document.getElementById('lbNext');

  const items = Array.from(document.querySelectorAll('.gallery-item img'));
  if (!items.length) return;

  let currentIdx = 0;
  let lastFocus = null;
  let switchTimer = null;

  function hiResSrc(src) {
    return src.replace(/\/(\d+)\/(\d+)(?:\?.*)?$/, (_, w, h) =>
      `/${Math.min(Number(w) * 2, 2000)}/${Math.min(Number(h) * 2, 2000)}`
    );
  }

  function preload(src) {
    const im = new Image();
    im.src = src;
  }

  function show(idx, instant) {
    if (idx < 0) idx = items.length - 1;
    if (idx >= items.length) idx = 0;
    currentIdx = idx;

    const target = items[idx];
    const newSrc = hiResSrc(target.src);
    counter.textContent = `${idx + 1} / ${items.length}`;

    clearTimeout(switchTimer);

    const swap = () => {
      imgEl.src = newSrc;
      imgEl.alt = target.alt || '';
      const reveal = () => {
        imgEl.classList.remove('switching');
        imgEl.removeEventListener('load', reveal);
      };
      imgEl.addEventListener('load', reveal);
      // safety net if cached / load fires synchronously
      requestAnimationFrame(() => imgEl.classList.remove('switching'));
    };

    if (instant) {
      swap();
    } else {
      imgEl.classList.add('switching');
      switchTimer = setTimeout(swap, 180);
    }

    // Preload neighbours
    if (items[idx + 1]) preload(hiResSrc(items[idx + 1].src));
    if (items[idx - 1]) preload(hiResSrc(items[idx - 1].src));
  }

  function open(idx) {
    lastFocus = document.activeElement;
    show(idx, true);
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    // move focus into the dialog for keyboard users
    closeBtn.focus({ preventScroll: true });
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    if (lastFocus && typeof lastFocus.focus === 'function') {
      lastFocus.focus({ preventScroll: true });
    }
  }

  items.forEach((thumb, i) => {
    const wrap = thumb.parentElement;
    if (!wrap) return;
    wrap.addEventListener('click', () => open(i));
    wrap.setAttribute('role', 'button');
    wrap.setAttribute('tabindex', '0');
    wrap.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(i);
      }
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn .addEventListener('click', () => show(currentIdx - 1));
  nextBtn .addEventListener('click', () => show(currentIdx + 1));

  lightbox.addEventListener('click', (e) => {
    // click on backdrop (not the image or buttons) closes
    if (e.target === lightbox || e.target.classList.contains('lightbox-stage')) {
      close();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape')          close();
    else if (e.key === 'ArrowLeft')  show(currentIdx - 1);
    else if (e.key === 'ArrowRight') show(currentIdx + 1);
  });
})();


(function initGiftCopy() {
  document.querySelectorAll('.gift-account-wrap').forEach(function (wrap) {
    var btn = wrap.querySelector('.gift-copy-btn');
    if (!btn) return;

    wrap.style.cursor = 'pointer';

    wrap.addEventListener('click', function () {
      var text = btn.dataset.copy;
      if (!text) return;

      function markCopied() {
        btn.classList.add('copied');
        setTimeout(function () {
          btn.classList.remove('copied');
        }, 2200);
      }

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(markCopied).catch(function () {
          fallbackCopy(text, markCopied);
        });
      } else {
        fallbackCopy(text, markCopied);
      }
    });
  });

  function fallbackCopy(text, cb) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.cssText = 'position:fixed;top:-9999px;left:-9999px;opacity:0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); cb(); } catch (e) {}
    document.body.removeChild(ta);
  }
})();
