import React from 'react'
import Button from "../components/Button"
import Blogs from "../components/Blogs"
import RecentBlogsHeading from "../components/RecentBlogsHeading.js"
import {useState} from 'react'

// THE MAIN IDEA IS EACH BLOG SHOULD HAVE A LINK.
// SOME MAY BE EXTERNAL TO OUR SITE.

const Home = () => {
	const [blog, /* setBlogs */] = useState(
		[
			{
				id: 3,
				headLine: "Languages of the future",
				day: "Aug 21 2021"
			},
			{
				id: 2,
				headLine: "Internship at Salesforce",
				day: "Aug 20 2021"
			},
			{
				id: 1,
				headLine: "A tribute to Kentaro Miura",
				day: "Jul 27 2021",
			}
		]
	)
	return (
		<div className="Home">
			{/* BLOGS MAY HAVE BACK TO THIS ARTICLE INSTEAD */}
			<RecentBlogsHeading />
			<Blogs blogList={blog} />
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
					<a class="sm-icon" href="https://twitter.com/abjkgp" rel="noopener" target="_blank">
						<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
						</svg>
					</a>
					<a class="sm-icon" href="https://github.com/abhj" rel="noopener" target="_blank">
						<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="002424" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
						</svg>
					</a>
					<a class="sm-icon" href="https://www.linkedin.com/in/abhj" rel="noopener" target="_blank">
						<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
							<path d="m5.839218,4.101561c0,1.211972 -0.974141,2.194011 -2.176459,2.194011s-2.176459,-0.982039 -2.176459,-2.194011c0,-1.211094 0.974141,-2.194011 2.176459,-2.194011s2.176459,0.982917 2.176459,2.194011zm0.017552,3.94922l-4.388022,0l0,14.04167l4.388022,0l0,-14.04167zm7.005038,0l-4.359939,0l0,14.04167l4.360816,0l0,-7.370999c0,-4.098413 5.291077,-4.433657 5.291077,0l0,7.370999l4.377491,0l0,-8.89101c0,-6.915523 -7.829986,-6.66365 -9.669445,-3.259423l0,-1.891237z"></path>
						</svg>
					</a>
					<a class="sm-icon" href="https://instagram.com/abjkgp" rel="noopener" target="_blank">
						<svg fill="none" height="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"> <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
							<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
						</svg>
					</a>
				</center>
			</div>
		</div>
	)
}

export default Home;
