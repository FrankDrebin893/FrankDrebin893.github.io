# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run develop   # dev server at http://localhost:8000 (hot reload)
npm run build     # production build to public/
npm run deploy    # build + publish to GitHub Pages via gh-pages
npm run serve     # serve production build locally
npm run clean     # delete .cache and public/
npm run format    # Prettier over all JS/TS/JSON/MD files
```

GraphiQL (data explorer) is available at `http://localhost:8000/___graphql` during development.

There are no tests — the test script is a placeholder.

## Architecture

Gatsby 4 static site with Markdown content, deployed to GitHub Pages at hojte.net.

**Data layer** — `gatsby-source-filesystem` reads `content/blog/` and `src/images/`. `gatsby-transformer-remark` converts Markdown to HTML. `gatsby-node.js` generates one page per post via the `blog-post.js` template, injecting `previousPostId`/`nextPostId` context for prev/next navigation.

**Pages**
- `src/pages/index.js` — root landing page (centered nav card linking to Blog + external profiles)
- `src/pages/devlog.js` — post list page (displayed as "Blog", route stays `/devlog/`), queries all `MarkdownRemark` nodes sorted by date DESC
- `src/templates/blog-post.js` — individual post view; includes JSON-LD `BlogPosting` schema in `<Head>`

**Components**
- `layout.js` — two-mode wrapper: root path renders a full-screen `site-home`, all other paths render `site-page` with a back-to-home header and footer
- `seo.js` — standard SEO head component

**Styling** — single `src/style.css` with a modern dark theme. CSS custom properties live in `:root` (`--bg`, `--bg-elevated`, `--border`, `--text`, `--text-heading`, `--text-muted`, `--accent`, `--font-sans`, `--font-mono`). Body copy and headings use the system sans-serif font stack; monospace (system stack, no webfont) is reserved for code blocks and inline code. All UI elements use `site-*` and `post-*` BEM-style class names. No CSS framework; no CSS modules; single fixed theme (no light/dark toggle).

## Writing posts

Posts live in `content/blog/<slug>/index.md`. Frontmatter fields:

```markdown
---
title: Post Title
date: "2026-04-10"
description: Short summary shown in the post list.
---
```

Images go in `content/blog/<slug>/images/` and are referenced as `./images/filename.png`.
