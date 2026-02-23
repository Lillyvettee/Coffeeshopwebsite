import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Location } from "./pages/Location";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/menu",
    Component: Menu,
  },
  {
    path: "/location",
    Component: Location,
  },
]);