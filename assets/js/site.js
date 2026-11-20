/* Bar 48: live open/closed status, mobile action dock, menu section chips. Needs lang.js. */
(function () {
  const OPEN_MIN = 30;       // 00:30
  const CLOSE_MIN = 6 * 60;  // 06:00

  function batumiMinutes() {
    try {
      const parts = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Tbilisi', hour: '2-digit', minute: '2-digit', hourCycle: 'h23'
      }).formatToParts(new Date());
      const h = +parts.find(p => p.type === 'hour').value;
      const m = +parts.find(p => p.type === 'minute').value;
      return h * 60 + m;
    } catch (e) {
      const d = new Date();
      return ((d.getUTCHours() + 4) % 24) * 60 + d.getUTCMinutes();
    }
  }

  function renderStatus() {
    const lang = document.documentElement.lang || 'en';
    const now = batumiMinutes();
    const open = now >= OPEN_MIN && now < CLOSE_MIN;
    document.querySelectorAll('[data-status]').forEach(el => {
      el.dataset.open = String(open);
      el.innerHTML = '';
      if ('statusShort' in el.dataset) {
        el.textContent = open ? htmlToText(t('openShort', lang)) : '00:30';
        el.title = open ? htmlToText(t('openNow', lang)) : htmlToText(t('opensAt', lang));
        return;
      }
      const a = document.createElement('span');
      a.textContent = open ? htmlToText(t('openNow', lang)) : htmlToText(t('opensAt', lang));
      el.appendChild(a);
      if (open) {
        const sep = document.createElement('span');
        sep.className = 'status-sep';
        sep.textContent = '·';
        const b = document.createElement('span');
        b.textContent = htmlToText(t('untilClose', lang));
        el.append(' ', sep, ' ', b);
      }
    });
  }

  function setupDock() {
    const dock = document.querySelector('.dock');
    if (!dock) return;
    const anchor = document.querySelector('[data-dock-anchor]');
    if (!anchor || !('IntersectionObserver' in window)) { dock.dataset.show = 'true'; return; }
    new IntersectionObserver(([e]) => {
      dock.dataset.show = String(!e.isIntersecting && e.boundingClientRect.top < 0);
    }).observe(anchor);
  }

  function setupChips() {
    const links = [...document.querySelectorAll('.chips a[href^="#"]')];
    if (!links.length || !('IntersectionObserver' in window)) return;
    const map = new Map(links.map(a => [a.getAttribute('href').slice(1), a]));
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        links.forEach(a => a.removeAttribute('aria-current'));
        const a = map.get(e.target.id);
        if (a) {
          a.setAttribute('aria-current', 'true');
          a.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        }
      });
    }, { rootMargin: '-35% 0px -60% 0px' });
    map.forEach((_, id) => { const s = document.getElementById(id); if (s) io.observe(s); });
  }

  function init() {
    renderStatus();
    setInterval(renderStatus, 60 * 1000);
    document.addEventListener('languagechange48', renderStatus);
    setupDock();
    setupChips();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
