import Headroom from "react-headroom";
import logo from "../../../assets/PdLogo.png";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAdmin from "../../../Hooks/useAdmin";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const logoutHandler = () => {
    logOut()
      .then(() => {
        console.log("logout successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#34cceb]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/alltestpage"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#34cceb]" : ""
          }
        >
          All Test
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#34cceb]" : ""
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutus"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#34cceb]" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#34cceb]" : ""
          }
        >
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <Headroom className="z-50">
      <div className="bg-white w-full shadow-md shadow-[#34cceb]">
        <div className="navbar font-poppin container mx-auto px-4 py-5">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
              >
                {links}
              </ul>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="font-semibold text-xl">PrimeDiag</h1>
              <img className="w-12" src={logo} alt="" />
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="gap-4 menu-horizontal px-1 font-semibold">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                  <img
                    className="h-10 w-10 rounded-full "
                    src={user && user?.photoURL}
                    alt="user"
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content space-y-3 z-[1] menu p-2 text-center shadow bg-base-100 rounded-box min-w-[212px]"
                >
                  <li className="font-semibold">Name: {user?.displayName}</li>
                  <li>
                    <button onClick={logoutHandler} className="btn btn-sm">
                      Logout
                    </button>
                  </li>
                  {user && isAdmin?.role === "user" && (
                    <>
                      <li>
                        <Link
                          to="/dashboard/profile"
                          className="pl-7 btn btn-sm mt-2"
                        >
                          User Dashboard
                        </Link>
                      </li>
                    </>
                  )}
                  {user && isAdmin?.role === "isAdmin" && (
                    <>
                      <li>
                        <Link
                          to="/dashboard/allusers"
                          className="pl-7 btn btn-sm mt-2"
                        >
                          Admin Dashboard
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            ) : (
              <Link className="btn" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </Headroom>
  );
};

export default Navbar;
