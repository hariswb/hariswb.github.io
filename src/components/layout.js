import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import "./layout-custom.css"

import { MDXProvider } from "@mdx-js/react"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="container">
        <MDXProvider>{children}</MDXProvider>
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
