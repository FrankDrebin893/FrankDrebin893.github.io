import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="sc1-post-page">
        <article
          className="mission-briefing"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <p className="mission-briefing-label">// MISSION BRIEFING</p>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p className="mission-briefing-date">{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav className="sc1-post-nav">
          <ul className="sc1-post-nav-list">
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  {"<"} PREVIOUS MISSION
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  NEXT MISSION {">"}
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export const Head = ({ data: { markdownRemark: post, site } }) => {
  const siteUrl = site.siteMetadata?.siteUrl
  const authorName = site.siteMetadata?.author?.name
  const postUrl = `${siteUrl}${post.fields.slug}`
  const description = post.frontmatter.description || post.excerpt

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.frontmatter.title,
    description,
    datePublished: post.frontmatter.dateIso,
    author: {
      "@type": "Person",
      name: authorName,
      url: siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: authorName,
    },
    url: postUrl,
  }

  return (
    <Seo
      title={post.frontmatter.title}
      description={description}
      type="article"
      url={postUrl}
    >
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Seo>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        siteUrl
        author {
          name
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        dateIso: date(formatString: "YYYY-MM-DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
