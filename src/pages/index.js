import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentList from "../components/contentlist"

const IndexPage = () => {
  return (
  <Layout>
    <SEO title="Home" />
    <ContentList/>
  </Layout>
)}

export default IndexPage
