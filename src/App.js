import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
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
		<div className='App'>
			<Button
				text={darkMode ? "Light Mode" : "Dark Mode"}
				className= "toggleButton"
				onClick={() => {
						toggleDarkMode();
					}
				} />
			<Header />
			<div className='Main' data-theme={darkMode ? "dark" : "light"}>
			<Main />
			</div>
		</div>
	)
};

export default App;
