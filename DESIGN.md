---
name: Kelen McDonald — Web Design Studio
description: A solo web design studio's portfolio site, built to prove hand-built craft through material warmth rather than corporate polish.
colors:
  linen: "#EFE7D8"
  linen-deep: "#E4DAC7"
  linen-lift: "#F5EFE3"
  paper-hi: "#FBF7EF"
  ink: "#2A231B"
  ink-soft: "#5E5344"
  ink-faint: "#8A7C69"
  clay: "#BE6A3E"
  clay-fill: "#B0592D"
  clay-ink: "#9C4E26"
  moss: "#5C6A48"
  moss-deep: "#475237"
  moss-faint: "#B8BCA6"
typography:
  display:
    fontFamily: "'Instrument Sans', system-ui, sans-serif"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: "'Instrument Sans', system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.62
  accent-serif:
    fontFamily: "'Newsreader', Georgia, serif"
    fontStyle: "italic"
    fontWeight: 300
  label:
    fontFamily: "'IBM Plex Mono', ui-monospace, monospace"
    fontWeight: 400
rounded:
  sm: "2px"
  md: "4px"
  lg: "6px"
spacing:
  gutter: "40px"
  wrap: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.clay-fill}"
    textColor: "{colors.paper-hi}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.1rem"
  badge-concept:
    backgroundColor: "{colors.clay-fill}"
    textColor: "{colors.paper-hi}"
    rounded: "{rounded.sm}"
---

# Design System: Kelen McDonald — Web Design Studio

## Overview

**Creative North Star: "The Ceramics Atelier"**

A small, well-run studio where the warmth comes from material and care, not from a brochure trying to seem friendly. The page reads like raw linen, terracotta, and moss under natural light — grain-textured paper, hand-drawn marks, one sparing italic voice for a single moment of feeling. It exists to counter the default AI-generated "warm" look (cream ground, oversized italic serif, single terracotta accent): this system pairs clay with moss as a genuine dual-accent system and puts a geometric humanist sans in the display role instead of a serif, so the warmth comes from color, texture, and spacing rather than typographic drama.

Confirmed visual rejections: no purple or violet anywhere, no gradients of any kind (including gradient text), no glass/blur decoration, no "SaaS blob" shapes, no stock photography, no pill-shaped or heavily rounded elements, no kicker/eyebrow label stacked above a heading, no same-size icon+heading+text card grids as page structure.

**Amendment — real founder photography, hero only.** The "no photography" rule targeted generic stock imagery; it never anticipated a real photo of the founder. The hero's materials plate now holds an actual photo of Kelen McDonald, framed in the same mat-border-and-shadow language the plate always used (a physical keepsake photo, not a stock image standing in for content). This is a deliberate, scoped exception: illustration and authored SVG remain the rule everywhere else (Work plates, Services marks), and any future photography should earn the same bar — real, specific, and framed inside the system's own material language, never generic stock.

**Amendment — header mark is the user's own KM favicon graphic, not authored SVG.** The header's brand mark (`.brand .mark`) was originally an authored inline-SVG asterisk in the page's own line-art grammar. It has been replaced with the user's own KM monogram favicon artwork (`<img src="/favicon.svg">`), which carries a gold gradient background — a direct exception to both "author every mark as inline SVG" and "no gradients anywhere." This is scoped to the one 22×22 header mark and the favicon/tab-icon family it matches; it is a deliberate identity choice (the user's own asset, used as-is), not a precedent for introducing gradients or raster marks elsewhere. Every other mark on the page (Work plates, Services icons, the hero swash) stays authored inline SVG, gradient-free.

**Key Characteristics:**
- Muted linen ground, never stark cream — a fabric/paper world, not a screen-white one
- Dual accent (clay + moss) doing real work, not one color propped up alone
- Instrument Sans carries the display voice; Newsreader italic appears exactly once, as a pull-quote
- Section labels sit *beside* headings in a narrow margin column, never stacked above them
- Soft, warm-tinted offset shadows (never a flat zero-offset glow) supply all depth
- A fixed SVG paper-grain texture over the whole page — texture, not gradient

## Colors

The palette is warm and muted throughout; no color is pure or saturated, echoing raw material rather than screen light.

### Primary
- **Clay Fill** (`#B0592D`): the one filled color in the system — primary buttons, the "Concept" badge fill. 4.6:1 against Paper Hi text, safe at any size.
- **Clay** (`#BE6A3E`): the raw accent hue — authored SVG plates, marks, borders, large display-scale use only (3.2:1 on Linen; not for small text).
- **Clay Ink** (`#9C4E26`): the same hue darkened for small readable text and inline links (4.8:1 on Linen).

### Secondary
- **Moss** (`#5C6A48`): the second accent — secondary links, tags, the focus ring, rule dividers where an accent is called for (4.7:1 on Linen, safe for body text).
- **Moss Deep** (`#475237`): moss hover/active state.
- **Moss Faint** (`#B8BCA6`): hairline rules only, never text.

### Neutral
- **Linen** (`#EFE7D8`): page ground. Muted, grayed-down warm neutral — never stark cream.
- **Linen Deep** (`#E4DAC7`): recessed/alternating section bands (`.band--sunk`).
- **Linen Lift** (`#F5EFE3`): lifted surfaces — cards, the work-plate container.
- **Paper Hi** (`#FBF7EF`): text set on filled clay (buttons, badges).
- **Ink** (`#2A231B`): primary text, warm near-black brown, never pure black.
- **Ink Soft** (`#5E5344`): secondary/body-supporting text (6.1:1 on Linen).
- **Ink Faint** (`#8A7C69`): hairline rules and dividers only, never text.

### Named Rules
**The Dual-Accent Rule.** Clay and moss always appear together across a surface, never clay alone. A page that reaches only for clay has regressed to the single-terracotta-accent cliché this system exists to avoid.

**The Small-Text Split Rule.** Raw `clay` (`#BE6A3E`) never carries text below large/display scale — use `clay-ink` for small clay-colored text and reserve raw `clay` for marks, borders, and large surfaces.

## Typography

**Display Font:** Instrument Sans (with system-ui, sans-serif fallback)
**Body Font:** Instrument Sans (with system-ui, sans-serif fallback)
**Accent Font:** Newsreader, italic (with Georgia, serif fallback) — one sparing appearance only
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, monospace fallback)

**Character:** A warm geometric humanist sans carries almost the entire page — confident, approachable, never corporate-cold. The single Newsreader italic appearance exists purely to mark one moment of feeling (the pull-quote); it is a deliberate exception, not a second voice competing with the sans.

### Hierarchy
- **Display** (600, `clamp` fluid scale, 1.08 line-height, -0.03em tracking): hero and section H1/H2, `text-wrap:balance`.
- **Accent-serif** (300 italic, Newsreader): reserved for exactly one pull-quote moment; never a heading, never a component label.
- **Body** (400, 1.62 line-height): paragraph copy, `text-wrap:pretty`.
- **Label** (Plex Mono, small size, often uppercase): section labels, tags, dates, badge text — genuinely data-like content only.

### Named Rules
**The One-Serif Rule.** Newsreader italic is budgeted for a single use on the page. Adding a second serif moment dilutes the sans-as-display decision this system is built on.

**The Beside-Not-Above Rule.** A section label never sits stacked directly above its heading. It lives in a narrow (140px) margin column beside the heading, or is omitted entirely.

## Layout

Container is `.wrap`, max-width 1120px, centered, with a 40px inline gutter. Sections use `.band` with fluid vertical padding (`clamp(72px, 10vw, 132px)`); alternating sections use `.band--sunk` (Linen Deep background) to create rhythm without borders.

The signature structural device is `.sec-head`: a two-column grid (`140px minmax(0,1fr)`) placing the section's mono label in a fixed-width left column beside the heading, not above it. On narrow viewports this reorders rather than stacking as a kicker.

Work and Services both avoid card-grid scaffolding: Work is an asymmetric alternating two-column layout (plate/text sides swap per entry); Services is a stacked list (label / authored SVG mark / copy) with hairline dividers, not boxed cards.

## Elevation & Depth

Depth comes entirely from soft, warm-tinted offset shadows — never a flat zero-offset glow, never neutral gray shadows. Every shadow is a layered pair: a tight, low-blur shadow for contact plus a larger, more diffuse one for lift, both tinted from the ink-brown hue (`rgba(60,38,20,...)`) rather than pure black.

### Shadow Vocabulary
- **Button rest** (`0 3px 8px rgba(60,38,20,.16), 0 12px 26px -10px rgba(60,38,20,.34)`): primary CTA at rest.
- **Button hover** (`0 5px 12px rgba(60,38,20,.18), 0 18px 34px -12px rgba(60,38,20,.4)`): lift on hover, paired with a small upward transform.
- **Card rest** (`0 4px 14px rgba(60,38,20,.08), 0 26px 50px -28px rgba(60,38,20,.35)`): work plates and lifted surfaces.
- **Card hover** (`0 4px 12px rgba(60,38,20,.1), 0 24px 48px -26px rgba(60,38,20,.38)`): slightly stronger lift on interactive hover.

### Named Rules
**The Warm-Shadow Rule.** Every shadow is tinted from ink-brown, never neutral black or gray — depth stays inside the linen/clay/moss world instead of reading as generic UI chrome.

## Shapes

Corners stay small and consistent across the whole system: 2px (`--r-sm`, badges and focus rings), 4px (`--r-md`, buttons, inputs, most components), 6px (`--r-lg`, cards and plates). Nothing is pill-shaped or heavily rounded. A fixed, low-opacity SVG turbulence texture (`mix-blend-mode: multiply`) sits over the whole page as paper grain — a texture, not a gradient, and it is never used as a decorative blob or glow.

## Components

### Buttons
- **Shape:** 4px radius (`--r-md`), never pill-shaped.
- **Primary (`.btn`):** Clay Fill background, Paper Hi text, `0.7rem 1.1rem` padding, warm layered shadow (see Elevation).
- **Small variant (`.btn--sm`):** `0.56rem 1rem` padding, `0.9375rem` font-size; arrow icon hides on the smallest nav breakpoint.
- **Hover / Focus:** hover lifts with a stronger warm shadow and nudges the trailing arrow icon 3px right; focus-visible uses a 2px Moss outline (Ink outline specifically on `.btn`/`.badge-link` for extra contrast against Clay), 4px offset.

### Badges
- **Concept badge (`.badge`):** Clay Fill background, Paper Hi text, 2px radius (`--r-sm`) — marks every work entry as a self-directed concept project. Never omitted, never shrunk below legibility.

### Cards / Plates
- **Corner Style:** 6px radius (`--r-lg`).
- **Background:** Linen Lift.
- **Shadow Strategy:** Card rest/hover pair from Elevation & Depth.
- **Content (Work plates):** each work entry's plate holds one authored inline-SVG illustration (roast rings, architectural elevation, weave pattern) sized and styled per project — never a stock photo, never a generic icon tile.
- **Content (Hero plate):** the one exception — a real photo of Kelen McDonald (`assets/kelen.jpg`), inset in a `.plate-frame` (4px radius, `aspect-ratio:733/1100`, `object-fit:cover`) sitting inside the plate's usual mat padding, with the same `-1.1deg` tilt and mono figcaption (name / role) the specimen plate always used. Reads as a keepsake photo placed on the table, not a hero banner image.

### Inputs / Fields
No form inputs exist yet on this page (the only conversion path is a `mailto:` link with a visible plain-text fallback). If inputs are added later, inherit the 4px radius and warm-shadow focus treatment established by buttons and cards.

### Navigation
Fixed/sticky header with the logo, primary links, and CTA button. Below the mobile breakpoint, the CTA button shrinks to `.btn--sm` and its arrow icon is dropped rather than the button collapsing or overlapping the logo. The brand mark (`.brand .mark`) is a 22×22 `<img src="/favicon.svg">` — the user's own KM monogram favicon artwork on its gold gradient background, at `--r-sm` (2px) rounding — not an authored inline SVG (see amendment above).

## Do's and Don'ts

### Do:
- **Do** use clay and moss together as a genuine dual-accent system — never ship a screen with clay as the only accent color.
- **Do** put section labels beside headings in the 140px margin column (or omit them), never stacked above.
- **Do** author every illustrative mark as inline SVG in the world's own line-art grammar, sized and drawn per context. The header brand mark is the one sanctioned exception (see the amendment above) — the user's own favicon artwork, used as-is.
- **Do** keep shadows warm-tinted, layered (tight + diffuse), and offset — never a flat zero-offset glow.
- **Do** keep corners at 2/4/6px across the whole system; nothing pill-shaped.
- **Do** keep the "Concept"/speculative labeling on every work entry prominent (a filled badge, not small meta text) — this is a durable honesty commitment from PRODUCT.md, not a style choice.
- **Do** pair every `mailto:` CTA with a visible plain-text fallback address nearby.

### Don't:
- **Don't** use a high-contrast serif as the primary display voice. Newsreader italic is budgeted for exactly one pull-quote; a second appearance dilutes the sans-as-display decision.
- **Don't** default to cream + serif + terracotta. That combination is the specific AI-generated cliché this system was built to avoid.
- **Don't** use purple/violet, gradients (including gradient text), glass/blur decoration, or "SaaS blob" shapes anywhere on the page surface. The header favicon mark's gold gradient is the one sanctioned exception (see the amendment above) — it's the user's own brand icon, not a page-surface decoration.
- **Don't** use stock photography anywhere. The hero's founder photo is the one sanctioned exception (see the amendment above) — a specific, real photo framed in the plate's own mat-and-shadow language, not a generic image standing in for content.
- **Don't** build Services or Work as same-size icon+heading+text card grids — both use the alternating/list structures documented in Layout.
- **Don't** let any interactive element look clickable (hover elevation, cursor affordance) without a real link or keyboard focus target — none of the work entries link anywhere today, so their hover states stay modest.
