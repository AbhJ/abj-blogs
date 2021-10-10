/**
 * @class       : universal-css
 * @author      : abj (abj@abj)
 * @created     : Saturday Oct 09, 2021 23:55:34 IST
 * @description : universal-css
 */

import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle(
	this === null ? `` : `
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  `);
