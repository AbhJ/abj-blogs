/**
 * @class       : Copyright
 * @author      : abj (abj@abj)
 * @created     : Wednesday Feb 23, 2022 10:56:34 IST
 * @description : Copyright
 */

import React from 'react';
import {Link} from "react-router-dom";

const Copyright = ({copyright}) => {
	return (
		<div className={"footer no-select"}>
			<center>
				<div className={"copyright text-white"}>
					<small>
						Copyright © <a href="https://abhj.github.io">AbJ</a> February 2022
					</small>
				</div>
			</center>
		</div>
	);
}


export default Copyright;
