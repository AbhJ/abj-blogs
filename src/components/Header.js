import React from 'react'
import propTypes from 'prop-types'
import {Link} from "react-router-dom";

// prop types makes react like typescript than vannila javascript

const Header = (props) => {
	return (
		<div class="no-select">
			<center>
				<Link to="/abj-blogs/">
					<h1>
						{props.title}
					</h1>
				</Link>
				<h2 style={headingDescriptionStyles}>{props.description}</h2>
			</center>
		</div>
	)
}

Header.propTypes = {
	title: propTypes.string,
	description: propTypes.string,
	isHomePage: propTypes.bool
}

Header.defaultProps = {
	title: "ABJ Blogs",
	description: "Blogs about Tech and Life",
	isHomePage: true
}

const headingDescriptionStyles = {
	fontSize: '170%',
}
export default Header;
