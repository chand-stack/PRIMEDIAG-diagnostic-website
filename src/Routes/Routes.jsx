import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Alltest from "../Components/Pages/AllTest/Alltest";
import Dashboard from "../MainLayout/Dashboard/Dashboard";
import UserProfile from "../Components/Pages/DashboardPages/UserProfile/UserProfile";

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
            },
            {
                path:"/register",
                element:<Register></Register>
            },
            {
                path:"/alltest",
                element:<Alltest></Alltest>
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:([
            {
                path:"profile",
                element:<UserProfile></UserProfile>
            }
        ])
    }
])

export default routes;