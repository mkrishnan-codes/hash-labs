// import { Login } from "../components/Login/Login";
import NotFound from "../features/404/NotFound";
// import Home  from "../features/home/Home";
// import { Mock } from "../components/Mock/Mock";
// import MockInit from "../components/Mock/MockInit";
import Weather from '../features/weather/Weather';
import BrandCompare from "../features/brandcompare/BrandCompare"
export const routes = [
	{
		path: "/",
		exact: true,
		inner: true,
		component: BrandCompare
	},
	{
		path: "/home",
		inner: true,
		component: BrandCompare,
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
		path: "/weather",
		exact: true,
		inner: true,
		component: Weather
	},
	{
		path: "/brandcompare",
		exact: true,
		inner: true,
		component: BrandCompare
	},
	{
		path: '*',
		component: NotFound
	}
];