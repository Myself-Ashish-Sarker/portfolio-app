import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import LetsTalk from "../Components/LetsTalk";
import Works from "../Components/Works";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/contact",
                element: <Contact></Contact>
            },
            {
                path: "/letstalk",
                element: <LetsTalk></LetsTalk>
            },
            {
                path: "/works",
                element: <Works></Works>
            }
        ]
    },
]);

export default router