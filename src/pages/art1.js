import React from 'react'
import Button from "../components/Button"

const art1 = () => {
	return (
		<div>
			<h2>A tribute to Kentaro Miura:</h2>

			<pre>This blog is also available in <a href="https://youtu.be/0gHNucQqVNo">video</a> format.</pre>

			This blog is to appreciate the legend of Kentaro Miura. It's been around a year, I started reading Berserk and I promise the effect it had on me is worth a lifetime. <br /><br />
			Miura is phenomenal, his art is majestic, the most superior I have ever seen and his storytelling skills are like magic. <br /><br />
			This year, Miura left us suddenly for heavenly abode leaving all Otakus and literature lovers in as much pain as his signature character Guts. Miura has had a deeper impact on me than anyone else in my life. <br /><br />
			Kentaro Miura is probably the greatest artist the world has ever seen. If you have read Berserk you would know the effect it has on you, transforming the entirety of your thought process and making you a far more intellectual, smart and empathetic person than you ever were. <br /><br />
			Being an introvert throughout my life, I appreciate books and literature more than most and being an IITian boosts my understanding of them. I take pride in having lived in the era of Kentaro Miura and do believe that you would feel the same way once you have read even a bit of Berserk. <br /><br />
			Miura, you will be forever missed.

			<br/><br/>
			<Button
				text="To HomePage"
				className= "toHome"
				onClick={() => {
						console.log("tohome clicked");
						window.location.href = '/abj-blogs/';
					}
				} />
		</div>
	)
}

export default art1
