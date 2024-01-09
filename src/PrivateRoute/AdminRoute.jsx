import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const AdminRoute = ({ children }) => {
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading || isLoading) {
    return (
      <span className="loading loading-bars loading-lg min-h-screen mx-auto flex justify-center items-center"></span>
    );
  }
  if (user && isAdmin?.role === "isAdmin") {
    return children;
  }
  return <Navigate to="/" state={location.pathname}></Navigate>;
};
AdminRoute.propTypes = {
  children: PropTypes.node,
};
export default AdminRoute;
