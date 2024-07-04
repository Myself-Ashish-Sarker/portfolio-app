import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Components/Home";
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import LetsTalk from "../Components/LetsTalk";
import Projects from "../Components/Projects";
import Web01 from "../Components/Web01";

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
                path: "/projects",
                element: <Projects></Projects>
            }
        ]
    },
]);

export default router