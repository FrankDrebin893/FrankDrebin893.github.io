import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `HOJTE.NET`

  return (
    <Layout location={location} title={siteTitle}>
      <div className="post-page">
        <article
          className="post-article"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <div className="post-meta-row">
              <time className="post-article-date" dateTime={post.frontmatter.dateIso}>
                {post.frontmatter.date}
              </time>
              {post.timeToRead && <span>{post.timeToRead} min read</span>}
            </div>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
        <nav className="post-nav" aria-label="Article navigation">
          <ul className="post-nav-list">
            <li>
              {previous ? (
                <Link to={previous.fields.slug} rel="prev" className="post-nav-card">
                  <span className="post-nav-dir">Previous</span>
                  <span className="post-nav-title">{previous.frontmatter.title}</span>
                </Link>
              ) : <div />}
            </li>
            <li>
              {next ? (
                <Link to={next.fields.slug} rel="next" className="post-nav-card post-nav-card--next">
                  <span className="post-nav-dir">Next</span>
                  <span className="post-nav-title">{next.frontmatter.title}</span>
                </Link>
              ) : <div />}
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
      timeToRead
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
