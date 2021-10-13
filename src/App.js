import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
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
			<div className='div-no-mobile'>
			<Button
				text={darkMode ? "Light Mode 🔦" : "Dark Mode 🌚"}
				className= "toggleButton"
				onClick={() => {
						toggleDarkMode();
					}
				} />
			</div>
			<div className='div-only-mobile' style={{paddingLeft: '5%'}}>
			<Button
				text={darkMode ? "Light Mode 🔦" : "Dark Mode 🌚"}
				className= "toggleButton"
				onClick={() => {
						toggleDarkMode();
					}
				} />
			</div>
			<Header />
			<br/>
			<div className='Main' data-theme={darkMode ? "dark" : "light"}>
			<Main />
			</div>
			<Footer />
		</div>
	)
};

export default App;
