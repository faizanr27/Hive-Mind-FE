import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

function ProtectedRoute({ children }: ProtectedRouteProps) {

  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div className="flex justify-center items-center text-2xl text-white h-screen w-screen">Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/signin" replace />;
}

export default ProtectedRoute;
