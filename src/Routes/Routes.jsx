import { createBrowserRouter } from "react-router-dom";
import Main_Layout from "../MainLayout/Main_Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Password_Generator from "../Components/Password_Generator/Password_Generator";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Main_Layout />,
        errorElement: <div> Error Now </div>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/password_generator",
                element: <Password_Generator />
            },
        ]
    }
])

export default Routes;