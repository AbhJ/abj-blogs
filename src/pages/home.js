import React from 'react'
import Button from "../components/Button"
import Blogs from "../components/Blogs"
import Footer from "../components/Footer"
import RecentBlogsHeading from "../components/RecentBlogsHeading.js"
import {useState} from 'react'

// THE MAIN IDEA IS EACH BLOG SHOULD HAVE A LINK.
// SOME MAY BE EXTERNAL TO OUR SITE.

const Home = () => {
	const [blog, /* setBlogs */] = useState(
		[
			{
				id: 4,
				headLine: "My Review of 'Zero To One'",
				day: "Oct 12 2021"
			},
			{
				id: 3,
				headLine: "Languages of the Future",
				day: "Aug 21 2021"
			},
			{
				id: 2,
				headLine: "My Internship at Salesforce",
				day: "Aug 20 2021"
			},
			{
				id: 1,
				headLine: "A Tribute to Kentaro Miura",
				day: "Jul 27 2021",
			}
		]
	)
	return (
		<div className="Home">
			{/* BLOGS MAY HAVE BACK TO THIS ARTICLE INSTEAD */}
			<div style={{maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative'}}>
				<RecentBlogsHeading />
				<Blogs blogList={blog} />
			</div>
			<Footer
				isBlogsHomePage = {true}
			/>
		</div>
	)
}

export default Home;
