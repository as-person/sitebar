---
name: Bar 48
description: The front door of a late-night rock bar in Batumi, read on a phone at 1 a.m.
colors:
  backbar-blue: "#2b439d"
  band-blue: "#0f1a41"
  backbar-blue-hover: "#3651b0"
  backbar-blue-ink: "#9cb5f8"
  sign-red: "#ff3a30"
  open-green: "#5fd38a"
  night-ground: "#0b0c10"
  night-raised: "#13151a"
  bone: "#edeef2"
  warm-grey: "#b4b7bf"
  ash: "#8a8e98"
  hairline: "rgba(237, 238, 242, 0.11)"
  hairline-strong: "rgba(237, 238, 242, 0.24)"
  on-blue: "#ffffff"
typography:
  display:
    fontFamily: "Fira Sans Extra Condensed, Noto Sans Georgian, Arial Narrow, sans-serif"
    fontSize: "clamp(4rem, 18vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.86
    letterSpacing: "0.005em"
  headline:
    fontFamily: "Fira Sans Extra Condensed, Noto Sans Georgian, Arial Narrow, sans-serif"
    fontSize: "clamp(2.125rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.01em"
  title:
    fontFamily: "Fira Sans Extra Condensed, Noto Sans Georgian, Arial Narrow, sans-serif"
    fontSize: "2rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.02em"
  price:
    fontFamily: "Fira Sans Extra Condensed, Noto Sans Georgian, Arial Narrow, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 800
    letterSpacing: "0.02em"
    fontFeature: "tnum"
  label:
    fontFamily: "Fira Sans Extra Condensed, Noto Sans Georgian, Arial Narrow, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    letterSpacing: "0.06em"
  button:
    fontFamily: "Fira Sans Extra Condensed, Noto Sans Georgian, Arial Narrow, sans-serif"
    fontSize: "1rem"
    fontWeight: 800
    lineHeight: 1
    letterSpacing: "0.06em"
  body:
    fontFamily: "Golos Text, Noto Sans Georgian, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  item-name:
    fontFamily: "Golos Text, Noto Sans Georgian, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.35
  small:
    fontFamily: "Golos Text, Noto Sans Georgian, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  none: "0px"
spacing:
  gutter-phone: "16px"
  gutter-tablet: "24px"
  gutter-desktop: "40px"
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "56px"
  section-phone: "56px"
  section-desktop: "88px"
  max-width: "1160px"
components:
  button-primary:
    backgroundColor: "{colors.backbar-blue}"
    textColor: "{colors.on-blue}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.backbar-blue-hover}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.bone}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "0 20px"
    height: "48px"
  chip:
    backgroundColor: "transparent"
    textColor: "{colors.warm-grey}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  chip-active:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.night-ground}"
  language-switch-active:
    backgroundColor: "{colors.bone}"
    textColor: "{colors.night-ground}"
    height: "40px"
  nav-link:
    textColor: "{colors.warm-grey}"
    typography: "{typography.label}"
    padding: "0 12px"
    height: "44px"
  dock-primary:
    backgroundColor: "{colors.backbar-blue}"
    textColor: "{colors.on-blue}"
    height: "56px"
  dock-secondary:
    backgroundColor: "{colors.night-raised}"
    textColor: "{colors.bone}"
    height: "56px"
---

# Design System: Bar 48

## Overview

**Creative North Star: "The Front Door at 1 A.M."**

Bar 48 is the conventional bar website done properly: a dark street-level page that answers three questions before anything else (is it open, where is it, what does a beer cost) and then reads like a printed bar menu. The ground is a warm near-black, the type is off-white, and the only accent is the blue of the bar's LED-lit backbar: the bar's own colours are black and blue (owner, 2026-11-22).

The system is flat, square and ruled. Structure comes from 1px warm hairlines, not from cards, shadows or tints. Headings are tall, condensed and uppercase (Fira Sans Extra Condensed 800); reading text is a plain, generous grotesque (Golos Text) sized for a phone outdoors at night. Georgian runs through Noto Sans Georgian with its width axis pulled in so KA headings keep the same condensed silhouette as EN and RU.

Rejected by the user and absent from the build: a red rectangular "48" plate as the logo, neon glow, and the old template's sidebar and card grid.

**Key Characteristics:**
- Warm near-black ground, off-white type, one blue.
- Condensed uppercase display, plain grotesque body.
- Square corners everywhere; 1px hairlines are the only structure.
- Menu rows with dotted leaders and tabular prices.
- Live open/closed status (Asia/Tbilisi time) as the signature element.
- Photography supplies the colour; the UI supplies none.

## Colors

A night palette with a muted backbar blue for actions and one bright mark colour, Sign Red, taken from the red WELCOME LED sign at the bar door (owner asked for a bright accent, 2026-11-22). Band Blue (`band-blue`) is the flat fill of the one brand band (the beer deposit), white text at about 17:1, the deal prices in Sign Red. The blue never exceeds the photographs' own LED blue in chroma (OKLCH C about 0.15); no large flat field of saturated blue (owner: the bright blue was eye-searing, 2026-11-22).

### Primary
- **Backbar Blue** (`backbar-blue`): the fill of the one primary action per view (Get Directions, Telegram group), the first cell of the mobile dock, the active-nav underline and text selection. Hover lifts to **Backbar Blue Hover** (`backbar-blue-hover`). White (`on-blue`) is the only text colour on it.
- **Backbar Blue Ink** (`backbar-blue-ink`): the same blue tuned for text on the dark ground (about 9.7:1). Used for icons beside the menu group links. Never used as a fill.

### Secondary
- **Sign Red** (`sign-red`): the bright mark. Only as text or a thin line, never a fill: the "48" in every wordmark (header, hero, footer), the deposit prices, the motto in the bar statement, the drawn underline of the address, and the 404 numeral. 5.4:1 on the ground, 4.9:1 on Band Blue, so it stays at large or bold sizes.

### Tertiary
- **Open Green** (`open-green`): only the status dot when the bar is open, with a soft 4px ring of itself at 18% opacity. It is a signal, not a palette colour.

### Neutral
- **Night Ground** (`night-ground`): page, header, sticky chip bar. The base of everything.
- **Night Raised** (`night-raised`): the one tonal step up, for image placeholders, menu doors, the map frame and the secondary dock cells.
- **Bone** (`bone`): primary text, headings, prices, focus outline, and the inverted fill of active chips and the active language.
- **Warm Grey** (`warm-grey`): secondary text: taglines, descriptions, nav links at rest, footer.
- **Ash** (`ash`): tertiary text: field labels, separators, fine print, and the closed-status dot.
- **Hairline** (`hairline`) and **Hairline Strong** (`hairline-strong`): bone at 12% and 26%. Hairline divides sections and menu rows; Hairline Strong outlines buttons, chips, the deal box and the dotted price leaders.

### Named Rules
**The Blue Acts, Red Marks Rule.** Backbar blue fills the one primary action per view; Sign Red marks the "48", the deal prices and the motto. Red is never a fill, a button or a background, and neither colour is used for headings or decoration.

**The Photographs Bring the Colour Rule.** The blue LED light in the bar's photos is the only other colour on the page. Do not echo it into the interface as a tint, gradient or glow.

## Typography

**Display Font:** Fira Sans Extra Condensed 600/800 (with Noto Sans Georgian, Arial Narrow)
**Body Font:** Golos Text 400–700 (with Noto Sans Georgian, system-ui)
**Georgian:** Noto Sans Georgian 400–800 with a width axis (62.5%–100%); all fonts self-hosted, latin, cyrillic and georgian subsets.

**Character:** A tall, tight, uppercase sign-board voice over a plain, sturdy reading face. The display face shouts the name and the sections; the body face never tries to be interesting.

### Hierarchy
- **Display** (800, clamp 4rem–6rem on phones, clamp 5rem–7.5rem from 900px, line-height 0.86, uppercase): the hero H1 "BAR 48" and menu page titles (clamp 3.5rem–6rem, line-height 0.9).
- **Headline** (800, clamp 2.25rem–3.5rem, line-height 1, uppercase): section and menu-category headings.
- **Title** (800, 1.75–2rem, uppercase): menu door labels and the deal figures.
- **Price** (800, 1.25rem, tabular figures): menu prices, always on a dotted leader.
- **Label** (600, 1.0625rem, 0.06em tracking, uppercase): nav links, chips; buttons use the same face at 800 and 1.125rem (1.25rem for the hero primary). Field labels are 0.9375rem at 0.08em in Ash.
- **Body** (400, 1.0625rem, line-height 1.6): running text; the About paragraph steps up to 1.1875rem with a 34em measure.
- **Item name** (Golos 600, 1.0625rem, line-height 1.35, sentence case): dish and drink names. Names stay in the body face so long menus remain readable.
- **Small** (400, 0.9375rem, line-height 1.5): item descriptions, footer, status text.

### Named Rules
**The Condensed Georgian Rule.** Under `lang="ka"`, display headings switch to `font-stretch: 75%` with no letter-spacing, so Georgian keeps the condensed sign-board shape. Never fall back to a wide Georgian face for headings.

**The Tabular Price Rule.** Every price and deal figure uses `font-variant-numeric: tabular-nums` so columns of prices align.

## Layout

A single centred column capped at 1160px, with gutters of 16px (phone), 24px (from 600px) and 40px (from 1024px). Sections are full-width bands divided by a hairline, padded 56px vertically on phones and 88px from 900px. Spacing steps are 8, 16, 24, 32 and 56px; 56px is the standard gap between two columns on desktop.

Phone first. The header is two rows on phones (wordmark, short status, language switch; then a full-width nav row that scrolls away while the first row stays pinned). From 760px it is one 60px row. The hero stacks the photo band (clamp 220px–420px, 40svh) above the text and a two-by-one action grid; from 900px it becomes a 5fr/7fr split with the photo filling the right side to full height. Desktop content pairs use 7fr/5fr or 5fr/7fr splits, never equal thirds.

On phones a fixed bottom dock (Directions 2fr, Call 1fr, Telegram 1fr) slides up once the hero actions scroll out of view; it is hidden from 760px. Menu pages carry a sticky, horizontally scrolling chip bar under the header. Menu lists go two columns from 960px. The photo gallery is a masonry of 2, 3 and 4 columns with 6px gaps.

Touch targets are at least 44px tall everywhere; primary buttons are 52–56px.

## Elevation & Depth

Flat. There are no drop shadows anywhere in the interface. Depth comes from one tonal step (Night Raised over Night Ground), from hairlines, and from photography. The only gradients are dark scrims over the hero photo (Night Ground at 92% fading to transparent over the bottom 45% on phones; bottom and left-edge scrims at 30% depth on desktop) so the status and text read over the image.

### Named Rules
**The No-Glow Rule.** No blur shadows, no neon glow, no coloured halos. The open-status ring (a 4px spread of Open Green at 18%) is the single exception and stays a crisp ring, not a blur.

**The Scrim-Only Gradient Rule.** Gradients exist only as dark scrims laid over photographs, in the ground colour. Never as backgrounds, buttons or text fills.

## Shapes

Square corners throughout (0px): buttons, chips, the language switch, the deal box, menu doors, photos, the map. The only round shape is the status dot. Borders are 1px: Hairline for dividers and frames, Hairline Strong for interactive outlines. The active nav link is marked by a 2px inset blue underline, not a pill or a fill. Photos are cropped to fixed ratios: 4:3 for menu thumbnails (96px, 128px from 600px), 21:10 for menu doors, 3:4 for the mosaic and the sign, 16:9 for the pour.

## Components

### Buttons
Blunt, tall, uppercase, square.
- **Shape:** square (0px), 1px border, 52px minimum height (56px for the hero primary), 22px side padding, icon and label 10px apart.
- **Primary:** Backbar Blue fill and border, white label. One per view.
- **Outline (default):** transparent with a Hairline Strong border and Bone label.
- **Hover / Focus / Active:** primary lifts to Backbar Blue Hover; outline brightens its border to Bone over a 6% bone wash. Pressed buttons drop 1px. Focus is a 2px Bone outline offset 3px, everywhere.

### Chips
- **Style:** the menu-page category bar. Square, 44px tall, Hairline Strong border, Label type in Warm Grey.
- **State:** hover turns text and border Bone; the current section inverts to a Bone fill with Night Ground text. The bar is sticky and scrolls horizontally without a visible scrollbar.

### Language Switch
A single outlined strip (Hairline Strong) of three 44px-wide buttons (EN, ქა, RU) split by hairlines. The active language inverts to Bone fill with Night Ground text.

### Navigation
Uppercase Label type in Warm Grey, 44px targets. Hover turns Bone; the current page is Bone with a 2px blue inset underline. The header is Night Ground with a bottom hairline and is sticky.

### Wordmark
The brand is set in type: "BAR 48" in the display face at 800, uppercase, with "48" in Sign Red. There is no logo image and no plate behind the number.

### Open/Closed Status (signature)
A dot plus text, computed live from Asia/Tbilisi time and repeated in the header (short form), over the hero photo, and in the Visit section. Closed: Ash dot, Warm Grey text. Open: Open Green dot with its 4px ring, Bone text.

### Menu Row (signature)
A printed-menu line: thumbnail (4:3) on the left, then the item name, a dotted Hairline Strong leader filling the gap, and the price in tabular Price type on the right; a Small description in Warm Grey below. Rows are separated by a top hairline and padded 18px. Items without a photo keep the text column aligned with their neighbours.

### Menu Door
A large link card into /drinks and /food: Night Raised ground, 1px Hairline frame, a 21:10 photo that scales to 1.03 on hover, and a Title label with an arrow that nudges 4px right.

### Mobile Dock
Fixed bottom bar on phones: three cells separated by 1px hairline gaps, 56px tall, uppercase display labels. The Directions cell is Backbar Blue; Call and Telegram sit on Night Raised. Slides in with a 0.35s ease-out and respects the safe-area inset.

### Motion
One entrance only: the hero photo settles from 1.06 scale and 40% opacity over 1.6s; hero text rises 14px and fades in, staggered 60ms. The shared curve is `cubic-bezier(0.16, 1, 0.3, 1)`. Hover transitions are 0.2s (0.6s for photo scale). Under reduced motion all of it switches off.

## Do's and Don'ts

### Do:
- **Do** set the wordmark as text: "BAR 48" in the display face, with only "48" in Sign Red.
- **Do** keep Backbar Blue for one primary action per view; use Backbar Blue Ink, not the fill blue, whenever blue is text. Keep Sign Red to small marks.
- **Do** keep every corner square (0px) and every rule 1px, in Hairline or Hairline Strong.
- **Do** put prices on dotted leaders in tabular figures, in Bone.
- **Do** keep touch targets at 44px or more and primary actions at 52–56px.
- **Do** switch Georgian headings to the condensed width (`font-stretch: 75%`).
- **Do** let the real bar photography carry the colour, with a ground-colour scrim where text sits on it.

### Don't:
- **Don't** put the "48" on a red rectangle or plate. The user rejected it.
- **Don't** add glows, neon effects, blurred shadows or coloured halos.
- **Don't** use gradients other than dark scrims over photographs.
- **Don't** add a third accent colour or use Sign Red as a fill; Open Green is only the open-status dot.
- **Don't** round corners or put cards inside cards.
- **Don't** colour prices or headings blue.
