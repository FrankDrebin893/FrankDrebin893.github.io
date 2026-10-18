import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <div className="site-sheet">
        <div className="page-header">
          <h1 className="page-title">404</h1>
          <p className="page-lede">
            There is no page at this address. Try the <Link to="/projects/">projects</Link> or the{" "}
            <Link to="/devlog/">blog</Link>.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
