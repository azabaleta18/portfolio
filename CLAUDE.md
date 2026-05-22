# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Static single-page portfolio for Alfonso Zabaleta — a freelance web designer/developer based in Buenos Aires. No build step, no framework, no package manager. Three files run directly in the browser.

## Development

Open `index.html` directly in a browser (`file://` protocol works). There is no dev server, bundler, or compilation step.

To preview with live reload, any static server works:
```
npx serve .
# or
python -m http.server 8080
```

## Architecture

| File | Role |
|---|---|
| `index.html` | All markup — single page, 7 sections |
| `styles.css` | Full design system via CSS custom properties (`--teal`, `--bg`, `--shadow-*`, etc.) |
| `app.js` | All interactivity — IIFE, no dependencies |

### CSS design tokens (`:root`)
All colors, radii, shadows, and easing curves are defined as custom properties at the top of `styles.css`. Change the palette there; don't hardcode values elsewhere.

### JS architecture (`app.js`)
Single IIFE with five independent systems:

1. **Lerp smooth scroll** — `#smooth-wrapper` is `position:fixed`, `#smooth-content` is translated via `translate3d` each RAF tick. `document.body.height` is set to match content height so native scrollbars work.
2. **Reveal system** — `IntersectionObserver` adds `.in` class to `[data-reveal]` elements. Delay controlled via `data-delay="ms"` attribute.
3. **Hero entrance** — `.hero.in` class triggers word-by-word headline animation (words wrapped in `.w` spans by JS) and floating card entrance via CSS keyframes.
4. **Count-up** — `[data-count]` elements animate from 0 on intersection. `data-prefix` / `data-suffix` attributes control formatting.
5. **Magnetic cards** — `.fcard` elements track `mousemove` and apply a mild `translate` offset.

### Placeholder replacement guide
- **Portrait photo** — `<img class="portrait-img" src="fotoHero.jpg">` inside `.portrait-blob`. Adjust `object-position` in `.portrait-img` if framing is off.
- **Project images** — replace `.placeholder` divs inside `.project-img` with `<img>` tags.

## Deployment

Hosted on Vercel. Entry point is `index.html` at the repo root — no `vercel.json` needed. Push to `master` triggers auto-deploy.
