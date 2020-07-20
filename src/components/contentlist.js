import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import Img from "gatsby-image"
import contentStyles from "./contentlist.module.css"
import ViewPager from "../components/animatedslide"

function ContentList(){
	const data = useStaticQuery(graphql`
    query AllPagesMdx{
        site {
          siteMetadata {
            description
            about
            author
            credit
          }
        }
        allMdx {
          edges {
            node {
              id
              fields{
              	slug
              }
              frontmatter {
                title
                path
                description
                featured_image {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid
                      src
                      sizes
                    }
                  }
                }
              }
            }
          }
        }
      }
  	`)
  	const {allMdx, site} = data

    const {siteMetadata} = site

  	const {edges} = allMdx
  	const post = edges.map(edge => (edge.node))

  	const contents = post.map(node => {
  		return (<div className={contentStyles.card}>
      					<div className={contentStyles.imageContainer}>
                  <Link to={node.fields.slug}>
      						  <Img className={contentStyles.image} fluid={node.frontmatter.featured_image.childImageSharp.fluid}/>
                  </Link> 
      					</div>
      				</div>)
  	})

    const ccc = post.map(node=>{
      return [node.fields.slug,node.frontmatter.featured_image.childImageSharp.fluid.src]
    })

    console.log(ccc)
	return (
		<div className={contentStyles.container}>
      <div className={contentStyles.animatedslide}>
        <ViewPager featuredImages={ccc}/>
      </div>
      <div className={contentStyles.about}>
        <p>{siteMetadata.about}</p>

      </div>
		</div>
	)
}

export default ContentList