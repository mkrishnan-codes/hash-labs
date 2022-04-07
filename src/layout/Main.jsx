/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import { Sidebar } from '../Sidebar/Sidebar';
import Header from './Header';
import './main.scss';
export const Main = (props) => {
	// const [open, setopen] = useState(false);
	// const toggle = () => {
	// 	setopen(!open)
	// }
	return (<>
		<Header/>
		{/* <Sidebar open={open} onClose={toggle} /> */}
		<div className={`inner-page open`}>
			{props.children}
		</div>
	</>
	)
}
