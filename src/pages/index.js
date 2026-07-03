import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location} title="HOJTE.NET">
      <div className="site-card">
        <p className="site-card-title">HOJTE.NET</p>
        <hr className="site-divider" />
        <nav>
          <ul className="site-nav-list">
            <li>
              <Link className="site-nav-link" to="/devlog/">Blog</Link>
            </li>
            <li>
              <a
                className="site-nav-link"
                href="https://www.linkedin.com/in/rasmus-h%C3%B8jte-4a2326110/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="site-nav-link"
                href="https://github.com/FrankDrebin893"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                className="site-nav-link"
                href="https://soundcloud.com/rasmus-valbro-h-jte"
                target="_blank"
                rel="noopener noreferrer"
              >
                SoundCloud
              </a>
            </li>
            <li>
              <a
                className="site-nav-link"
                href="https://www.youtube.com/@Cruize91/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
          </ul>
        </nav>
        <p className="site-card-footer">© RASMUS HØJTE {new Date().getFullYear()}</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="HOJTE.NET" />
