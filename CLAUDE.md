# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Vanilla static HTML / CSS / JS portfolio site — no framework, no bundler, no tests, and no native/mobile code. The HTML/CSS/JS in the repo root **is** the deployed artifact (served as-is); there is no build or bundle step. The npm tooling exists only for dev-time linting/formatting (see Commands).

- `index.html` — **all** page content (hero, about, skills, projects, services, experience, testimonials, contact) is hand-coded in this single file. There are no partials, components, or templating.
- `styles.css` — all styling (see token rules below).
- `script.js` — vanilla JS: theme toggle, scroll-reveal animations via `IntersectionObserver`, and smooth anchor scrolling.

## Commands

Tooling is dev-time only — it lints/formats, it does not build or transform the site. After `npm install`:

- `npm run lint` — ESLint (`script.js`) + Stylelint (`styles.css`)
- `npm run format` — Prettier across the repo (`npm run format:check` to verify without writing)

`script.js` is a classic browser script, **not** an ES module — ESLint uses `sourceType: "script"` with browser globals (`eslint.config.mjs`). Prettier is set to 4-space indent + single quotes to match the existing code, so write new code that way.

There is no dev server; preview by serving the folder statically, e.g. `python3 -m http.server 8000`.

## Theming & CSS tokens

All colors, spacing, fonts, and timing are CSS custom properties, and there are two themes:

- `:root` defines the **dark theme (the default)** plus every theme-independent token — accent colors, the category colors (`--android-green`, `--ios-gray`, …), fonts, `--radius-*`, and `--transition-*`.
- `[data-theme="light"]` **overrides only the tokens that must change** for light mode (`--bg-*`, `--text-*`, `--border-color`, `--shadow-color`, and the phone/syntax/status colors).

When adding a color that should look different per theme, define it in `:root` (dark value) **and** override it in `[data-theme="light"]` — a token added to only one block will be wrong in the other theme. Never hardcode hex values in component rules; always reference a token with `var(--…)`. The active theme is set via the `data-theme` attribute and persisted in `localStorage`.
