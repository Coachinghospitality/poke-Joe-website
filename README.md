# Poke-Joe

A lightweight, mobile-friendly Pokémon collector website. Purchases happen on [Joe's eBay page](https://www.ebay.co.uk/usr/pokejoe_3).

## Website files

- `index.html` — page content.
- `style.css` — colours and responsive layout.
- `site.js` — displays the card gallery and eBay links.
- `site-data.js` — eBay seller URL and public card information.
- `logo.png` — the logo, with a lowercase filename. Replace this image to update the branding.
- `images/cards/` — ready-to-publish card photos.

There are no build steps, accounts, payments, trackers or API keys. Open `index.html` locally, or serve this folder with any static web server.

## Photos: start with what you have

You do not need to rename hundreds of photos first. Share a ZIP or a folder of originals with Codex and start with 6–12 cards. Include their eBay listing links if available. Ask Codex to match front/back photos, flag uncertain identifications, rotate and resize copies for the web, and give each card a consistent filename. Keep originals separately. Do not upload your private inventory spreadsheet, purchase prices or customer details to this public repository.

For each card, use a full front photo as the gallery image. Keep the whole card or slab visible; use the actual item, without retouching marks or damage. Rear and close-up photographs can stay with the eBay listing for this first version. Suggested filenames: `001-pikachu-front.jpg`, `001-pikachu-back.jpg`. Existing filenames also work: put the exact path in the card's `image` field. JPEG, PNG and WebP are supported; convert HEIC before publishing.

## Add a card

Edit the `cards` array in `site-data.js`. The following is a schema example, not real stock: replace every example value before adding it.

```js
cards: [
  {
    name: "Actual card name",
    set: "Actual set",
    number: "Actual card number",
    condition: "Actual condition or verified grade",
    price: 25.00,
    image: "images/cards/001-card-front.jpg",
    ebayUrl: "https://www.ebay.co.uk/itm/REPLACE_WITH_LISTING_ID",
    status: "available"
  }
]
```

Prices are GBP. Each available card needs a valid HTTPS eBay listing URL. Use `status: "sold"` to move it to the previously collected section. Delete an entry to remove it completely. Gallery entries are maintained manually: this site does not synchronise with eBay. Update sold status and prices promptly; the eBay listing is the source of truth. Empty galleries show a friendly message rather than sample stock.

## Hosting

Keep the source in this GitHub repository and connect it to a static host appropriate for a commercial showcase. The host should publish the repository root and needs no build command. Do not add a custom-domain file until a domain has been purchased and configured.

GitHub Pages is not the recommended host for this sales-focused site: [its usage limits restrict sites primarily directed at facilitating commercial transactions](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits). Uploading this repository does not automatically publish a live website.
