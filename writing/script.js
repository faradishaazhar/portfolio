/* ==========================================================================
   Laila — writing portfolio
   One section per page (Next / Back, sidebar, or browser back).
   All content comes from data.js. English by default, Bahasa Indonesia via
   the EN / ID switch (remembered in this browser).
   ========================================================================== */
(function () {
  'use strict';

  var P = window.PROFILE || {};
  var CATS = window.CATEGORIES || [];
  var WORKS = (window.WORKS || []).map(function (w, i) { w.idx = i; return w; });
  var LINKS = window.LINKS || {};

  /* ------------------------------------------------------------------------
     1. STRINGS
     ------------------------------------------------------------------------ */
  var T = {
    en: {
      skip: 'Skip to content', sections: 'Sections', close: 'Close',
      next: 'Next', prev: 'Back', pageOf: '{n} of {total}', pagerLabel: 'Pages',
      sideMe: 'About me', sideWorks: 'Selected works', sideMore: 'More',
      nav: { about: 'About me', education: 'Education', recognition: 'Recognition', contact: 'Contact' },
      tb: { about: 'about <em>me</em>', education: '<em>education</em>', recognition: '<em>recognition</em>', contact: 'contact <em>me</em>' },
      period: 'Writing portfolio · {years}',
      heroHi: 'Hello, I’m <em>{name}.</em>',
      ctaWorks: 'Read my writing', ctaContact: 'Contact me',
      pinNews: 'news stories & features', pinEssays: 'essays on Medium', pinStories: 'stories on Wattpad',
      pinWorks: 'selected works', posterTop: 'Writer', posterCap: 'Digital Journalism, UMN',
      bubble1: '{k} kinds of writing · {n} works', bubble2: '3+ years of PR & campaign writing',
      eduEyebrow: 'Education', eduTitle: 'Education <em>background.</em>', eduLead: 'Where the writing started: a degree built on reporting, media and storytelling.',
      gpa: 'GPA', photoCap: 'Speaking at a campus event',
      writesT: 'What I <em>write</em>', writesSub: 'The formats across this portfolio, from newsroom to fiction.',
      worksEyebrow: 'Selected works · {n} of {total}',
      catTitle: {
        journalism: 'Journalism, <em>from the field.</em>', editorial: 'Editorial & <em>opinion.</em>',
        scripts: 'Scripts for <em>short video.</em>', content: 'Content & <em>copywriting.</em>', creative: 'Creative <em>writing.</em>'
      },
      tbCat: {
        journalism: '<em>journalism</em>', editorial: 'editorial & <em>opinion</em>', scripts: '<em>scriptwriting</em>',
        content: 'content & <em>copywriting</em>', creative: 'creative <em>writing</em>'
      },
      openHint: 'Select a file to open the original in a new tab.',
      open: { KamiBijak: 'Read on KamiBijak', Medium: 'Read on Medium', script: 'Open the script', instagram: 'View on Instagram', Wattpad: 'Read on Wattpad' },
      allMedium: 'All essays on Medium', allWattpad: 'Read on Wattpad',
      recEyebrow: 'Recognition', recTitle: 'Recognition & <em>competence.</em>', recLead: 'An essay award, plus the formal writing that sits behind the published work.',
      formalT: 'Professional & formal writing', formalNote: 'Confidential works, not displayed.',
      appliedT: 'Applied communication skills',
      conEyebrow: 'Contact', conTitle: 'Contact <em>me.</em>', conLead: 'For writing, content and communications work. I usually reply by email within a few days.',
      findT: 'Find my writing', foot: 'Selected works {years} · {n} works',
      newTab: '(opens in a new tab)'
    },
    id: {
      skip: 'Langsung ke isi', sections: 'Bagian', close: 'Tutup',
      next: 'Lanjut', prev: 'Kembali', pageOf: '{n} dari {total}', pagerLabel: 'Halaman',
      sideMe: 'Tentang aku', sideWorks: 'Karya pilihan', sideMore: 'Lainnya',
      nav: { about: 'Tentang aku', education: 'Pendidikan', recognition: 'Penghargaan', contact: 'Kontak' },
      tb: { about: 'tentang <em>aku</em>', education: '<em>pendidikan</em>', recognition: '<em>penghargaan</em>', contact: '<em>kontak</em>' },
      period: 'Portofolio tulisan · {years}',
      heroHi: 'Halo, aku <em>{name}.</em>',
      ctaWorks: 'Baca tulisanku', ctaContact: 'Hubungi aku',
      pinNews: 'berita & feature', pinEssays: 'esai di Medium', pinStories: 'cerita di Wattpad',
      pinWorks: 'karya pilihan', posterTop: 'Penulis', posterCap: 'Jurnalistik Digital, UMN',
      bubble1: '{k} jenis tulisan · {n} karya', bubble2: '3+ tahun menulis untuk PR & campaign',
      eduEyebrow: 'Pendidikan', eduTitle: 'Latar belakang <em>pendidikan.</em>', eduLead: 'Awal mula aku menulis: kuliah yang dibangun dari liputan, media, dan storytelling.',
      gpa: 'IPK', photoCap: 'Berbicara di acara kampus',
      writesT: 'Yang aku <em>tulis</em>', writesSub: 'Format tulisan di portofolio ini, dari ruang redaksi sampai fiksi.',
      worksEyebrow: 'Karya pilihan · {n} dari {total}',
      catTitle: {
        journalism: 'Jurnalistik, <em>dari lapangan.</em>', editorial: 'Editorial & <em>opini.</em>',
        scripts: 'Naskah untuk <em>video pendek.</em>', content: 'Konten & <em>copywriting.</em>', creative: 'Penulisan <em>kreatif.</em>'
      },
      tbCat: {
        journalism: '<em>jurnalistik</em>', editorial: 'editorial & <em>opini</em>', scripts: 'penulisan <em>naskah</em>',
        content: 'konten & <em>copywriting</em>', creative: 'penulisan <em>kreatif</em>'
      },
      openHint: 'Pilih file untuk membuka karya aslinya di tab baru.',
      open: { KamiBijak: 'Baca di KamiBijak', Medium: 'Baca di Medium', script: 'Buka naskahnya', instagram: 'Lihat di Instagram', Wattpad: 'Baca di Wattpad' },
      allMedium: 'Semua esai di Medium', allWattpad: 'Baca di Wattpad',
      recEyebrow: 'Penghargaan', recTitle: 'Penghargaan & <em>kompetensi.</em>', recLead: 'Satu penghargaan esai, plus tulisan formal di balik karya yang sudah terbit.',
      formalT: 'Penulisan profesional & formal', formalNote: 'Karya bersifat rahasia, tidak ditampilkan.',
      appliedT: 'Keterampilan komunikasi terapan',
      conEyebrow: 'Kontak', conTitle: '<em>Hubungi</em> aku.', conLead: 'Untuk pekerjaan menulis, konten, dan komunikasi. Biasanya aku membalas email dalam beberapa hari.',
      findT: 'Temukan tulisanku', foot: 'Karya pilihan {years} · {n} karya',
      newTab: '(terbuka di tab baru)'
    }
  };

  var lang = 'en';
  try { var saved = localStorage.getItem('wp-lang'); if (saved === 'id' || saved === 'en') lang = saved; } catch (e) { /* ignore */ }
  function L() { return T[lang]; }
  function tx(o) { return o == null ? '' : (typeof o === 'string' ? o : (o[lang] || o.en || '')); }
  function t(s, v) { return String(s).replace(/\{(\w+)\}/g, function (m, k) { return v && v[k] != null ? v[k] : m; }); }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function $(s) { return document.querySelector(s); }
  function $$(s) { return Array.prototype.slice.call(document.querySelectorAll(s)); }
  function fmtDate(iso) {
    if (!iso) return '';
    var p = iso.split('-');
    var d = new Date(Date.UTC(+p[0], +p[1] - 1, +p[2]));
    return new Intl.DateTimeFormat(lang === 'id' ? 'id-ID' : 'en-GB', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC' }).format(d);
  }
  function worksIn(key) { return WORKS.filter(function (w) { return w.cat === key; }); }
  function cat(key) { for (var i = 0; i < CATS.length; i++) if (CATS[i].key === key) return CATS[i]; return null; }

  /* ------------------------------------------------------------------------
     2. PAGES
     ------------------------------------------------------------------------ */
  var SEC_ME = ['about', 'education'];
  var SEC_WORKS = CATS.map(function (c) { return c.key; });
  var SEC_MORE = ['recognition', 'contact'];
  var SECTIONS = SEC_ME.concat(SEC_WORKS, SEC_MORE);
  var curSection = 'about';
  function navLabel(id) { var c = cat(id); return c ? tx(c.name) : L().nav[id]; }
  function tbLabel(id) { return cat(id) ? L().tbCat[id] : L().tb[id]; }

  /* ------------------------------------------------------------------------
     3. SMALL PIECES
     ------------------------------------------------------------------------ */
  var ICON = {
    about: '<circle cx="8" cy="5.5" r="2.5"/><path d="M3 14c.6-3 2.6-4.5 5-4.5s4.4 1.5 5 4.5"/>',
    education: '<path d="M1.5 6 8 3l6.5 3L8 9z"/><path d="M4.5 7.5v3c1 1 2.2 1.5 3.5 1.5s2.5-.5 3.5-1.5v-3"/>',
    recognition: '<circle cx="8" cy="6" r="3.5"/><path d="m5.8 9 -1 5 3.2-1.6 3.2 1.6-1-5"/>',
    contact: '<rect x="2" y="3.5" width="12" height="9" rx="1.5"/><path d="m2.5 4.5 5.5 4.5 5.5-4.5"/>'
  };
  function icon(n) { return '<svg viewBox="0 0 16 16" aria-hidden="true">' + (ICON[n] || '') + '</svg>'; }
  function dot(c) { return '<i class="dot dot-' + c + '" aria-hidden="true"></i>'; }
  function tag(c) { return '<i class="tag tag-' + c + '" aria-hidden="true"></i>'; }
  var FOLDER = '<svg class="folder-svg" viewBox="0 0 120 94" aria-hidden="true" focusable="false"><g filter="url(#paper)">' +
    '<path class="f-tab" d="M2 14a9 9 0 0 1 9-9h28a9 9 0 0 1 6.4 2.6L51 13h58a9 9 0 0 1 9 9v10H2z"/>' +
    '<rect class="f-body" x="2" y="19" width="116" height="73" rx="9"/><rect class="f-shine" x="2" y="19" width="116" height="5" rx="2.5"/></g></svg>';
  function secHead(eyebrow, title, lead, id) {
    return '<div class="sec-head"><span class="eyebrow">' + esc(eyebrow) + '</span><h2 id="' + id + '">' + title + '</h2>' + (lead ? '<p>' + lead + '</p>' : '') + '</div>';
  }
  function ext(href, cls, html) {
    var newTab = /^https?:/.test(href);
    return '<a class="' + cls + '" href="' + esc(href) + '"' + (newTab ? ' target="_blank" rel="noopener"' : '') + '>' + html + (newTab ? '<span class="sr"> ' + esc(L().newTab) + '</span>' : '') + '</a>';
  }
  function openLabel(w) {
    var o = L().open;
    if (w.cat === 'scripts') return o.script;
    if (w.cat === 'content') return o.instagram;
    return o[w.source] || o.KamiBijak;
  }

  /* ------------------------------------------------------------------------
     4. VIEWS
     ------------------------------------------------------------------------ */
  function viewAbout() {
    var l = L();
    var nJ = worksIn('journalism').length, nE = worksIn('editorial').length, nC = worksIn('creative').length;
    return '<section id="about" class="hero" aria-labelledby="h-about">' +
      '<div class="hero-copy">' +
        '<div class="hero-name"><b>' + esc(P.fullName) + '</b><span>' + esc(tx(P.headline)) + '</span></div>' +
        '<span class="period">' + dot('pink') + esc(t(l.period, { years: P.years })) + '</span>' +
        '<h1 class="hero-title" id="h-about">' + t(l.heroHi, { name: esc(P.name) }) + '</h1>' +
        '<p class="hero-sub">' + esc(tx(P.intro)) + '</p>' +
        '<p class="hero-more">' + esc(tx(P.about)) + '</p>' +
        '<div class="hero-actions"><a class="cta-bubble" href="#' + SEC_WORKS[0] + '" data-nav="' + SEC_WORKS[0] + '">' + esc(l.ctaWorks) + ' →</a>' +
        '<a class="btn" href="#contact" data-nav="contact">' + esc(l.ctaContact) + '</a></div>' +
      '</div>' +
      '<div class="board" aria-hidden="true">' +
        '<div class="pin pin-1">' + FOLDER + '<p>' + dot('blue') + '<span><b>' + nJ + '</b> ' + esc(l.pinNews) + '</span></p></div>' +
        '<div class="pin pin-2 pink">' + FOLDER + '<p>' + dot('pink') + '<span><b>' + nE + '</b> ' + esc(l.pinEssays) + '</span></p></div>' +
        '<div class="pin pin-3"><div class="poster poster-photo"><div class="p-top"><span>' + esc(l.posterTop) + '</span><span>' + esc(P.years.replace(/ /g, '')) + '</span></div>' +
          '<img src="assets/photos/portrait.webp" alt="" width="600" height="909">' +
          '<div class="p-cap">' + esc(l.posterCap) + '</div></div>' +
          '<p>' + dot('ink') + '<span><b>' + WORKS.length + '</b> ' + esc(l.pinWorks) + '</span></p></div>' +
        '<div class="pin pin-4 pink">' + FOLDER + '<p>' + dot('pink') + '<span><b>' + nC + '</b> ' + esc(l.pinStories) + '</span></p></div>' +
        '<span class="bubble b1">' + esc(t(l.bubble1, { k: CATS.length, n: WORKS.length })) + '</span>' +
        '<span class="bubble bubble-pink b2">' + esc(l.bubble2) + '</span>' +
      '</div></section>';
  }

  function viewEducation() {
    var l = L(), E = P.education || {};
    var h = '<section id="education" aria-labelledby="h-education">' + secHead(l.eduEyebrow, l.eduTitle, esc(l.eduLead), 'h-education');
    h += '<div class="edu-grid">' +
      '<figure class="photo-card"><img src="assets/photos/speaking.webp" alt="' + esc(P.fullName + ', ' + l.photoCap) + '" loading="lazy" width="700" height="754"><figcaption>' + esc(l.photoCap) + '</figcaption></figure>' +
      '<div class="card card-dark edu-card">' +
        '<span class="folder-mini" aria-hidden="true">' + FOLDER + '</span>' +
        '<h3>' + esc(tx(E.degree)) + '</h3>' +
        '<p class="edu-school">' + esc(E.school) + ' · ' + esc(E.year) + '</p>' +
        '<p>' + esc(tx(E.focus)) + '</p>' +
        '<span class="gpa">' + esc(l.gpa) + ' <b>' + esc(E.gpa) + '</b></span>' +
      '</div></div>';
    h += '<div class="sub-head"><h3>' + l.writesT + '</h3><p>' + esc(l.writesSub) + '</p></div>' +
      '<div class="chips">' + (P.writes ? P.writes[lang] : []).map(function (w, i) { return '<span class="chip">' + tag(['blue', 'pink', 'baby', 'black'][i % 4]) + esc(w) + '</span>'; }).join('') + '</div>';
    return h + '</section>';
  }

  function workCard(w, c) {
    var meta = esc(tx(w.type)) + (w.date ? ' · ' + esc(fmtDate(w.date)) : '');
    var src = w.cat === 'scripts' || w.cat === 'content' ? '<span class="w-src">' + esc(w.source) + '</span>' : '';
    return ext(w.url, 'work shape-' + c.shape,
      '<span class="w-thumb"><img src="assets/works/' + esc(w.img) + '.webp" alt="" loading="lazy"></span>' +
      '<span class="w-body">' +
        '<span class="w-meta">' + tag(c.tag) + '<span>' + meta + '</span></span>' +
        '<span class="w-title">' + esc(w.title) + '</span>' + src +
        (w.desc ? '<span class="w-desc">' + esc(tx(w.desc)) + '</span>' : '') +
        '<span class="w-open">' + esc(openLabel(w)) + ' <span aria-hidden="true">↗</span></span>' +
      '</span>');
  }
  function viewCategory(c) {
    var l = L(), list = worksIn(c.key), i = SEC_WORKS.indexOf(c.key);
    var h = '<section id="' + c.key + '" aria-labelledby="h-' + c.key + '">' +
      secHead(t(l.worksEyebrow, { n: i + 1, total: SEC_WORKS.length }), l.catTitle[c.key], esc(tx(c.lead)), 'h-' + c.key);
    h += '<p class="hint">' + esc(l.openHint) + '</p>';
    h += '<div class="works works-' + c.shape + '">' + list.map(function (w) { return workCard(w, c); }).join('') + '</div>';
    if (c.key === 'editorial' && LINKS.medium) h += '<div>' + ext(LINKS.medium, 'btn', esc(l.allMedium) + ' <span aria-hidden="true">↗</span>') + '</div>';
    if (c.key === 'creative' && LINKS.wattpad) h += '<div>' + ext(LINKS.wattpad, 'cta-bubble', esc(l.allWattpad) + ' <span aria-hidden="true">↗</span>') + '</div>';
    return h + '</section>';
  }

  function viewRecognition() {
    var l = L(), A = P.award || {};
    var h = '<section id="recognition" aria-labelledby="h-recognition">' + secHead(l.recEyebrow, l.recTitle, esc(l.recLead), 'h-recognition');
    h += '<div class="rec-grid">' +
      '<figure class="cert-card"><img src="assets/photos/gonative-certificate.webp" alt="' + esc(tx(A.title) + ' certificate') + '" loading="lazy" width="800" height="566">' +
        '<figcaption><span class="w-meta">' + tag('pink') + '<span>' + esc(A.year) + '</span></span><b>' + esc(tx(A.title)) + '</b><span class="cert-essay">' + esc(tx(A.essay)) + '</span><span class="muted">' + esc(tx(A.note)) + '</span></figcaption></figure>' +
      '<div class="rec-side">' +
        '<div class="card"><h3>' + esc(l.formalT) + '</h3><p class="muted">' + esc(l.formalNote) + '</p><ul class="bul">' + (P.formal ? P.formal[lang] : []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
        '<div class="card"><h3>' + esc(l.appliedT) + '</h3><ul class="bul">' + (P.applied ? P.applied[lang] : []).map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></div>' +
      '</div></div>';
    return h + '</section>';
  }

  function viewContact() {
    var l = L();
    var rows = (P.contact || []).map(function (c) {
      return ext(c.href, 'con-row', '<span class="con-label">' + esc(lang === 'id' ? c.labelId : c.label) + '</span><span class="con-val">' + esc(c.value) + '</span><span class="con-go" aria-hidden="true">→</span>');
    }).join('');
    var h = '<section id="contact" aria-labelledby="h-contact">' + secHead(l.conEyebrow, l.conTitle, esc(l.conLead), 'h-contact');
    h += '<div class="con-grid">' +
      '<div class="con-photo"><div class="poster poster-photo tilt"><div class="p-top"><span>' + esc(P.name) + '</span><span>@wordeaux</span></div><img src="assets/photos/contact.webp" alt="' + esc(P.fullName) + '" loading="lazy" width="604" height="557"></div>' +
        '<span class="bubble bubble-pink">faradishaazhar@gmail.com</span></div>' +
      '<div class="con-list">' + rows +
        '<div class="sub-head" style="margin-top:14px"><h3>' + esc(l.findT) + '</h3></div>' +
        '<div class="contact-row">' + ext(LINKS.medium, 'btn', 'Medium <span class="c-val">@wordeaux</span>') + ext(LINKS.wattpad, 'btn', 'Wattpad <span class="c-val">wordeaux</span>') + '</div>' +
      '</div></div>';
    return h + '</section>';
  }

  /* ------------------------------------------------------------------------
     5. CHROME + PAGING
     ------------------------------------------------------------------------ */
  function navItem(s) {
    var c = cat(s);
    var lead = c ? tag(c.tag) : icon(s);
    var count = c ? worksIn(s).length : '';
    return '<a class="side-item" href="#' + s + '" data-nav="' + s + '">' + lead + '<span>' + esc(navLabel(s)) + '</span>' + (count ? '<span class="count">' + count + '</span>' : '') + '</a>';
  }
  function navList() {
    var l = L();
    function group(label, list) { return '<div class="side-group"><div class="side-label">' + esc(label) + '</div>' + list.map(navItem).join('') + '</div>'; }
    return group(l.sideMe, SEC_ME) + group(l.sideWorks, SEC_WORKS) + group(l.sideMore, SEC_MORE);
  }
  function renderChrome() {
    var l = L();
    $('#sidebar').innerHTML = '<div class="side-inner"><div class="lights" aria-hidden="true"><i></i><i></i><i></i></div>' + navList() + '</div>';
    $('#toolbar').innerHTML = '<div class="tb-mobile"><div class="lights" aria-hidden="true"><i></i><i></i><i></i></div>' +
      '<button type="button" class="btn btn-sm" data-action="menu" aria-haspopup="dialog">' + esc(l.sections) + '</button></div>' +
      '<p class="tb-title" id="tb-title">' + tbLabel(curSection) + '</p>' +
      '<div class="lang" role="group" aria-label="Language / Bahasa">' +
        '<button type="button" data-action="lang" data-key="en" aria-pressed="' + (lang === 'en') + '" lang="en">EN</button>' +
        '<button type="button" data-action="lang" data-key="id" aria-pressed="' + (lang === 'id') + '" lang="id">ID</button></div>';
    $('#foot').innerHTML = (window.ARCHIVE_URL ? '<a class="foot-bubble foot-link" href="' + esc(window.ARCHIVE_URL) + '">← Laila’s Archive</a>' : '') + '<span class="foot-bubble">© ' + new Date().getFullYear() + ' ' + esc(P.fullName) + '</span><span class="foot-bubble">' + esc(t(l.foot, { years: P.years, n: WORKS.length })) + '</span>';
    var sk = $('.skip-link'); if (sk) sk.textContent = l.skip;
  }
  function pager(id) {
    var l = L(), i = SECTIONS.indexOf(id), prev = SECTIONS[i - 1], next = SECTIONS[i + 1];
    return '<nav class="pager" aria-label="' + esc(l.pagerLabel) + '">' +
      (prev ? '<a class="btn pg-prev" href="#' + prev + '" data-nav="' + prev + '"><span aria-hidden="true">←</span><span class="pg-txt"><small>' + esc(l.prev) + '</small>' + esc(navLabel(prev)) + '</span></a>' : '<span class="pg-gap"></span>') +
      '<span class="pager-count">' + esc(t(l.pageOf, { n: i + 1, total: SECTIONS.length })) + '</span>' +
      (next ? '<a class="cta-bubble pg-next" href="#' + next + '" data-nav="' + next + '"><span class="pg-txt"><small>' + esc(l.next) + '</small>' + esc(navLabel(next)) + '</span><span aria-hidden="true">→</span></a>' : '<span class="pg-gap"></span>') +
      '</nav>';
  }
  function showPage(id, move) {
    if (SECTIONS.indexOf(id) < 0) id = SECTIONS[0];
    curSection = id;
    SECTIONS.forEach(function (s) { var el = document.getElementById(s); if (el) el.hidden = s !== id; });
    var tt = $('#tb-title'); if (tt) tt.innerHTML = tbLabel(id);
    $$('[data-nav]').forEach(function (a) { if (a.closest('.side-group') && a.getAttribute('data-nav') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current'); });
    if (move) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      var h = document.getElementById(id); h = h && h.querySelector('h1, h2');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    }
  }
  function go(id) {
    if (id !== curSection) { try { history.pushState(null, '', '#' + id); } catch (e) { /* ignore */ } }
    showPage(id, true);
  }
  function render() {
    document.documentElement.lang = lang;
    renderChrome();
    var VIEWS = { about: viewAbout, education: viewEducation, recognition: viewRecognition, contact: viewContact };
    $('#main').innerHTML = SECTIONS.map(function (id) {
      var c = cat(id), h = c ? viewCategory(c) : VIEWS[id](), k = h.lastIndexOf('</section>');
      return h.slice(0, k) + pager(id) + h.slice(k);
    }).join('');
    showPage(curSection, false);
  }

  /* ------------------------------------------------------------------------
     6. EVENTS
     ------------------------------------------------------------------------ */
  var lastFocus = null;
  function closeMenu() { var m = $('#menu'); if (m && m.open) { if (typeof m.close === 'function') m.close(); else m.removeAttribute('open'); } }
  document.addEventListener('click', function (ev) {
    var nav = ev.target.closest('[data-nav]');
    if (nav) { ev.preventDefault(); closeMenu(); go(nav.getAttribute('data-nav')); return; }
    var el = ev.target.closest('[data-action]');
    if (!el) { if (ev.target && ev.target.id === 'menu') closeMenu(); return; }
    var a = el.getAttribute('data-action'), k = el.getAttribute('data-key');
    if (a === 'close') closeMenu();
    else if (a === 'lang' && k !== lang) {
      var y = window.scrollY; lang = k;
      try { localStorage.setItem('wp-lang', lang); } catch (e) { /* ignore */ }
      render(); window.scrollTo({ top: y, left: 0, behavior: 'instant' });
      var b = $('[data-action="lang"][data-key="' + lang + '"]'); if (b) b.focus();
    }
    else if (a === 'menu') {
      var m = $('#menu'); lastFocus = el;
      m.innerHTML = '<div class="sheet-inner"><div class="sheet-head"><div class="s-title"><h2>' + esc(L().sections) + '</h2></div><button type="button" class="btn btn-sm" data-action="close">' + esc(L().close) + '</button></div>' + navList() + '</div>';
      if (typeof m.showModal === 'function') m.showModal(); else m.setAttribute('open', '');
    }
  });
  var menuEl = $('#menu');
  if (menuEl) menuEl.addEventListener('close', function () { if (lastFocus && lastFocus.isConnected) lastFocus.focus(); });
  window.addEventListener('popstate', function () { showPage(location.hash.slice(1), true); });

  var h0 = location.hash.slice(1); if (SECTIONS.indexOf(h0) > -1) curSection = h0;
  try { history.scrollRestoration = 'manual'; } catch (e) { /* ignore */ }
  window.addEventListener('load', function () { if (location.hash) setTimeout(function () { window.scrollTo({ top: 0, left: 0, behavior: 'instant' }); }, 0); });

  render();

  // Exposed for automated checks only
  window.__wp = { WORKS: WORKS, SECTIONS: SECTIONS, get lang() { return lang; } };
})();
