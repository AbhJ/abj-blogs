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
	borderRadius: "4px",
    margin: "0 auto",
	color: "#282c34",
	backgroundColor: "#61afef",
	fontSize: "14px",
    lineHeight: "22px",
	fontWeight: "bolder",
    fontFamily: "Roboto Mono",
}

export default Button;
