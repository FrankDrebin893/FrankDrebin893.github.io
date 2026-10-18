import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <line x1="9" y1="7" x2="15" y2="7" />
    <line x1="9" y1="11" x2="13" y2="11" />
  </svg>
)

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
)

const IndexPage = ({ location }) => {
  return (
    <Layout location={location} title="HOJTE.NET">
      <div className="site-card">
        <header className="site-card-header">
          <h1 className="site-card-title">
            HOJTE<span className="site-card-tld">.NET</span>
          </h1>
          <p className="site-card-subheading">
            Personal website of <span className="site-author-name">Rasmus Valbro Højte</span>
          </p>
        </header>

        <hr className="site-divider" />

        <nav aria-label="Main Navigation">
          <ul className="site-nav-list">
            <li>
              <Link className="site-nav-link site-nav-link--blog" to="/devlog/">
                <span className="site-nav-icon" aria-hidden="true">
                  <BlogIcon />
                </span>
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <a
                className="site-nav-link site-nav-link--github"
                href="https://github.com/FrankDrebin893"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="site-nav-icon" aria-hidden="true">
                  <GitHubIcon />
                </span>
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                className="site-nav-link site-nav-link--linkedin"
                href="https://www.linkedin.com/in/rasmus-valbro-h%C3%B8jte-4a2326110/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="site-nav-icon" aria-hidden="true">
                  <LinkedInIcon />
                </span>
                <span>LinkedIn</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <Seo
    title="HOJTE.NET — Rasmus Højte"
    description="Personal engineering hub for Rasmus Højte. Software development, cloud architecture, and systems engineering."
  />
)
