import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import Home from "../Components/Home";
import About from "../Components/About";
import LetsTalk from "../Components/LetsTalk";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";

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
                path: "/skills",
                element: <Skills></Skills>
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