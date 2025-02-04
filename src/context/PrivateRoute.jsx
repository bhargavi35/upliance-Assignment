import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// Protect private routes by checking if the user is logged in
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
};

export default PrivateRoute;
