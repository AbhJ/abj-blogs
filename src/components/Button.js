import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

const Button = (props) => {
	if(props.className === 'toHome')
	return (
		<div>
			<center>
				<button style={ButtonStyle} onClick={props.onClick} className={props.className} text={props.text} >
				<Link to="/abj-blogs/" style={{color: '#282c34'}}>
					{props.text}
				</Link>
				</button>
			</center>
		</div>
	)
	if(props.className === 'toggleButton')
	return (
		<div style={{margin: '0'}}>
				<button style={ButtonStyle} onClick={props.onClick} className={props.className} text={props.text} >
					{props.text}
				</button>
		</div>
	)
	return (
		<div>
			<center>
				<button style={ButtonStyle} onClick={props.onClick} className={props.className} text={props.text} >
					{props.text}
				</button>
			</center>
		</div>
	)
}


Button.propTypes = {
	text: PropTypes.string,
	className: PropTypes.string,
	onClick: PropTypes.func.isRequired
}

const ButtonStyle = {
	borderRadius: "0.25em",
	color: "#282c34",
	backgroundColor: "#61afef",
	fontSize: "1em",
	lineHeight: "1.375em",
	fontWeight: "bolder",
	fontFamily: "Roboto Mono",
	cursor: "pointer"
}

export default Button;
