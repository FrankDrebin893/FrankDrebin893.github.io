import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ location }) => {
  return (
    <Layout location={location} title="HOJTE.NET">
      <div className="sc1-panel">
        <p className="sc1-panel-title">HOJTE.NET</p>
        <p className="sc1-panel-subtitle">RASMUS HØJTE // DEVLOG</p>
        <hr className="sc1-divider" />
        <nav>
          <ul className="sc1-menu-list">
            <li>
              <Link className="sc1-menu-item" to="/devlog/">DEVLOG</Link>
            </li>
            <li>
              <a
                className="sc1-menu-item"
                href="https://www.linkedin.com/in/rasmus-h%C3%B8jte-4a2326110/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LINKEDIN
              </a>
            </li>
            <li>
              <a
                className="sc1-menu-item"
                href="https://github.com/FrankDrebin893"
                target="_blank"
                rel="noopener noreferrer"
              >
                GITHUB
              </a>
            </li>
            <li>
              <a
                className="sc1-menu-item"
                href="https://soundcloud.com/rasmus-valbro-h-jte"
                target="_blank"
                rel="noopener noreferrer"
              >
                SOUNDCLOUD
              </a>
            </li>
            <li>
              <a
                className="sc1-menu-item"
                href="https://www.youtube.com/@Cruize91/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                YOUTUBE
              </a>
            </li>
          </ul>
        </nav>
        <p className="sc1-panel-footer">© RASMUS HØJTE {new Date().getFullYear()}</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <Seo title="HOJTE.NET" />
