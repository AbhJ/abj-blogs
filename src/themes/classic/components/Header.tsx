import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
	title?: string;
	description?: string;
}

const Header: React.FC<Props> = ({
	title = 'ABJ Blogs',
	description = 'Blogs about Tech and Life',
}) => (
	<div className="no-select">
		<center>
			<Link to="/classic">
				<h1>{title}</h1>
			</Link>
			<h2 style={{ fontSize: '170%' }}>{description}</h2>
		</center>
	</div>
);

export default Header;
