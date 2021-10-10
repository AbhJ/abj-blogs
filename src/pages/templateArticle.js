import React from 'react'
import Button from "../components/Button"

const art = () => {
	return (
		<div>
			<h2></h2>

				{/* <pre>This article has also been published at <a href="">link</a></pre> */}

				<h3>Why did you choose the company?</h3><br/>

				I liked the company.

			<br/><br/>
			<Button
				text="To HomePage"
				className= "toHome"
				onClick={() => {
					console.log("tohome clicked");
				}
				} />
		</div>
	)
}

export default art
