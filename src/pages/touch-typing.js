import React from 'react'
import Footer from "../components/Footer"

const art3 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative'}}>
				<h2>Typing Fast:</h2>
				<pre>This blog is also available in <a href="">video</a> format.</pre>
				Some languages which I don't see going out of demand (until 2030 hopefully) are definitely:
			</div>
			<Footer
				isBlogsArticle = {true}
			/>
		</div>
	)
}

export default art3
