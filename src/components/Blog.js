import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
	return (
		<div>
			<p>
				<hr />
				{blog.id}) {blog.headLine}: <Link to={"/abj-blogs/blog" + blog.id}>
					link
				</Link>
				<span style={{ float: "right", paddingRight: "1.25em" }}>
					created: {blog.day}
				</span>
			</p>
		</div>
	)
}

Blog.propTypes = {
	id: PropTypes.number,
	headLine: PropTypes.string,
	link: PropTypes.string,
	content: PropTypes.string,
	day: PropTypes.string,
}

export default Blog
