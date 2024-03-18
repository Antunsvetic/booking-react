import { createBrowserRouter } from "react-router-dom";

import Hotels from "../pages/hotels";
import Hotel from "../pages/hotel";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Hotels />
    },
    {
        path: "hotel/:hotelId",
        element: <Hotel />
    }
])