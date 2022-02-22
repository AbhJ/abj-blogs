import Blog from './Blog'

const Blogs = ({blogList}) => {

	// A PROBLEM WITH STATES IS STATE IS IMMUTABLE
	// EACH TYPE WE ADD A BLOG, THE STATE HAS TO BE
	// CHANGED

	return (
		<div style={{wordWrap: 'break-word'}}>
			<p>
				<div class="horizontal-rule"></div>
				{blogList.map((blog) => (
					<Blog key={blog.id} blog={blog} />
				))}
			</p>
		</div>
	)
}



export default Blogs
