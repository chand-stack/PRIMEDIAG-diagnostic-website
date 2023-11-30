import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (loading) {
    return (
      <span className="loading loading-bars loading-lg min-h-screen mx-auto flex justify-center items-center"></span>
    );
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
