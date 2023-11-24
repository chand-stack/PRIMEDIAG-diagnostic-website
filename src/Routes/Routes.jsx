import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default routes;