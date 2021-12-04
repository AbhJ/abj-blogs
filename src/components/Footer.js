/**
 * @class       : Footer
 * @author      : abj (abj@abj)
 * @created     : Sunday Oct 10, 2021 13:13:45 IST
 * @description : Footer
 */

import React from 'react'
import propTypes from 'prop-types'
import Button from "./Button"

// prop types makes react like typescript than vannila javascript

const Footer = (props) => {
	if(props.isBlogsHomePage === true){
		return(
			<div style={foot}>	
				<Button
					text="To Portfolio"
					className= "toPortfolio"
					onClick={() => {
						// console.log("ABJ clicked");
						// if (window.confirm("You will be redirected to ABJ public portfolio. Do you want to leave this page?"))
						window.open("https://abhj.github.io/public-portfolio/", "_self");
					}
					} />
				<div style={{paddingTop: "2em"}}>
					<center>
						<a class="sm-icon" href="https://twitter.com/abjkgp" target="_blank" rel="noreferrer">
							<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
								<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
							</svg>
						</a>
						<a class="sm-icon" href="https://github.com/abhj" target="_blank" rel="noreferrer">
							<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="002424" width="24" xmlns="http://www.w3.org/2000/svg">
								<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
							</svg>
						</a>
						<a class="sm-icon" href="https://dev.to/abhj" target="_blank" rel="noreferrer">
							<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
								<path fill="currentColor" d="M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z" />
							</svg>
						</a>
						<a class="sm-icon" href="https://www.linkedin.com/in/abhj" target="_blank" rel="noreferrer">
							<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
								<path d="m5.839218,4.101561c0,1.211972 -0.974141,2.194011 -2.176459,2.194011s-2.176459,-0.982039 -2.176459,-2.194011c0,-1.211094 0.974141,-2.194011 2.176459,-2.194011s2.176459,0.982917 2.176459,2.194011zm0.017552,3.94922l-4.388022,0l0,14.04167l4.388022,0l0,-14.04167zm7.005038,0l-4.359939,0l0,14.04167l4.360816,0l0,-7.370999c0,-4.098413 5.291077,-4.433657 5.291077,0l0,7.370999l4.377491,0l0,-8.89101c0,-6.915523 -7.829986,-6.66365 -9.669445,-3.259423l0,-1.891237z"></path>
							</svg>
						</a>
						<a class="sm-icon" href="https://instagram.com/abjkgp" target="_blank" rel="noreferrer">
							<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
								<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
							</svg>
						</a>
						<a class="sm-icon" href="https://www.quora.com/profile/Abhijay-Mitra" target="_blank" rel="noreferrer">
							<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.8" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
								<path fill="currentColor" d="M19.7,18.8C20.2,18.2 20.1,17.7 20.1,17.7H21.6C21.6,17.7 21.6,18.1 21.5,18.6C21.4,19 21.3,19.3 21.2,19.6C21,20.3 20,21.1 20,21.1C18.9,22 17.7,21.9 17.7,21.9C17.7,21.9 16.3,22.1 15.2,21.4C14.1,20.7 13.2,19.2 13.2,19.2C13.2,19.2 8.8,20.4 5.4,17.5C2,14.6 2.2,11.1 2.2,10.8C2.2,10.1 2.6,2.3 10.8,2C15.6,1.8 18.2,4.8 19.2,7.2C19.9,8.9 19.9,10.2 19.9,10.4C19.9,10.6 19.9,11.5 19.7,12.4C19.6,13.3 19.2,14.3 18.9,14.8C18.6,15.3 18.2,16 17.7,16.5C17.2,17.1 16.6,17.6 16.5,17.7C16.5,17.7 17.5,18.9 18.1,19.1C18.3,19.1 19.2,19.4 19.7,18.8M12.7,17.3C12.8,17.2 12.4,16.7 12.2,16.4C12,16.1 12.3,16.5 11.5,15.4C11.2,14.9 10.8,14.7 10.2,14.6C10,14.6 9.7,14.6 9.5,14.6C9,14.6 8.7,14.7 8.6,14.7C8.6,14.6 8.4,14.4 8.3,14.2C8.2,14 8.2,13.7 8.2,13.7C8.2,13.5 9.7,12.8 11.4,12.8C12.8,12.8 13.8,13.6 14.2,14C14.6,14.3 14.7,14.7 15.1,15C15.1,15 15.2,15 15.2,15.1C15.6,15.4 16.1,12.1 16,9.9C15.9,7.7 15.8,6.6 15,5.5C14.3,4.5 12.8,3.7 11.4,3.7C10.7,3.7 8.4,3.8 7.4,5.5C6.2,7.5 6.4,11.1 6.4,11.1C6.4,11.1 6.1,14.3 7.8,16C9.5,17.7 11.2,17.4 12,17.4L12.7,17.3Z" />
							</svg>
						</a>
					</center>
				</div>
			</div>);
	}
	if(props.isBlogsArticle === true){
		return (
			<div style={foot}>	
				<Button
					text="To HomePage"
					className= "toHome"
					onClick={() => {
						console.log("tohome clicked");
					}
					} />
			</div>
		);
	}
	return (
		<></>);
}

Footer.propTypes = {
	title: propTypes.string,
	description: propTypes.string,
	isBlogsHomePage: propTypes.bool,
	isBlogsArticle: propTypes.bool
}

const foot = {
	zIndex: '100000',
	color: "#abb2bf",
	backgroundColor: "#282c34",
	paddingTop: '2em',
	// fontSize: "1em",
	// lineHeight: "1.375em",
	// fontWeight: "bolder",
	// fontFamily: "Roboto Mono",
	// cursor: "pointer"
}

export default Footer;
