import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <div className="sc1-stars sc1-stars-sm" aria-hidden="true" />
      <div className="sc1-stars sc1-stars-lg" aria-hidden="true" />
      {isRootPath ? (
        <div className="sc1-viewport">
          {children}
        </div>
      ) : (
        <div className="sc1-page">
          <header className="sc1-page-header">
            <Link to="/" className="sc1-back-link">{"< MAIN MENU"}</Link>
            <span className="sc1-page-site-title">{title}</span>
          </header>
          <main className="sc1-page-main">{children}</main>
          <footer className="sc1-page-footer">
            © RASMUS HØJTE
          </footer>
        </div>
      )}
    </>
  )
}

export default Layout
