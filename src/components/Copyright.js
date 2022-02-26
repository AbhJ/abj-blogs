/**
 * @class       : Copyright
 * @author      : abj (abj@abj)
 * @created     : Wednesday Feb 23, 2022 10:56:34 IST
 * @description : Copyright
 */

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Copyright = ({copyright}) => {
	return (
		<div className={"footer no-select"}>
			<center>
				<div className={"copyright text-white"}>
					<small>
						Copyright © <Link to="">AbJ</Link> February 2022
					</small>
				</div>
			</center>
		</div>
	);
}


export default Copyright;
