import { createBrowserRouter } from "react-router-dom";
import Root from "../MainLayout/Root/Root";
import Home from "../Components/Pages/Home/Home";
import Login from "../Components/Pages/Login/Login";
import Register from "../Components/Pages/Register/Register";
import Dashboard from "../MainLayout/Dashboard/Dashboard";
import UserProfile from "../Components/Pages/DashboardPages/UserProfile/UserProfile";
import Appointment from "../Components/Pages/DashboardPages/Appointment/Appointment";
import TestResult from "../Components/Pages/DashboardPages/TestResult/TestResult";
import AddTest from "../Components/Pages/AdminDashboard/AddTest/AddTest";
import AllTest from "../Components/Pages/AdminDashboard/AllTest/AllTest";
import AllUser from "../Components/Pages/AdminDashboard/AllUser/AllUser";
import Reservation from "../Components/Pages/AdminDashboard/Reservation/Reservation";
import AddBanner from "../Components/Pages/AdminDashboard/AddBanner/AddBanner";
import AllBanner from "../Components/Pages/AdminDashboard/AllBanner/AllBanner";
import AllTestPage from "../Components/Pages/AllTestPage/AllTestPage";
import Detail from "../Components/Pages/DetailPage/Detail";
import UpdateTest from "../Components/Pages/AdminDashboard/UpdateTest/UpdateTest";
import Blog from "../Components/Pages/Blog/Blog";
import Contact from "../Components/Pages/Contact/Contact";
import AboutUs from "../Components/Pages/AboutUs/AboutUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../PrivateRoute/AdminRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/alltestpage",
        element: <AllTestPage></AllTestPage>,
        loader: () =>
          fetch("https://diagnostic-server.vercel.app/service/count"),
      },
      {
        path: "/test/detail/:id",
        element: (
          <PrivateRoute>
            <Detail></Detail>
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutus",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "appointments",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },
      {
        path: "testresults",
        element: (
          <PrivateRoute>
            <TestResult></TestResult>
          </PrivateRoute>
        ),
      },
      {
        path: "allusers",
        element: (
          <AdminRoute>
            <AllUser></AllUser>
          </AdminRoute>
        ),
      },
      {
        path: "addtest",
        element: <AddTest></AddTest>,
      },
      {
        path: "alltest",
        element: <AllTest></AllTest>,
      },
      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "addbanner",
        element: <AddBanner></AddBanner>,
      },
      {
        path: "allbanner",
        element: <AllBanner></AllBanner>,
      },
      {
        path: "update/:id",
        element: <UpdateTest></UpdateTest>,
      },
    ],
  },
]);

export default routes;
