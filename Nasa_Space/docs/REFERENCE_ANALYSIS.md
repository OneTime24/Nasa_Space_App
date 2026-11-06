# Reference analysis

## A Solar Tale

The public entry document is a small Vite/React shell that loads one JavaScript bundle and one stylesheet. The rendered experience uses a full-screen illustrated title screen, then a fixed visual layer with a tall scrolling text track. Images cross-fade as the reader moves through the narrative. The reference uses a warm, high-contrast palette, rounded controls, a large central illustration, and a short paragraph at each scroll checkpoint.

The stylesheet confirms the key interaction pattern: a fixed background (`position: fixed`) paired with scroll steps of roughly one viewport and image opacity transitions (`.slide-image.active`). It is a scroll-driven picture-book rather than a conventional page of cards. The title screen has a clear start action and the story adapts to a single-column mobile layout.

The linked site was accessible as a static bundle, but the protected Neal.fun references returned HTTP 403 to the fetch tool. Their commonly recognizable interaction pattern was not copied. This project uses the verified structural lessons only: full-screen scenes, a clear progress language, a gentle pace, and a visual reveal at each story beat. All copy, data, illustrations, and code here are original.

## Decisions carried forward

- Fixed/sticky scene art is used for the cinematic “page” feeling, with text and facts appearing beside it.
- Five clearly named acts are shown in a persistent progress navigation.
- The narrator is the collective voice of the discarded machines, with the child as a hopeful thread.
- CSS/SVG-like original shapes replace third-party illustrations and avoid image-loading failure on slow connections.
- Interactions are buttons with labels, focus states, and tap support instead of hover-only hotspots.
