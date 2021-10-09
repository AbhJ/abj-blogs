import React from 'react'
import Button from "../components/Button"

const art3 = () => {
	return (
		<div>
			<h2>Languages of the future:</h2>
			<pre>Which Languages may dominate in the near future<span className='div-no-mobile'> (2025-2030)</span>?<br/>
				This blog is also available in <a href="https://youtu.be/B4uNoxvmryw">video</a> format.</pre>
			Some languages which I dont see going out of demand are definitely:
			<ul>
				<li style={liStyle}> 
					<h3>Java:</h3><br/> Most companies in tech use Java to build their backend applications. Java is very fast as a language, is mainly based on OOPS (which makes code modular and clean to read), and most importantly is independent of platform (all you need to run it is the JVM - Java Virtual Machine). One of the best features I love about Java is its efficient exception handling and precise (compared to C++) error messages. Since Android is so popular these days, the only language that may replace Java would be Kotlin.
				</li>
				<li style={liStyle}>
					<h3>Swift:</h3><br/> Well who doesn't love Apple? Even Apple haters seem to love its clean and snappy UI. Though I don't have personal experience with Swift till now, its memory management is of high repute. As long as Apple is the world's most valuable company, Swift isn't going anywhere. Swift's ease of coding UI stuff will keep it in demand.
				</li>
				<li style={liStyle}>
					<h3>Javascript:</h3><br/> Though Javascript may be annoying at times, there's no denying of the fact that it is one of the select few languages that are extensively used in backend and frontend, server side and client side, and has entensive well designed libraries and frameworks for most industrial use cases. An application written in Javascript is almost certainly faster than a "similar" one in Python. Also, Node JS (written partly in C++) is super fast and its asynchronous multi-threaded I/O model improve the performance even more. Javascript is definitely going to stay for time in the future.
				</li>
				<li style={liStyle}>
					<h3>C++:</h3><br/> A great place to learn about this amazing language would be from the <a href="https://youtu.be/uTxRF5ag27A">author of C++ himself</a>. Whenever a developer looks for speed in backend, C++ is generally the way to go. C++ is blazingly fast, supports OOPS, and also is under constant development. I have spent most of my programming journey in C++.
				</li>
				<li style={liStyle}>
					<h3>Python:</h3><br/> One of the reasons Python is so popular despite being much slower compared to the others in this list must be the huge ocean of libraries and frameworks available for it. Also, code in Python looks more like pseudo code than most other languages. That makes Python code very easy to understand. Also, the learning curve in Python is much easier for newcomers in the world of software. 
				</li>
			</ul>
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

const liStyle = {
	color: "#abb2bf"
}

export default art3
