/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Header from './Header';
export const Main = (props) => {
	return (<>
		<Header/>
			{props.children}
	</>
	)
}
