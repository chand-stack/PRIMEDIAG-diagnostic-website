import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Components/Shared/Navbar/Navbar";
import Footer from "../../Components/Shared/Footer/Footer";

const Root = () => {
  const  location = useLocation()
    console.log(location);
    const isLogin = location.pathname.includes("login") || location.pathname.includes("register")
    return (
        <div>
           {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Root;