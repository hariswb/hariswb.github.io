import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav">
      <h2>
        <Link
          to="/"
          style={{
            color: `grey`,
            textDecoration: `none`,
          }}
        >
          <strong>{siteTitle}</strong>
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
