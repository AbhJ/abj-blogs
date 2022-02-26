import React from 'react'
import Footer from "../components/Footer"

const art3 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative'}}>
				<h2>Languages of the Future.</h2>
				<pre>This blog is also available in <a href="https://youtu.be/B4uNoxvmryw">video</a> format.</pre>
				Some languages which I don't see going out of demand (until 2030 hopefully) are definitely:
				<h3>Java</h3>
				<p>
					Most companies in tech use Java to build their backend applications. Java is very fast as a language, is mainly based on OOPS (which makes code modular and clean to read), and most importantly is independent of the platform (all you need to run it is the JVM - Java Virtual Machine).
				</p>
				<p>
					One of the best features I love about Java is its efficient exception handling and precise (compared to C++) error messages. Since Android is so popular these days, the only language that may replace Java would be Kotlin.
				</p>
				<h3>Swift</h3>
				<p>
					Well, who doesn't love Apple? Even Apple haters seem to love its clean and snappy UI. Though I don't have personal experience with Swift till now, its memory management is of high repute.
				</p>
				<p>
					As long as Apple is the world's most valuable company, Swift isn't going anywhere. Swift's ease of coding UI stuff will keep it in demand.
				</p>
				<h3>Javascript</h3>
				<p>
					Though Javascript may be annoying at times, there's no denying the fact that it is one of the select few languages that are extensively used in backend and frontend, server-side and client-side, and has extensive well-designed libraries and frameworks for most industrial use cases.
				</p>
				<p>
					An application written in Javascript is almost certainly faster than a "similar" one in Python. Also, Node JS (written partly in C++) is super fast and its asynchronous multi-threaded I/O model improves the performance even more. Javascript is going to stay for some time in the future.
				</p>
				<h3>C++</h3>
				<p>
					A great place to learn about this amazing language would be from the <a href="https://youtu.be/uTxRF5ag27A">author of C++ himself</a>. Whenever a developer looks for speed in the backend, C++ is generally the way to go.
				</p>
				<p>
					C++ is blazingly fast, supports OOPS, and also is under constant development. I have spent most of my programming journey in C++.
				</p>
				<h3>Python</h3>
				<p>
					One of the reasons Python is so popular despite being much slower compared to the others in this list must be the huge ocean of libraries and frameworks available for it.
				</p>
				<p>
					Code in Python looks more like pseudo code than most other languages. That makes Python code very easy to understand. Also, the learning curve in Python is much easier for newcomers in the world of software.
				</p>
			</div>
			<Footer
				isBlogsArticle={true}
			/>
		</div>
	)
}

export default art3
