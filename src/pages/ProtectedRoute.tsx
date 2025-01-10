import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode; 
  token?: string | null;
}

function ProtectedRoute({ children, token }: ProtectedRouteProps) {
  const authToken = token || localStorage.getItem('token');
  return authToken ? children : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
