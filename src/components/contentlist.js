import React from "react"
import { useStaticQuery, graphql,Link } from "gatsby"
import Img from "gatsby-image"
import contentStyles from "./contentlist.module.css"

function ContentList(){
	const data = useStaticQuery(graphql`
    query AllPagesMdx{
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
  	const {allMdx} = data
  	const {edges} = allMdx
  	const post = edges.map(edge => (edge.node))

  	const contents = post.map(node => {
  		return (<div className={contentStyles.card}>
      					<div className={contentStyles.imageContainer}>
                  <Link to={node.fields.slug}>
      						  <Img className={contentStyles.imageContainer} fluid={node.frontmatter.featured_image.childImageSharp.fluid}/>
                  </Link> 
      					</div>
      					<div className={contentStyles.titleandlink}>   	 			
       					</div>				
      				</div>)
  	})

	return (
		<div className={contentStyles.container}>
			{contents}
		</div>
	)
}

export default ContentList