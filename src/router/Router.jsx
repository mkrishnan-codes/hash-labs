import React from 'react'
import { HashRouter, Route, Switch } from "react-router-dom";
import { routes } from './router-config';
import AppLayout from '../layout/AppLayout';
const RouteWithSubRoutes = (route) => {
	console.log(route,"rout");
	return (
		<AppLayout inner={route.inner}>
			<Route
				path={route.path}
				render={props => (
					// pass the sub-routes down to keep nesting
					<route.component {...props} routes={route.routes} />
				)}
			/>
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