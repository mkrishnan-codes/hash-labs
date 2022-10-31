import { lazy } from "react";

import NotFound from "../features/404/NotFound";

const Weather = lazy(() => import("../features/weather/Weather"));
const ItineraryMaker = lazy(() => import("../features/itinerarymaker/ItineraryMaker"));
const BrandCompare = lazy(() =>
  import("../features/brandcompare/BrandCompare")
);
const Notes = lazy(() => import("../features/notes/Notes"));

export const routes = [
  {
    path: "/",
    exact: true,
    inner: true,
    component: Notes,
  },
  {
    path: "/home",
    inner: true,
    component: Notes,
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
    path: "/itinerary",
    exact: true,
    inner: true,
    component: ItineraryMaker,
  },
  {
    path: "*",
    component: NotFound,
  },
];
