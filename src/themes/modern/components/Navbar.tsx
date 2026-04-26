import React from 'react';
import { Link, NavLink } from 'react-router-dom';

interface Props {
	theme: 'light' | 'dark';
	onToggleTheme: () => void;
}

const Navbar: React.FC<Props> = ({ theme, onToggleTheme }) => (
	<nav className="nav">
		<div className="nav__inner">
			<Link to="/" className="nav__brand">ABJ</Link>
			<div className="nav__links">
				<NavLink
					to="/"
					end
					className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
				>
					Writing
				</NavLink>
				<a className="nav__link" href="https://abhj.github.io/public-portfolio/" target="_blank" rel="noopener noreferrer">
					Portfolio
				</a>
				<button
					className="nav__theme-toggle"
					onClick={onToggleTheme}
					aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
					title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
				>
					{theme === 'dark' ? (
						// Sun icon (click to go light)
						<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<circle cx="12" cy="12" r="4" />
							<path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
						</svg>
					) : (
						// Moon icon (click to go dark)
						<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
							<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
						</svg>
					)}
				</button>
			</div>
		</div>
	</nav>
);

export default Navbar;
