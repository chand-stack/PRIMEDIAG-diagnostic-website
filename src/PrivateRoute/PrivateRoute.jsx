import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (loading || isLoading) {
    return (
      <span className="loading loading-bars loading-lg min-h-screen mx-auto flex justify-center items-center"></span>
    );
  }

  if ((user && isAdmin?.role === "user") || isAdmin?.status === "active") {
    return children;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
