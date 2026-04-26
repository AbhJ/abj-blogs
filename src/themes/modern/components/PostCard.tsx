import React from 'react';
import { Link } from 'react-router-dom';
import type { Post } from '../../../lib/posts';
import { readingTime } from '../../../lib/posts';

const PostCard: React.FC<{ post: Post; index: number }> = ({ post }) => {
	const mins = readingTime(post.body);
	return (
		<article className="post-card">
			<Link to={`/p/${post.slug}`} className="post-card__link">
				<div className="post-card__meta">
					<time className="post-card__date" dateTime={post.dateISO}>{post.dateDisplay}</time>
					<span className="post-card__dot" aria-hidden="true">·</span>
					<span className="post-card__reading">{mins} min read</span>
				</div>
				<h3 className="post-card__title">{post.title}</h3>
				{post.summary && <p className="post-card__summary">{post.summary}</p>}
				{post.tags.length > 0 && (
					<div className="post-card__tags">
						{post.tags.map((t) => (
							<span key={t} className="post-card__tag">{t}</span>
						))}
					</div>
				)}
			</Link>
		</article>
	);
};

export default PostCard;
