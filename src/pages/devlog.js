import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DevlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="site-card site-card--wide">
        <p className="site-card-title">Blog</p>
        <hr className="site-divider" />
        {posts.length === 0 ? (
          <p>No posts yet.</p>
        ) : (
          <ol className="post-list">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <li key={post.fields.slug} className="post-list-item">
                  <Link to={post.fields.slug}>
                    <span className="post-list-item-title">{title}</span>
                    <span className="post-list-item-date">{post.frontmatter.date}</span>
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

export const Head = () => <Seo title="Blog" />

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
        }
      }
    }
  }
`
