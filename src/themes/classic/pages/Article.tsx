/**
 * Article — renders any post from the registry by URL slug.
 * Route inside ClassicApp: /p/:slug (full URL: /abj-blogs/classic/p/:slug)
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug } from '../../../lib/posts';

const articleWrap: React.CSSProperties = {
	maxWidth: '90%',
	paddingLeft: '5%',
	paddingBottom: '1em',
	top: '-1em',
	position: 'relative',
};

const Article: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	const post = slug ? getPostBySlug(slug) : null;

	if (!post) {
		return (
			<div style={articleWrap}>
				<h2>Post not found</h2>
				<div className="horizontal-rule" />
				<p>No blog post matches "<code>{slug}</code>".</p>
			</div>
		);
	}

	return (
		<div style={articleWrap}>
			<h2>{post.title}</h2>
			<div className="horizontal-rule" />
			{post.dateDisplay && (
				<p style={{ opacity: 0.7, fontSize: '0.9em', marginTop: '1em', marginBottom: '1.5em' }}>
					{post.dateDisplay}
					{post.tags.length > 0 && (
						<span style={{ marginLeft: '1em' }}>
							{post.tags.map((t) => (
								<span key={t} className="post-tag">#{t}</span>
							))}
						</span>
					)}
				</p>
			)}
			<div className="post-body">
				<ReactMarkdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeRaw]}
				>
					{post.body}
				</ReactMarkdown>
			</div>
		</div>
	);
};

export default Article;
