/**
 * @class       : Copyright
 * @author      : abj (abj@abj)
 * @created     : Wednesday Feb 23, 2022 10:56:34 IST
 * @description : Copyright
 */

import React from 'react'

const Copyright = ({copyright}) => {
	return (
		<div className={"footer"}>
			<center>
				<div className={"copyright py-4 text-white"}>
					<div className={"container"}>
						<small>
							Copyright © AbJ February 2022
						</small>
					</div>
				</div>
			</center>
		</div>
	);
}


export default Copyright;
