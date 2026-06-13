import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const DevlogPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <div className="mission-log">
        <p className="mission-label">// MISSION ARCHIVE</p>
        <h1 className="mission-log-title">MISSION LOG</h1>
        {posts.length === 0 ? (
          <p>No missions on record.</p>
        ) : (
          <ol className="mission-list">
            {posts.map(post => {
              const title = post.frontmatter.title || post.fields.slug
              return (
                <li key={post.fields.slug} className="mission-item">
                  <Link to={post.fields.slug}>
                    <span className="mission-item-title">{title}</span>
                    <span className="mission-item-date">{post.frontmatter.date}</span>
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

export const Head = () => <Seo title="Mission Log" />

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
