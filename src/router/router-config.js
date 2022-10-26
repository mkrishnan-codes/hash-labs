import { lazy } from "react";

import NotFound from "../features/404/NotFound";

const Weather = lazy(() => import("../features/weather/Weather"));
const BrandCompare = lazy(() =>
  import("../features/brandcompare/BrandCompare")
);
const Notes = lazy(() => import("../features/notes/Notes"));

export const routes = [
  {
    path: "/",
    exact: true,
    inner: true,
    component: BrandCompare,
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
    component: Weather,
  },
  {
    path: "/brandcompare",
    exact: true,
    inner: true,
    component: BrandCompare,
  },
  {
    path: "/notes",
    exact: true,
    inner: true,
    component: Notes,
  },
  {
    path: "*",
    component: NotFound,
  },
];
