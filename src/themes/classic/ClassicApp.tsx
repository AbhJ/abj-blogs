import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Button from './components/Button';
import PageFooter from './components/PageFooter';
import Copyright from './components/Copyright';
import Home from './pages/home';
import Article from './pages/Article';
import { posts } from '../../lib/posts';
import './index-original.css';

/**
 * Classic theme — the original abj-blogs CRA site, preserved verbatim.
 * See https://github.com/AbhJ/abj-blogs for the original source.
 *
 * Structure (matches the original's App.js):
 *   .App                              ← body-level dark bg, Tahoma 17/30.5
 *     .Non-footer-stuff               ← 52em max-width centered column
 *       toggle Button (top, left-padded)
 *       Header                        ← ABJ Blogs title + subtitle
 *       .Main[data-theme]             ← cream card (light) / dark (dark)
 *         <Routes>
 *     PageFooter                      ← "To Portfolio" / social icons / "To HomePage"
 *     Copyright                       ← single-line footer with "Back to modern UI"
 */
const ClassicApp: React.FC = () => {
	const storedDarkMode = localStorage.getItem('DARK_MODE') === 'true';
	const [darkMode, setDarkMode] = useState<boolean>(storedDarkMode);
	const toggleDarkMode = () => {
		const next = !darkMode;
		setDarkMode(next);
		localStorage.setItem('DARK_MODE', String(next));
	};

	const idToSlug = Object.fromEntries(posts.map((p) => [p.id, p.slug]));

	return (
		<div className="App">
			<div className="Non-footer-stuff">
				<div className="classic-toggle-row">
					<Button
						text={darkMode ? 'Light Mode 🌕' : 'Dark Mode 🌑'}
						className={darkMode ? 'toggleButtonDar' : 'toggleButtonLig'}
						onClick={toggleDarkMode}
					/>
				</div>
				<Header />
				<div className="Main" data-theme={darkMode ? 'dark' : 'light'}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/p/:slug" element={<Article />} />
						{posts.map((p) => (
							<Route
								key={`legacy-${p.id}`}
								path={`/blog${p.id}`}
								element={<Navigate to={`/classic/p/${idToSlug[p.id]}`} replace />}
							/>
						))}
						<Route path="*" element={<Navigate to="/classic" replace />} />
					</Routes>
				</div>
			</div>
			<PageFooter />
			<Copyright />
		</div>
	);
};

export default ClassicApp;
