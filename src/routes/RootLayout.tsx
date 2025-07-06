import { createBrowserRouter } from "react-router-dom"
import LandingPage from "../pages/LandingPage";
import Project from "../pages/Project";
import Hire from "../component/Hire";
import Showcase from "../component/showCase";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <LandingPage />
    },
    {
        path: "/project",
        element: <Project />
    },
    {
        path: "/hire",
        element: <Hire />
    },
    {
        path: "/showcase",
        element: <Showcase />
    }
])