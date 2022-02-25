import React from 'react'
import Footer from "../components/Footer"

const art1 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', paddingBottom: '1em', top: '-1em', position: 'relative'}}>
				<h2>A Tribute to Kentaro Miura.</h2>

				<pre>This blog is also available in <a href="https://youtu.be/0gHNucQqVNo">video</a> format.</pre>
				<center>
					<img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/1a/Kentaro_Miura.png/220px-Kentaro_Miura.png' alt='Kentaro Miura' width='60%' />
					<br />
					<pre>Kentaro Miura (source: <a href='https://en.wikipedia.org/wiki/Kentaro_Miura'>Wikipedia</a>)</pre>
				</center>
				<p>
					This blog is to appreciate the legend of Kentaro Miura. It's been around a year, I started reading Berserk and I promise the effect it had on me is worth a lifetime.
					</p>
					<p>
					Miura is phenomenal, his art is majestic, the most superior I have ever seen and his storytelling skills are like magic.
				</p>
				<p>
					This year, Miura left us suddenly for heavenly abode leaving all Otakus and literature lovers in as much pain as his signature character Guts. Miura has had a deeper impact on me than anyone else in my life.
					</p>
					<p>
					Kentaro Miura is probably the greatest artist the world has ever seen. If you have read Berserk you would know the effect it has on you, transforming the entirety of your thought process and making you a far more intellectual, smart and empathetic person than you ever were.
					</p>
					<p>
					Being an introvert throughout my life, I appreciate books and literature more than most and being an IITian boosts my understanding of them. I take pride in having lived in the era of Kentaro Miura and do believe that you would feel the same way once you have read even a bit of Berserk. <br />
					Miura, you will be forever missed.
				</p>
			</div>
			<Footer
				isBlogsArticle={true}
			/>
		</div>
	)
}

export default art1
