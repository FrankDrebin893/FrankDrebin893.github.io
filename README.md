# hojte.net

Personal blog by Rasmus Valbro Højte, built with [Gatsby](https://www.gatsbyjs.com/) and deployed to GitHub Pages at [hojte.net](https://hojte.net).

## Getting started

Install dependencies:

```bash
npm install
```

## Development

Start the local development server with hot reloading:

```bash
npm run develop
```

The site will be available at `http://localhost:8000`. GraphiQL (the data explorer) runs at `http://localhost:8000/___graphql`.

## Build & deploy

Build a production bundle:

```bash
npm run build
```

Deploy to GitHub Pages (builds first, then publishes the `public/` folder):

```bash
npm run deploy
```

Other useful commands:

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run serve`   | Serve the production build locally       |
| `npm run clean`   | Delete the `.cache` and `public` folders |
| `npm run format`  | Format all source files with Prettier    |

## Writing a post

Blog posts live in `content/blog/`. Each post is a folder containing an `index.md` file and an optional `images/` subfolder.

```
content/blog/
└── my-new-post/
    ├── index.md
    └── images/
        └── screenshot.png
```

Frontmatter for a post:

```markdown
---
title: My New Post
date: "2026-04-10"
description: A short summary shown in the post list.
---

Post content goes here...
```

Images placed in the post's `images/` folder can be referenced with a relative path:

```markdown
![Alt text](./images/screenshot.png)
```

## Project structure

```
├── content/blog/          # Markdown blog posts
├── src/
│   ├── components/        # React components (bio, layout, seo)
│   ├── images/            # Site-wide images (profile picture, icon)
│   ├── pages/             # Top-level pages (index, 404)
│   └── templates/         # Gatsby page templates (blog post)
├── static/                # Files copied as-is to the build output
├── gatsby-config.js       # Gatsby configuration and plugins
└── gatsby-node.js         # Node API hooks (slug generation, etc.)
```
