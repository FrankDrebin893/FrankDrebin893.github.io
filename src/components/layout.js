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
            <Link to="/" className="site-back-link">{"← Home"}</Link>
            <span className="site-header-title">{title}</span>
          </header>
          <main className="site-main">{children}</main>
          <footer className="site-footer">
            © RASMUS HØJTE
          </footer>
        </div>
      )}
    </>
  )
}

export default Layout
