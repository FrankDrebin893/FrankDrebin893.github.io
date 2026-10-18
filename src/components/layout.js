import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      {isRootPath ? (
        <div className="site-home">
          {children}
        </div>
      ) : (
        <div className="site-page">
          <header className="site-header">
            <Link to="/" className="site-back-link">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5l-7 7 7 7" />
              </svg>
              <span>Home</span>
            </Link>
            <nav className="site-header-nav" aria-label="Page header navigation">
              <Link to="/projects/" className="site-header-link">Projects</Link>
              <Link to="/devlog/" className="site-header-link">Blog</Link>
              <a
                href="https://github.com/FrankDrebin893"
                target="_blank"
                rel="noopener noreferrer"
                className="site-header-link"
              >
                GitHub
              </a>
            </nav>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            <span>© RASMUS HØJTE {new Date().getFullYear()}</span>
            <span className="site-header-title">HOJTE.NET</span>
          </footer>
        </div>
      )}
    </>
  )
}

export default Layout
