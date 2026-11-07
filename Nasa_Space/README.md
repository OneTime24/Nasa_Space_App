# AFTERLIGHT

An interactive planetary archive for the NASA International Space Apps Challenge theme “Abandoned but Not Forgotten.” AFTERLIGHT documents the machines, instruments and landing hardware humans left on the Moon and Mars.

The application includes a cinematic landing experience, Moon/Mars explorer with draggable and zoomable planetary views, coordinate markers, a searchable artifact archive, mission timeline, educational learning zone and source-linked artifact profiles. The core dataset is strongly typed in `src/data/artifacts.ts` and powers every view.

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
- Original responsive CSS planetary visualization with a lightweight WebGL-independent fallback
- NASA Image and Video Library URLs where available, with CSS visual fallbacks for resilient loading
- Hash-based navigation so deep links work on static hosting

## Story and data

Artifact records, mission timelines, statuses, locations and references live in `src/data/artifacts.ts`. Source notes are mapped in [`docs/SOURCES.md`](docs/SOURCES.md).

## Credits

Team credit: `TEAM NORTH-SOUTH / MOHSIN ALI`.

This is an independent educational project for NASA Space Apps. NASA source material is credited in the site and source list. The project is not endorsed by NASA.
