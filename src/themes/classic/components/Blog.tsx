import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../../../lib/posts';

const blogNames: React.CSSProperties = {
	paddingTop: '0.4em',
	paddingBottom: '0.4em',
};

const Blog: React.FC<{ blog: Post }> = ({ blog }) => {
	const href = blog.slug ? `/classic/p/${blog.slug}` : `/classic/blog${blog.id}`;
	return (
		<div>
			<div style={blogNames}>
				{blog.id}){' '}
				<span className="name-of-blog">
					<Link to={href}>{blog.headLine || blog.title}</Link>
				</span>
				<span style={{ float: 'right', paddingRight: '1.25em' }} className="div-no-mobile">
					{blog.day || blog.dateDisplay}
				</span>
			</div>
			<div className="horizontal-rule" />
		</div>
	);
};

export default Blog;
