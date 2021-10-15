import React from 'react'
import Button from "../components/Button"
import Footer from "../components/Footer"

const art5 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative'}}>
				<h2>Updates in Ubuntu 21.10:</h2>
				<pre>This blog is also available in <a href="#">video</a> format.</pre>
				In this blog, we shall be dicussing the updates and improvements in Ubuntu 21.10.
				Please note that this version is <b>NOT</b> an LTS (Long-term support) version.
				<br/>
				<br/>
				<center>
					<img src='https://github.com/AbhJ/abhj/raw/master/image/ubuntu-21.04.png' alt='Ubuntu 21.10' width='100%' />
					<br/>
					<pre>Finally installed Ubuntu 21.10 after the long wait!</pre>
				</center>
				<h3>The Horizontal Workspaces:</h3>
				<br/>
				The most iconic one being the introduction of horizontal workspaces!
				<h3>A new Gnome Version:</h3>
				<br/>
				Ubuntu 21.10 comes with a customized Gnome 40 desktop instead of Gnome 36 (default on Ubuntu 21.04).
				<h3>Gestures:</h3>
				<br/>
				Multitouch gestures have been improved over the last few releases.
				<h3>Ubuntu Dock:</h3>
				<br/>
				A lot of people have been using Dash to Dock extension instead of the standard Gnome Ubuntu Dock.
				<br/><br/>
				Gnome 40 has really improved the default Gnome Ubuntu Dock and added separators between favourite and running applications.
				<h3>Software Updates:</h3>
				<br/>
				Alongside the new additions to the OS, Ubuntu 21.10 is obviously shipped with loads of software updates.
			</div>
			<Footer
				isBlogsArticle = {true}
			/>
		</div>
	)
}

export default art5
