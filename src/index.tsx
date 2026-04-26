import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// GitHub Pages SPA redirect — 404.html sends us here with ?redirect=<path>,
// restore the original URL without a reload.
(function handleSpaRedirect() {
	const params = new URLSearchParams(window.location.search);
	const redirect = params.get('redirect');
	if (redirect) {
		window.history.replaceState(null, '', redirect);
	}
})();

const container = document.getElementById('root');
if (!container) throw new Error('No #root element');

createRoot(container).render(
	<React.StrictMode>
		<BrowserRouter basename="/abj-blogs">
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
