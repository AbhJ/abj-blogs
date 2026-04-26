import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getPostBySlug } from '../../../lib/posts';

const SiteFooter: React.FC = () => {
	const year = new Date().getFullYear();
	const month = new Date().toLocaleString('en-US', { month: 'long' });

	// If we're viewing an article (path === "/<slug>" and slug resolves to a
	// real post), send the "classic version" link to that post's classic URL
	// instead of the classic home.
	const location = useLocation();
	const segments = location.pathname.split('/').filter(Boolean);
	const slug = segments.length === 1 ? segments[0] : '';
	const classicLink = slug && getPostBySlug(slug) ? `/classic/p/${slug}` : '/classic';

	return (
		<footer className="footer">
			<div className="footer__inner">
				<div className="footer__col">
					<h4 className="footer__heading">Connect</h4>
					<div className="footer__socials">
						<a className="footer__social" href="https://github.com/AbhJ" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.31 3.44 9.82 8.21 11.41.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.6-4.04-1.6-.55-1.39-1.33-1.77-1.33-1.77-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.32.47-2.39 1.24-3.23-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.8c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.23 0 4.62-2.81 5.64-5.49 5.94.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.83.58C20.57 22.31 24 17.81 24 12.5 24 5.87 18.63.5 12 .5Z"/></svg>
						</a>
						<a className="footer__social" href="https://www.linkedin.com/in/abhj" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.66H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"/></svg>
						</a>
						<a className="footer__social" href="https://x.com/abjkgp" target="_blank" rel="noopener noreferrer" aria-label="X">
							<span style={{ fontWeight: 900, fontSize: '1em', userSelect: 'none', WebkitUserSelect: 'none' }} aria-hidden="true">𝕏</span>
						</a>
						<a className="footer__social" href="https://www.goodreads.com/abhj" target="_blank" rel="noopener noreferrer" aria-label="Goodreads">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.3 19.8c-1.2 2.2-3.2 3.3-5.8 3.3-5.5 0-7.3-4.4-7.3-4.4h2.5s1.3 2.5 4.8 2.5c4.2 0 5.7-3.3 5.7-7.6v-2.2h-.1c-1 2.1-3.2 3.6-5.8 3.6-4.4 0-7.3-3.5-7.3-7.8C4 2.5 7.5.5 10.9.5c2.9 0 5 1.5 5.9 3.5h.1V.8h2.6v13.6c0 2.5-.4 4.1-1.2 5.4ZM11.1 2.7c-2.8 0-4.5 2-4.5 4.5 0 2.7 1.6 4.8 4.5 4.8 3.2 0 5-2.1 5-4.8 0-2.5-1.8-4.5-5-4.5Z"/></svg>
						</a>
						<a className="footer__social" href="https://dev.to/abhj" target="_blank" rel="noopener noreferrer" aria-label="DEV Community">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.36.26-2.2 0-1.91-.02-1.96-.29-2.18zM0 4.94v14.12h24V4.94H0zM8.56 15.3c-.44.58-1.06.77-2.53.77H4.71V8.53h1.4c1.67 0 2.16.18 2.6.9.27.43.29.6.32 2.57.05 2.23-.02 2.73-.47 3.3zm5.09-5.47h-2.47v1.77h1.52v1.28l-.72.04-.75.03v1.77l1.22.03 1.2.04v1.28h-1.6c-1.53 0-1.6-.01-1.87-.3l-.3-.28v-3.16c0-3.02.01-3.18.25-3.48.23-.31.25-.31 1.88-.31h1.64l-.02.64-.02.65zm4.68 5.7c-.35.97-1.02 1.03-1.46.13-.18-.38-1.84-8.15-1.72-8.15.38-.07.85-.11.97-.08.08.02.52 1.66.98 3.64l.85 3.62.9-3.47c.5-1.91.94-3.55.97-3.62.05-.07.3-.11.64-.1l.55.03-.59 2.44c-.11.73-.55 3.11-.55 3.11-.66 2.9-1.17 2.47-1.54 2.45z"/></svg>
						</a>
						<a className="footer__social" href="https://www.quora.com/profile/Abhijay-Mitra" target="_blank" rel="noopener noreferrer" aria-label="Quora">
							<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19.7 18.8c.5-.6.4-1.1.4-1.1h1.5s0 .4-.1.9c-.1.4-.2.7-.3 1-.2.7-1.2 1.5-1.2 1.5-1.1.9-2.3.8-2.3.8s-1.4.2-2.5-.5c-1.1-.7-2-2.2-2-2.2s-4.4 1.2-7.8-1.7C2 14.6 2.2 11.1 2.2 10.8 2.2 10.1 2.6 2.3 10.8 2c4.8-.2 7.4 2.8 8.4 5.2.7 1.7.7 3 .7 3.2 0 .2 0 1.1-.2 2-.1.9-.5 1.9-.8 2.4-.3.5-.7 1.2-1.2 1.7-.5.6-1.1 1.1-1.2 1.2 0 0 1 1.2 1.6 1.4.2 0 1.1.3 1.6-.3zM12.7 17.3c.1-.1-.3-.6-.5-.9-.2-.3.1.1-.7-1-.3-.5-.7-.7-1.3-.8h-.7c-.5 0-.8.1-.9.1 0-.1-.2-.3-.3-.5-.1-.2-.1-.5-.1-.5 0-.2 1.5-.9 3.2-.9 1.4 0 2.4.8 2.8 1.2.4.3.5.7.9 1 0 0 .1 0 .1.1.4.3.9-3 .8-5.2-.1-2.2-.2-3.3-1-4.4-.7-1-2.2-1.8-3.6-1.8-.7 0-3 .1-4 1.8C6.2 7.5 6.4 11.1 6.4 11.1s-.3 3.2 1.4 4.9c1.7 1.7 3.4 1.4 4.2 1.4l.7-.1z"/></svg>
						</a>
					</div>
				</div>
				<div className="footer__col footer__col--center">
					<h4 className="footer__heading">Archive</h4>
					<Link to={classicLink} className="footer__legacy">View the classic version &rarr;</Link>
				</div>
				<div className="footer__col footer__col--end">
					<h4 className="footer__heading">Location</h4>
					<p className="footer__lead">Bangalore, India</p>
				</div>
			</div>
			<div className="footer__copy">
				<small>&copy; Abhijay Mitra (ABJ) &middot; {month} {year}</small>
			</div>
		</footer>
	);
};

export default SiteFooter;
