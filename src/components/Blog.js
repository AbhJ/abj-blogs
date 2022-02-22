import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

const Blog = ({blog}) => {
	return (
		<div>
			{blog.id}) <span className='name-of-blog'> <Link to={"/abj-blogs/blog" + blog.id}>{blog.headLine}</Link></span>
			<span style={{float: "right", paddingRight: "1.25em"}} className='div-no-mobile'>
				{blog.day}
			</span>
			<hr />
		</div>
	);
}

Blog.propTypes = {
	id: PropTypes.number,
	headLine: PropTypes.string,
	link: PropTypes.string,
	content: PropTypes.string,
	day: PropTypes.string,
}

export default Blog
