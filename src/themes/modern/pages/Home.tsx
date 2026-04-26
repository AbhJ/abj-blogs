import React from 'react';
import { Link } from 'react-router-dom';
import { posts } from '../../../lib/posts';

const Home: React.FC = () => (
	<div className="home">
		<section className="hero">
			<h1 className="hero__title">Abhijay Mitra</h1>
			<p className="hero__lead">Writing about tech, life, and things in between.</p>
			<a
				className="hero__portfolio"
				href="https://abhj.github.io/public-portfolio/"
				target="_blank"
				rel="noopener noreferrer"
			>
				Get to know me
				<span className="hero__portfolio-arrow" aria-hidden="true">&rarr;</span>
			</a>
		</section>

		<section className="post-index">
			<ol className="post-index__list" reversed>
				{posts.map((p) => (
					<li key={p.slug} className="post-index__item">
						<Link to={`/${p.slug}`} className="post-index__link">
							<span className="post-index__num">{p.id})</span>
							<span className="post-index__title">{p.title}</span>
							<span className="post-index__date">{p.dateDisplay}</span>
						</Link>
					</li>
				))}
			</ol>
		</section>
	</div>
);

export default Home;
