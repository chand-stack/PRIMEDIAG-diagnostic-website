import { useContext } from "react";
import useAdmin from "../Hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const [isAdmin, isLoading] = useAdmin();

  const { user, loading } = useContext(AuthContext);
  if (loading || isLoading) {
    return (
      <span className="loading loading-bars loading-lg min-h-screen mx-auto flex justify-center items-center"></span>
    );
  }
  if (user && isAdmin?.role === "isAdmin") {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default AdminRoute;
