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
		</div>
	)
}

export default Home;
