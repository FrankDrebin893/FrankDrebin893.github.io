---
name: HOJTE.NET
description: Garden Paper, a fresh, plant-inspired personal site for Rasmus Valbro Højte
colors:
  bg: "#f4f9ee"
  surface: "#ffffff"
  surface-warm: "#e6f2dc"
  ink: "#153023"
  text: "#34503f"
  text-muted: "#587061"
  leaf: "#2c9150"
  leaf-text: "#1d6e3a"
  leaf-tint: "#d9f0d6"
  lime: "#cfe96f"
  lime-tint: "#e6f4b4"
  sage: "#b5e0bd"
  sky-tint: "#dde7ff"
  linkedin: "#0a66c2"
  line: "#d9e8cf"
typography:
  display:
    fontFamily: "'Bricolage Grotesque', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 13vw, 5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Bricolage Grotesque', 'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "1.85rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "'Newsreader', Georgia, serif"
    fontSize: "1.2rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Schibsted Grotesk', system-ui, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 600
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
components:
  link-tile:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "14px 18px"
---

# Design System: HOJTE.NET

## Overview

**Creative North Star: "Garden Paper"**

A friendly personal site that feels like a sunlit greenhouse: pale garden-cream paper, deep forest ink, and a trio of plant greens (leaf, lime, sage) used with confidence. It replaces the earlier dark "Blueprint Monolith" theme, which read as cold and generic.

### Key Characteristics
- **Warm light canvas**: cream `#f4f9ee` with white raised surfaces.
- **Real color, one per job**: leaf green for emphasis, lime for highlights and dates, sage as a background shape, brand blue only on LinkedIn.
- **Expressive type**: Bricolage Grotesque for display, Newsreader serif for reading and the italic tagline, Schibsted Grotesk for UI.
- **Playful motion, one moment**: the lime highlighter draws under ".NET", then the links rise in. Hover lifts tiles and tilts their icons.

## Colors

- **Cream** (`#f4f9ee`): page background.
- **Forest Ink** (`#153023`): headings, code block background, primary text emphasis.
- **Leaf** (`#2c9150`): the ".NET" wordmark, list markers, hover accents. Use `leaf-text` (`#1d6e3a`) for leaf text on light surfaces to keep AA contrast.
- **Sun** (`#cfe96f` / tint `#e6f4b4`): highlighter underline, date chips, blockquotes, selection.
- **Sage** (`#b5e0bd`): soft secondary tint.

### Named Rules
**The One Highlighter Rule.** Lime is the single highlighter: underline, selection, date chips. It never becomes a background wash.

## Typography

- **Display** (Bricolage Grotesque 800, tracking -0.035em): wordmark and page titles.
- **Reading** (Newsreader 400, 1.2rem, line-height 1.7, 66ch): article prose and the italic tagline.
- **UI** (Schibsted Grotesk 600): chips, nav, meta.
- **Code** (JetBrains Mono): code only.

## Elevation

One system: soft layered shadows on white surfaces, no borders. Hover raises a surface (`translateY(-3px)`) and warms its tint.

## Shapes

Cards and tiles 16px, icon chips 12px, pills only for small controls (dates, back button).

## Do's and Don'ts

### Do:
- **Do** let the home page breathe: big wordmark and three colorful tiles on plain cream.
- **Do** keep each link tile its own color (leaf, forest, LinkedIn blue).
- **Do** keep code blocks deep forest for contrast against the cream page.

### Don't:
- **Don't** use gradient text, hard offset shadows, or glow halos.
- **Don't** use arrow glyphs or emoji as icons; draw SVG.
- **Don't** add eyebrow labels above headings.
