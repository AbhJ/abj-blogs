import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, useParams } from 'react-router-dom';
import Home from './pages/Home';
import Article from './pages/Article';
import Navbar from './components/Navbar';
import SiteFooter from './components/SiteFooter';
import Lightbox from './components/Lightbox';
import ScrollFab from './components/ScrollFab';
import { posts } from '../../lib/posts';
import './modern.css';

type Theme = 'light' | 'dark';

/** Redirects old /p/:slug URLs to the bare /:slug path. */
const OldSlugRedirect: React.FC = () => {
	const { slug } = useParams<{ slug: string }>();
	return <Navigate to={`/${slug ?? ''}`} replace />;
};

/**
 * Modern theme — minimalist, artistic, quiet. No particles, no aurora, no
 * moving parts beyond subtle hover transitions. Supports light/dark like the
 * classic theme. User preference persists via localStorage.
 */
const ModernApp: React.FC = () => {
	const [theme, setTheme] = useState<Theme>(() => {
		// Dark is the default; we respect an explicit user choice via localStorage
		// but we do NOT auto-follow system prefers-color-scheme.
		const stored = localStorage.getItem('MODERN_THEME') as Theme | null;
		return stored === 'light' || stored === 'dark' ? stored : 'dark';
	});

	useEffect(() => {
		localStorage.setItem('MODERN_THEME', theme);
	}, [theme]);

	// Smooth theme transition — during the 0.6s flip window, add a class to
	// <html> that tells the CSS to animate every color/border/background at
	// the same pace, so images, cards, code blocks, etc. all change in sync
	// rather than snapping.
	const toggleTheme = () => {
		const html = document.documentElement;
		html.classList.add('theming');
		setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
		window.setTimeout(() => html.classList.remove('theming'), 700);
	};
	const idToSlug = Object.fromEntries(posts.map((p) => [p.id, p.slug]));

	return (
		<div className="modern" data-theme={theme}>
			<Navbar theme={theme} onToggleTheme={toggleTheme} />
			<main className="modern__main">
				<Routes>
					<Route path="/" element={<Home />} />
					{/* Old /p/:slug URLs redirect to the new bare slug path */}
					<Route path="/p/:slug" element={<OldSlugRedirect />} />
					{posts.map((p) => (
						<Route
							key={`legacy-${p.id}`}
							path={`/blog${p.id}`}
							element={<Navigate to={`/${idToSlug[p.id]}`} replace />}
						/>
					))}
					<Route path="/:slug" element={<Article />} />
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
			</main>
			<SiteFooter />
			<Lightbox />
			<ScrollFab />
		</div>
	);
};

export default ModernApp;
