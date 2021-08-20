import React from 'react'
import Header from "./components/Header"
import Main from './Main'

// THE MAIN IDEA IS EACH BLOG SHOULD HAVE A LINK.
// SOME MAY BE EXTERNAL TO OUR SITE.

const App = () => {
	return (
		<div className="App">
			<Header />
			<Main />
		</div>
	)
}

export default App;
