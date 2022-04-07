// import { Login } from "../components/Login/Login";
import NotFound from "../features/404/NotFound";
import Home  from "../features/home/Home";
// import { Mock } from "../components/Mock/Mock";
// import MockInit from "../components/Mock/MockInit";

export const routes = [
	{
		path: "/",
		exact: true,
		inner: true,
		component: Home
	},
	{
		path: "/home",
		inner: true,
		component: Home,
		//   routes: [
		// 	{
		// 	  path: "/tacos/bus",
		// 	  component: Bus
		// 	},
		// 	{
		// 	  path: "/tacos/cart",
		// 	  component: Cart
		// 	}
		//   ]
	},
	{
		path: '*',
		component: NotFound
	}
];