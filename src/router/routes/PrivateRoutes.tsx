import { useIsAuthenticated } from "@azure/msal-react";
import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }: any) => {
  const isAuthenticated = useIsAuthenticated();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
