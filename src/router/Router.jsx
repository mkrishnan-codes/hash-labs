import React, { Suspense } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from './router-config';
import AppLayout from '../layout/AppLayout';
import { Box, LinearProgress } from '@mui/material';

const Loader = ()=>{
	return <Box sx={{ width: '100%' }}>
	<LinearProgress />
  </Box>
}

const RouteWithSubRoutes = (route) => {
	return (
		<AppLayout inner={route.inner}>
			<Suspense fallback={<Loader/>}>
			<Route
				path={route.path}
				render={props => (
					// pass the sub-routes down to keep nesting
					<route.component {...props} routes={route.routes} />
				)}
			/>
			</Suspense>
		</AppLayout>
	);
}
export const AppRouter = () => {
	return (
		<HashRouter>
			<Switch>
				{routes.map((route, i) => (
					<RouteWithSubRoutes key={i} {...route} />
				))}
			</Switch>
		</HashRouter >
	);
}