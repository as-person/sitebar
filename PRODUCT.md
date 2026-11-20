# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: static HTML/CSS (+ minimal vanilla JS) on GitHub Pages with the custom domain bar48.ge (CNAME). No build step, so deploy stays a plain push. jQuery and the HTML5 UP "Strata" template are to be dropped in the redesign.

## Users

Two audiences in roughly equal measure:
- **Visitors to Batumi** looking for somewhere to go late at night. They don't know the bar yet, read in English or Russian, and are usually on a phone, often already out on the street.
- **Regulars** who already know Bar 48 and open the site to check the menu, prices, or the beer-deposit offer.

## Product Purpose

The website of Bar 48, a late-night bar in Batumi, Georgia. Its main job is to get people **physically into the bar**: where it is, when it is open, how to get there, and why it is worth the walk. The food and drinks menus with prices are the second job, serving both newcomers and regulars.

Success: a visitor on a phone understands within seconds that this is a late-night rock bar, that it is open (or when it opens), and how to get there.

## Positioning

- **Open 00:30–06:00**: a place to go after everything else has closed.
- **Rock-bar atmosphere**: rock music and LED/neon lighting inside the bar.
- **Cheap and generous**: Batumi beer 400 ml for 7 ₾, a beer deposit (5 beers for 20 ₾ per shift, 12 beers for 50 ₾ over 14 days, only for members of the Telegram group), and 60+ syrups and liqueurs.
- **Food at night**: pizza and snacks served when the city's kitchens are closed.

## Operating Context

- Address: Batumi, 26 May Street, 27. Phone: +995 599 54 98 07. Telegram group: https://t.me/BAR48_Batumi
- Reviews on Google Maps (https://maps.app.goo.gl/VGhTZVqB5AjMxYQJ9) and Yandex Maps (https://yandex.com.ge/maps/-/CHGJjGn7).
- Pages: home, /food, /drinks, /photos, 404.
- Three languages: English (default), Georgian (ka), Russian (ru). Copy lives in `lang.js`.
- Google Analytics tag G-WJXPF8V3XT; Yandex verification file in the root.

## Capabilities and Constraints

- The menu (food: pizzas, snacks, salads, etc.; drinks: beer, shots, cocktails, alcoholic smoothies, etc.) with prices in ₾ and the item photos in `images/*.webp` are factual content and must be kept.
- Translations in all three languages must be kept.
- Undecided: whether languages get separate URLs (/ru/, /ka/) for SEO.
- Hours: open every night, 00:30–06:00 (confirmed by the owner on 2026-11-21; the copy says "every night", not "every evening").

## Brand Commitments

- Name: "Bar 48". Motto: "Feeling down? Have a drink!"
- No logo file exists in the repository.

## Evidence on Hand

- Interior photos: `images/1.webp` … (photos gallery), `images/bar.webp`, `images/beer.webp`.
- Menu photos for most dishes and drinks in `images/`.
- Not on hand: reviews/testimonials as text, ratings, press. Do not fabricate them; link to the Google/Yandex review pages instead.

## Product Principles

1. Getting to the bar comes first: hours, address, and the route are never more than one tap away.
2. Night-time and phone-first: the site is read at night, outdoors, on a phone, sometimes after a drink. Text must be large, contrast high, and buttons easy to hit.
3. Prices are honest and visible: a cheap bar shows its prices; no "ask the staff".
4. One site, three languages, all equal: KA and RU are not second-class.
5. Show the real bar: real photos of the place and the food, no stock imagery.

## Accessibility & Inclusion

WCAG 2.2 AA: contrast, tap targets of at least 44px, `alt` text on every photo, `prefers-reduced-motion`, and a correct `lang` attribute for each language.
