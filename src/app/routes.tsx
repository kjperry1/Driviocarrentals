import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import Booking from "./pages/Booking";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/book/:plan",
    Component: Booking,
  },
]);
