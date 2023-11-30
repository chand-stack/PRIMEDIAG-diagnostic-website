import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isLoading] = useAdmin();

  if (loading || isLoading) {
    return (
      <span className="loading loading-bars loading-lg min-h-screen mx-auto flex justify-center items-center"></span>
    );
  }

  if (user && isAdmin.role === "user") {
    return children;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
