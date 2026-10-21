import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DevlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `HOJTE.NET`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="site-sheet">
        <div className="post-list-header">
          <h1 className="post-list-title">Blog</h1>
          <p className="post-list-desc">
            Articles and engineering notes on software architecture, cloud platforms, and audio tools.
          </p>
        </div>

        {posts.length === 0 ? (
          <p>No posts published yet.</p>
        ) : (
          <ol className="post-list">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              const description = post.frontmatter.description || post.excerpt
              return (
                <li key={post.fields.slug}>
                  <Link className="post-list-card" to={post.fields.slug}>
                    <div className="post-list-card-top">
                      <h2 className="post-list-card-title">{title}</h2>
                      <time className="post-list-card-date" dateTime={post.frontmatter.date}>
                        {post.frontmatter.date}
                      </time>
                    </div>
                    {description && (
                      <p className="post-list-card-desc">{description}</p>
                    )}
                  </Link>
                </li>
              )
            })}
          </ol>
        )}
      </div>
    </Layout>
  )
}

export default DevlogPage

export const Head = () => (
  <Seo
    title="Blog — HOJTE.NET"
    description="Technical devlog and engineering notes by Rasmus Valbro Højte covering cloud infrastructure, .NET, DAW automation, and software architecture."
  />
)

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY.MM.DD")
          title
          description
        }
        excerpt(pruneLength: 140)
      }
    }
  }
`
