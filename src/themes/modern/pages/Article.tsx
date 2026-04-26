import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { getPostBySlug, readingTime } from '../../../lib/posts';

const Article: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	const post = slug ? getPostBySlug(slug) : null;

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
	}, [slug]);

	if (!post) {
		return (
			<div className="article article--missing">
				<h1 className="article__title">Post not found</h1>
				<p className="article__lead">
					No essay matches <code>{slug}</code>.
				</p>
				<Link to="/" className="article__back">&larr; Back to all writing</Link>
			</div>
		);
	}

	const mins = readingTime(post.body);

	return (
		<article className="article">
			<Link to="/" className="article__back">&larr; All writing</Link>
			<header className="article__header">
				<div className="article__meta">
					<time dateTime={post.dateISO}>{post.dateDisplay}</time>
					<span aria-hidden="true">·</span>
					<span>{mins} min read</span>
				</div>
				<h1 className="article__title">{post.title}</h1>
				{post.summary && <p className="article__summary">{post.summary}</p>}
				{post.tags.length > 0 && (
					<div className="article__tags">
						{post.tags.map((t) => (
							<span key={t} className="article__tag">{t}</span>
						))}
					</div>
				)}
			</header>
			<div className="article__body">
				<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
					{post.body}
				</ReactMarkdown>
			</div>
			<div className="article__footer">
				<Link to="/" className="article__back">&larr; All writing</Link>
			</div>
		</article>
	);
};

export default Article;
