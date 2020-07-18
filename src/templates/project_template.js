import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"


export default function Template ({ data }){
  const { mdx } = data
  const { frontmatter, body } = mdx
  const featuredImgFluid = frontmatter.featured_image.childImageSharp.fluid
  return (
    <Layout>
      <Img fluid={featuredImgFluid}/>
      <h1>{ frontmatter.title }</h1>
        <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!){
    mdx(frontmatter: {path: {eq: $path}}){
      body
      frontmatter{
        path
        title
        date
        featured_image {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
