import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root/Root";
import Home from "../Components/Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ]
    }
])

export default routes;