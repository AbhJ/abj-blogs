import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => {
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
    margin: "0 auto",
	color: "#282c34",
	backgroundColor: "#61afef",
	fontSize: "0.875em",
    lineHeight: "1.375em",
	fontWeight: "bolder",
    fontFamily: "Roboto Mono",
}

export default Button;
