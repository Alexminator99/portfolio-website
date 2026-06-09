# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Alex Rivas (xela-dev-mobile.com) — an **Astro 6 + Tailwind v4 (CSS-first) + React 19** static site, deployed to **Cloudflare Workers** via Wrangler. It deliberately mirrors the conventions of the sibling project `/Users/alexminator/Work/anvilWeb`; check there for the established pattern before changing config.

- `output: 'static'` — pre-rendered at build, no SSR.
- React is included for interactive islands, but the site is currently Astro-only (the theme toggle is a small inline script in `Navbar.astro`).

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build → `dist/`
- `npm run preview` — preview the production build
- `npm run check` — `astro check` (TypeScript + Astro diagnostics; the only type gate — there is no separate lint step)
- `npm run deploy` — `wrangler deploy` (Cloudflare Workers, serves `./dist`)

## Architecture & conventions

- **Single source of truth:** `src/consts.ts` holds identity, title, contact, social, and SEO defaults. Change it once.
- **Content as data:** projects and experience live in `src/data/*.json`, schema-validated by `src/content.config.ts` (Astro content collections, `file()` loader). Add or edit an entry there — never hardcode project/role data in components.
- **Tokens-only styling:** all design tokens live in `src/styles/global.css` under Tailwind v4's `@theme` block (warm OKLCH palette, fonts, fluid `--text-*` sizes, radii). Use the generated utilities (`bg-bg`, `text-ink`, `text-ink-soft`, `text-accent`, `font-display`, `text-display`, `rounded-lg`…). Do **not** hardcode one-off colors in components — re-skin by editing `global.css`.
- **Fonts:** self-hosted via Astro's Fontsource provider (`astro.config.ts`) — **Fraunces** (display), **Hanken Grotesk** (body), **JetBrains Mono** (mono/labels), exposed as `--font-display` / `--font-sans` / `--font-mono`.
- **Theming:** dark is default; light is `data-theme="light"` on `<html>`, persisted to `localStorage('theme')`. A no-flash inline script in `BaseLayout.astro` applies it before paint. Light overrides live under `:root[data-theme='light']` in `global.css` — that selector's specificity beats `@theme`'s `:root`, so the utilities re-resolve. New theme-varying colors must be added there too.
- **Components:** Astro-first (zero-JS by default); add a React island only for genuinely interactive pieces. Keep components small and single-purpose; `Section.astro` is the shared wrapper (eyebrow + numbered heading).
- **Motion / a11y:** scroll reveals use native `animation-timeline: view()` (`.reveal`) behind `@supports` + `prefers-reduced-motion` fallbacks; page transitions via `<ClientRouter />`. Keep focus-visible styles and reduced-motion handling intact.

## Library setup

When changing Astro, Tailwind, or integrations, verify current APIs via **Context7** (these libraries move fast) and cross-check `anvilWeb`'s working config.

## Notes

- `og-image.png` is referenced for social cards but not yet in `public/` — supply a 1200×630 image.
- Conventional Commits; never reference AI tooling in commits, code, or docs. Ask before `git commit` / `git push`.
