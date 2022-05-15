/**
 * @class       : Copyright
 * @author      : abj (abj@abj)
 * @created     : Wednesday Feb 23, 2022 10:56:34 IST
 * @description : Copyright
 */

import React from 'react';

	function getCurrentYear() {
		return new Date().getFullYear(); // returns the year via local timing
	};

	function getCurrentMonth() {
		const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		return month[new Date().getMonth()]; // returns the year via local timing
	};

const Copyright = ({copyright}) => {
	return (
		<div className={"footer no-select"}>
			<center>
				<div className={"copyright text-white"}>
					<small>
						Copyright © <a href="https://abhj.github.io">AbJ</a> {getCurrentMonth()} {getCurrentYear()}
					</small>
				</div>
			</center>
		</div>
	);
}


export default Copyright;
