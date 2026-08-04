# Handoff — Kelen McDonald Web Design Studio

Status as of this handoff: **live and deployed.** Verified working at `https://kelenmcdonald.com` — correct content, correct favicon, no repo files leaking publicly.

## The essentials

| | |
|---|---|
| **Live site** | https://kelenmcdonald.com |
| **Hosting** | Cloudflare Workers (static assets), service `kelenmcdonald-website` |
| **Repo** | https://github.com/TheBrokenVirus/kelenmcdonald-website (branch `main`) |
| **What's actually deployed** | Only `site/` — everything else in the repo (`v1/`, `v2/`, `v3/`, `PRODUCT.md`, `DESIGN.md`, `.claude/`) is history/tooling, not served |
| **Stack** | Zero-build static HTML. One file (`site/index.html`), inline CSS, one small inline `<script>`. No framework, no dependencies, no build step |

## Repo map

```
site/                    ← THE LIVE SITE. This is what Cloudflare serves.
  index.html
  assets/
    kelen.jpg            ← hero photo, optimized (733×1100, ~123KB)
    og-image.jpg          ← social preview card (1200×630, real brand fonts)
  favicon.ico / .svg / favicon-96x96.png / apple-touch-icon.png
  web-app-manifest-*.png / site.webmanifest

v1/  v2/  v3/             ← Three parallel visual-direction explorations, kept for
                             reference. v3 ("The Ceramics Atelier") was chosen and
                             became site/index.html — these are now historical only.

PRODUCT.md                ← durable product truth (audience, positioning, what's
                             real vs. speculative). Read this before making content
                             changes.
DESIGN.md                 ← the design system of record (palette, type, components,
                             named rules, do's/don'ts). Read this before making any
                             visual change — it documents *why*, not just *what*.
.impeccable/               ← Impeccable skill state (critique history, live-mode
                             config, generated design.json sidecar)
.claude/                   ← Claude Code skill tooling (the /impeccable commands
                             used to build this)
wrangler.jsonc             ← tells Cloudflare to serve only site/, not the whole repo
.gitignore
```

## Design system, in one paragraph

**"The Ceramics Atelier"** — warm muted linen ground (never stark cream), a genuine dual accent system (clay + moss, always used together, never clay alone), Instrument Sans as the primary display/body voice (deliberately *not* a serif, to avoid the generic AI-warm cliché), Newsreader italic budgeted for exactly one pull-quote moment, IBM Plex Mono reserved for real data-like content (dates, tags, labels). Section labels sit beside headings, never stacked above as a kicker. Full rationale and every token lives in `DESIGN.md`.

## What happened this session (condensed)

1. **Init** → captured product truth in `PRODUCT.md`.
2. **Critique** of the original site → found real issues (hover-only artwork invisible on touch, low contrast, mobile header collision).
3. **Three parallel redesigns** (v1 blueprint, v2 dark/technical, v3 warm atelier) → user picked **v3**, promoted to root/live.
4. **Documented** the chosen system into `DESIGN.md` + `.impeccable/design.json`.
5. **Hardening passes**, in order: `layout` (fixed a real hero-height bug, alignment drift) → `typeset` (fixed a genuine CSS specificity bug making a label render 17px instead of 11.5px) → `adapt` (touch/pointer states, safe-area insets) → `optimize` (measured — page was already fast, no changes needed) → `clarify` (copy consistency, filled a missing "response time" gap) → `animate` (fixed a real bug: the hero photo's tilt was being silently cancelled by the scroll-reveal system) → `harden` (fixed two real overflow bugs found via stress-testing) → `polish` (final cleanup pass, fixed a hero breakpoint regression from the photo swap).
6. **Real photo** added to the hero (replacing an abstract placeholder graphic) — this is a documented, deliberate exception to DESIGN.md's "no photography" rule (see the Amendment in `DESIGN.md`).
7. **Favicon + social preview image** built and wired in (the user's own KM monogram favicon, plus a hand-rendered 1200×630 OG image using the real brand fonts).
8. **Git + deploy**: repo initialized, pushed to GitHub, connected to Cloudflare. Caught and fixed a real issue where the whole repo (docs, exploration variants, skill tooling) was being served publicly — restructured into `site/` + `wrangler.jsonc` to scope it correctly.
9. **Header mark** swapped from a generated asterisk to the user's actual KM favicon graphic.

## Known, deliberate exceptions to the design system

- **Hero photo** — real photography where the system otherwise says "no stock photography." Scoped exception, documented in `DESIGN.md`.
- **Header mark / favicon gradient** — the header brand mark is now the user's own KM favicon artwork (gold gradient background), replacing the authored-SVG asterisk. Documented as a second Amendment in `DESIGN.md` (added during the `/impeccable document` refresh).
- **Two detector warnings, always present, always accepted**: Instrument Sans is flagged as "overused" (it's pinned by the brief, not a mistake) and several `rgba(60,38,20,...)` shadow values are flagged as "outside DESIGN.md colors" (they're documented in prose in DESIGN.md's Shadow Vocabulary, just not in the frontmatter token list).

## Outstanding / not done

- **Email deliverability on `contact@kelenmcdonald.com` was never verified.** Every CTA on the site points at this address. Confirm it actually receives mail before treating the site as fully live.
- **No real device test.** Everything was verified through browser automation all session (including touch/pointer-specific work in the `adapt` pass). One actual phone tap-test is the one thing that hasn't been checked.
- **Optional, not started**: `robots.txt`, `sitemap.xml`, analytics. None of these block anything; add them if/when they matter.
- **v1/ and v2/ are still in the repo** as reference. Nobody asked to delete them; they're harmless where they are (not publicly served).

## If you (or a future session) want to keep working on this

This project uses the **Impeccable** Claude Code skill (`.claude/skills/impeccable/`). Useful entry points:
- `/impeccable critique site/index.html` — re-score the current live site.
- `/impeccable live` — pick an element in the browser, generate on-brand variants. **Remember**: `.impeccable/live/config.json` must point at `"site/index.html"`, not `"index.html"` — this already got fixed once this session after the `site/` restructuring.
- Any refinement command (`layout`, `typeset`, `adapt`, `clarify`, `animate`, `harden`, `polish`) — all read `DESIGN.md` first and will preserve the established system rather than drifting from it.

**One gotcha worth knowing**: `site/index.html` uses root-relative paths for the favicon/manifest links (`/favicon.ico`, `/site.webmanifest`). These only resolve correctly when `site/` is the actual served root — either in production (Cloudflare, via `wrangler.jsonc`) or in local testing via a real HTTP server rooted at `site/` (`python -m http.server` from inside `site/`). Opening `site/index.html` directly via `file://` will show a broken favicon; that's expected, not a bug.
