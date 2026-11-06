# Abandoned but Not Forgotten

An interactive story for the **NASA International Space Apps Challenge** challenge “Abandoned but Not Forgotten: Storytelling about NASA’s Discarded Equipment on the Moon and Mars.”

The experience is a five-act picture book narrated by the machines humans left behind. A child looking at the sky provides the emotional thread. Each act combines original CSS illustration, short first-person narration, a NASA fact, and a large tap/keyboard-friendly interaction.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
npm run preview
```

## Stack

- Vite, React, and TypeScript
- Framer Motion for small, intentional entrance transitions
- Original responsive CSS scene art; no fragile image dependency
- Web Audio API ambient tone, started only after the visitor presses the sound control

## Story and data

All story copy and interactive facts live in `src/data/story.ts`. Sources are mapped in [`docs/SOURCES.md`](docs/SOURCES.md). The reference design analysis and implementation decisions are in `docs/REFERENCE_ANALYSIS.md` and `docs/DECISIONS.md`.

## Credits

Team credit: `TEAM STILL HERE / NASA SPACE APPS 2026`. Replace this line with the final participant names before submission.

This is an independent educational project for NASA Space Apps. NASA source material is credited in the site and source list. The project is not endorsed by NASA.
