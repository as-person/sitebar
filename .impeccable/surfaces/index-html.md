---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: ["food/index.html","drinks/index.html","photos/index.html","404.html"]
---

# Bar 48 site: redesign brief

Scope: the whole site (home, /food, /drinks, /photos, 404). Home = Persuade; menu pages = Read (a menu with prices); photos = Experience.
Audience/job: newcomers on a phone at night + regulars checking prices. Action: come to the bar (directions). Secondary: call, Telegram, the menu.
Constraints: static HTML on GitHub Pages; EN/KA/RU via lang.js; real photos only (most are 180–400px wide, only images/bar.jpg is 1280×576); the menu and prices exactly as in lang.js.
Chosen direction: the category standard (canon), played straight at full craft, chosen by the user on the decision page. Quality bar: the user delegated the references, so the bar is the best independent bar and pub sites: a photo-led first screen, an always-visible "how to get here", and a menu that reads like a printed bar menu.
Build path: code-led (image generation unavailable: the Gemini free tier allows none and the OpenAI balance is empty; the user said to skip the mockup).

## Direction contract

THESIS: The site is the bar's front door at 1 a.m.: is it open, where is it, what does a beer cost. It refuses the template's sidebar, its "work items" cards and the neon glow, in favour of the conventional bar site done properly.

OWN-WORLD: Cool near-black ground (#0b0c10), off-white type (#edeef2), cool grey secondary text, and the bar's own blue (owner: black and blue, 2026-11-22) as the only accent, at the photographs' strength: fill #2b439d for the primary action, ice blue #9cb5f8 for the "48" and the deal prices, deep navy #0f1a41 for the one brand band. The real blue LED photography supplies all the other colour. Type: Fira Sans Extra Condensed 800 uppercase for headings; Golos Text for body; Noto Sans Georgian (condensed width) for Georgian. Menu prices sit in tabular figures on dotted leaders. Square corners, 1px warm hairlines, no glow, no cards-in-cards.

STORY: The visitor sees that it is a rock bar in Batumi, open 00:30–06:00 with live open/closed status by Batumi time, then gets the beer price and the deposit deal, then the menu and the photos, and taps "Get directions", Call or Telegram.

FIRST VIEWPORT: Mobile, 390 wide: a 56px sticky header (text wordmark "BAR 48" with 48 in ice blue, no plate (the user rejected it); short open status; language switch EN/ქა/RU), with the nav as a separate row that scrolls away. Below it, bar.jpg as a full-width photo band about 42vh tall, with a dark scrim at the bottom carrying the open/closed status. Then H1 "BAR 48" at about 64px, the line "Rock bar in Batumi · 00:30–06:00" and the address, and a full-width blue "Get directions" button (the primary action, above the fold) with Call and Telegram side by side under it. Desktop: the photo fills the right side and runs full height; the text column sits left at the same sizes.

FORM: category standard (canon), chosen on the decision page (not from my ordered list); seed:5b793998ab7a952c. Signature interaction: the live open/closed status by Batumi time (Asia/Tbilisi), shown in the hero and the header. Motion: one entrance on the hero (the photo settles from 1.04 scale, the text fades up), plus an instant switch under reduced motion.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
