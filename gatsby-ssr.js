/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    React.createElement("link", {
      key: "preload-share-tech-mono",
      rel: "preload",
      href: "/fonts/share-tech-mono.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    }),
  ])
}
