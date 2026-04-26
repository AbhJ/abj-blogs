import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	text: string;
	className: string;
	onClick: () => void;
}

const ButtonStyle: React.CSSProperties = {
	borderRadius: '0.8em',
	color: '#282c34',
	backgroundColor: '#61afef',
	fontSize: '17px',
	lineHeight: '30.5px',
	fontWeight: 'bolder',
	fontFamily: 'benton-sans',
	cursor: 'pointer',
};

const Button: React.FC<Props> = ({ text, className, onClick }) => {
	if (className === 'toHome') {
		return (
			<div>
				<center>
					<button style={ButtonStyle} onClick={onClick} className={className}>
						<Link to="/classic" style={{ color: '#282c34' }}>
							{text}
						</Link>
					</button>
				</center>
			</div>
		);
	}
	if (className === 'toggleButtonDar' || className === 'toggleButtonLig') {
		return (
			<div style={{ margin: '0' }}>
				<button style={ButtonStyle} onClick={onClick} className={className}>
					{text}
				</button>
			</div>
		);
	}
	return (
		<div>
			<center>
				<button style={ButtonStyle} onClick={onClick} className={className}>
					{text}
				</button>
			</center>
		</div>
	);
};

export default Button;
