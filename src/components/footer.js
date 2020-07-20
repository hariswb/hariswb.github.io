import React from "react"
import "./layout-custom.css"


function Footer(){
	return(
		<div className="footer">
			<div className="links"> 
				<a href="http://twitter.com/khalayakumum"  target="_blank"><img className="contact-logo" src={'/Twitter_Logo_Blue.png'} alt="Twitter Logo" /></a>
				<a href="http://github.com/hariswb"  target="_blank"><img className="contact-logo" src={'/GitHub_Logo.png'} alt="Github Logo" /></a>
			</div>
		</div>
		)
}

export default Footer