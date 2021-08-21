import Blog from './Blog'

const Blogs = ({ blogList }) => {

	// A PROBLEM WITH STATES IS STATE IS IMMUTABLE
	// EACH TYPE WE ADD A BLOG, THE STATE HAS TO BE
	// CHANGED

	return (
		<div>
			{blogList.map((blog) => (
				<Blog key={blog.id} blog = {blog} />
			))}
			<hr />
			<br />
			<br />
		</div>
	)
}

export default Blogs
