import React from 'react';
import { Main } from './Main';

const AppLayout = (props) => {
	return props.inner ? (
		<Main>
			{props.children}
		</Main>
	) : <>{props.children}</>;
}

export default AppLayout;