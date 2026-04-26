import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const MONTHS = [
	'January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December',
];

const Copyright: React.FC = () => {
	const now = new Date();
	const month = MONTHS[now.getMonth()];
	const year = now.getFullYear();

	// Route-aware: if the user is reading a classic article at /classic/p/:slug,
	// send the "Back to modern UI" link to the same post in the modern theme
	// (/:slug). Otherwise send them to the modern home.
	const location = useLocation();
	const match = location.pathname.match(/^\/classic\/p\/([^/]+)/);
	const modernLink = match ? `/${match[1]}` : '/';

	return (
		<div className="footer no-select">
			<center>
				<div className="copyright text-white">
					<small>
						Copyright &copy; <a href="https://abhj.github.io">ABJ</a> {month} {year}
						<span className="copyright__sep"> &middot; </span>
						<Link to={modernLink} className="copyright__back">Back to modern UI &rarr;</Link>
					</small>
				</div>
			</center>
		</div>
	);
};

export default Copyright;
