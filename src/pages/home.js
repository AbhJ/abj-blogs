import React from 'react'
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
				id: 6,
				headLine: "God is an Introvert",
				day: "Feb 25 2022"
			},
			{
				id: 5,
				headLine: "Updates in Ubuntu 21.10",
				day: "Oct 15 2021"
			},
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
				isBlogsHomePage={true}
			/>
		</div>
	)
}

export default Home;
