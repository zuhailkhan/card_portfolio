import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/About";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />
    },
])