import React, {useRef, useState,useEffect} from "react"
import { Link } from 'gatsby'
import clamp from 'lodash-es/clamp'
import { useSprings, animated,interpolate } from 'react-spring'
import { useGesture, useDrag } from 'react-use-gesture'
import animatedslideStyles from './animatedslide.module.css'

function ViewPager(props) {
  const index = useRef(0)
  useEffect(() => {
    // Update the document title using the browser API
    return setInnerWidth(window.innerWidth)
  });

  const [innerWidth,setInnerWidth] = useState(1000)
  const [properties, set] = useSprings(props.featuredImages.length, i => ({ x: i * innerWidth, sc: 1, display: 'block' }))
  console.log(innerWidth)

  const bind = useDrag(({ down,swipe, delta: [xDelta], direction: [xDir], distance, cancel }) => {
    if (down && distance > innerWidth / 6)
      cancel((index.current = clamp(index.current + (xDir > 0 ? -1 : 1), 0, props.featuredImages.length - 1)))
    set(i => {
      if (i < index.current - 1 || i > index.current + 1) return { display: 'none' }
      const x = (i - index.current) * innerWidth + (down ? xDelta : 0)
      const sc = down ? 1 - distance / innerWidth / 2 : 1
      return { x, sc, display: 'block' }
  })
    })

  const gambars = props.featuredImages 
  return  <div className={animatedslideStyles.tempat}>
  			{properties.map(({ x, display, sc }, i) => (
		      <animated.div {...bind()} key={i} style={{ display, transform: x.interpolate(x => `translate3d(${x}px,0,0)`) }}>
		        <animated.div style={{ transform: sc.interpolate(s => `scale(${s})`), backgroundImage: `url(${gambars[i][1]})` }}>
		        	<Link to={gambars[i][0]}>
		        		<animated.div style={{ display, transform: interpolate([x,sc],(x,s) => `translate3d(${4*x}px,0,0) scale(${s})`) }} className={animatedslideStyles.link}>
		        			
		        		</animated.div>
		        		</Link>
		        </animated.div>
		      </animated.div>
		    ))}
		  </div>
  		  
}

export default ViewPager