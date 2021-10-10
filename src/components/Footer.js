/**
 * @class       : Footer
 * @author      : abj (abj@abj)
 * @created     : Sunday Oct 10, 2021 13:13:45 IST
 * @description : Footer
 */

import React from 'react'
import propTypes from 'prop-types'
import { Link } from "react-router-dom";

// prop types makes react like typescript than vannila javascript

const Footer = (props) => {
	return (
	<></>);
}

Footer.propTypes = {
	title: propTypes.string,
	description: propTypes.string,
	isHomePage: propTypes.bool
}

export default Footer;
