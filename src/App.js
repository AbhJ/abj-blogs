import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Main from './Main';
import "./syles.css";

// THE MAIN IDEA IS EACH BLOG SHOULD HAVE A LINK.
// SOME MAY BE EXTERNAL TO OUR SITE.

const App = () => {
	const toggleDarkMode = () => setDarkMode(darkMode ? false : true);
	const storedDarkMode = localStorage.getItem("DARK_MODE");
	const [darkMode, setDarkMode] = useState(storedDarkMode);
	localStorage.setItem("DARK_MODE", darkMode);
	return (
		<div className='App' data-theme={darkMode ? "dark" : "light"}>
			<button onClick={toggleDarkMode}>
  Toggle Dark Mode
			</button>

			<Header />
			<Main />
		</div>
	)
};

export default App;
