// import React, { useRef } from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import Link from "gatsby"
// import Img from "gatsby-image"
// import slideStyles from "./slide.module.css"

// import { useSprings, animated, config,useSpring } from 'react-spring'
// import { useWheel } from 'react-use-gesture'


// function Slide (){
//   const data = useStaticQuery(graphql`
//     query AllPagesMdx{
//         allMdx {
//           edges {
//             node {
//               id
//               frontmatter {
//                 title
//                 path
//                 description
//                 featured_image {
//                   childImageSharp {
//                     fluid {
//                       ...GatsbyImageSharpFluid
//                       src
//                       sizes
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//   `)
//   const {allMdx} = data
//   const {edges} = allMdx
//   const pages = edges.map(edge => (edge.node.frontmatter))
//   const featuredImage = pages.map(frontmatter => frontmatter.featured_image.childImageSharp.fluid)
//   const pageTitle = pages.map(frontmatter => frontmatter.title)
//   const pageDescription = pages.map(frontmatter => frontmatter.description)

//   //const page = edges.filter((val)=>{return val.node.frontmatter.title == "Second Project"})[0]

//   const index= useRef(0)

//   const[props, set] = useSprings(pages.length,i=>({ y: 0, height: i === 0? "40vh":"1vh", marginBottom:5, display: i === 0? "block":"none", test: "0px", config: config.slow}))

//   const bind = useWheel(({movement: [mx,my],vxvy: [vx,vy],last,cancel})=>{
//     console.log(Math.abs(my),last,my/Math.abs(my))
//     if (Math.abs(my) > 400 && last)
//       cancel(my/Math.abs(my)>0 ?
//         index.current += (index.current<pages.length-1?1:0):
//           index.current -= (index.current>0?1:0)
//       )
//     set(i=>{
//       if(i >= index.current + 1 || i <= index.current -1)return{y: vy*10, display: "none",marginBottom:5-vy*2, height: "1vh", test: "-100px"}
//       return {y: vy*10, display: "block",  marginBottom:5-vy*2,test: "0px", height: "40vh"}
//     })
//   })

//   return <div className={slideStyles.container}>
//     {props.map(({y, display, height,marginBottom, test},i)=>(
//     <div className={slideStyles.item}>
//       <animated.div className={slideStyles.pageBanner} {... bind()} style={{y,height, marginBottom, backgroundImage:`url(${featuredImage[i].src})`}}></animated.div>
//       <div className={slideStyles.text}>
//         <animated.h1 className={slideStyles.title} style={{display,transform: test.interpolate(t=>`translateX(${0})`)}}>
//           {pageTitle[i]}
//         </animated.h1>
//         <animated.p className={slideStyles.description} style={{display}}>
//             {pageDescription[i]}
//         </animated.p>
//       </div>
//       </div>
//     ))}
//   </div>
// }

// export default Slide
