import React from 'react';
import Blog from './Blog';
import type { Post } from '../../../lib/posts';

const Blogs: React.FC<{ blogList: Post[] }> = ({ blogList }) => (
	<div style={{ wordWrap: 'break-word' }}>
		<div className="horizontal-rule" />
		{blogList.map((blog) => (
			<Blog key={blog.id} blog={blog} />
		))}
	</div>
);

export default Blogs;
