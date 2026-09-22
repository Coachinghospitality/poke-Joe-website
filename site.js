(() => {
  'use strict';
  const motionButton = document.querySelector('.motion-toggle');
  let paused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const updateMotion = () => { document.body.classList.toggle('motion-paused', paused); motionButton.setAttribute('aria-pressed', String(paused)); motionButton.textContent = paused ? 'Play background motion' : 'Pause background motion'; };
  updateMotion();
  motionButton.addEventListener('click', () => { paused = !paused; updateMotion(); });
  const data = window.POKEJOE || { cards: [] };
  function ebayLink(value) {
    try { const u = new URL(value); return u.protocol === 'https:' && /(^|\.)ebay\.(co\.uk|com)$/.test(u.hostname) ? u.href : null; } catch { return null; }
  }
  const shop = ebayLink(data.ebayUrl);
  if (shop) document.querySelectorAll('[data-shop]').forEach(a => { a.href = shop; a.hidden = false; });
  document.getElementById('year').textContent = new Date().getFullYear();
  const create = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text) el.textContent = text; return el; };
  const cards = Array.isArray(data.cards) ? data.cards : [];
  let available = 0, sold = 0;
  cards.forEach(card => {
    if (!card.name || !['available', 'sold'].includes(card.status)) return;
    const listing = ebayLink(card.ebayUrl);
    // A card cannot be advertised for sale until it has a valid listing link.
    if (card.status === 'available' && !listing) return;
    const article = create('article', 'card');
    const photo = create('div', 'card-photo');
    if (typeof card.image === 'string' && /^images\/cards\/[^?#]+\.(jpg|jpeg|png|webp)$/i.test(card.image) && !card.image.includes('..')) {
      const img = create('img'); img.src = card.image; img.alt = card.name + (card.condition ? ' — ' + card.condition : ''); img.loading = 'lazy';
      img.addEventListener('error', () => { img.remove(); photo.textContent = 'Photo coming soon'; }); photo.append(img);
    } else photo.textContent = 'Photo coming soon';
    article.append(photo);
    const body = create('div', 'card-body'); body.append(create('h3', '', card.name));
    body.append(create('p', 'card-meta', [card.set, card.number, card.condition].filter(Boolean).join(' · ')));
    if (card.status === 'sold') { body.append(create('span', 'sold-badge', 'Sold')); sold++; }
    else {
      if (Number.isFinite(card.price) && card.price >= 0) body.append(create('p', 'card-price', new Intl.NumberFormat('en-GB', {style:'currency', currency:'GBP'}).format(card.price)));
      const a = create('a', 'button yellow', 'View on eBay ↗'); a.href = listing; body.append(a); available++;
    }
    article.append(body); document.getElementById(card.status === 'sold' ? 'sold-cards' : 'available-cards').append(article);
  });
  document.getElementById('empty-cards').hidden = available > 0;
  document.getElementById('sold-section').hidden = sold === 0;
})();
