import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import  Dashboard  from "./pages/dashboard";
import { Landing } from "./components/Landing Components/Landing";
import ProtectedRoute from "./pages/ProtectedRoute";
import { SignUpPage } from "./components/ui/sign-up";
import { SignInPage } from "./components/ui/sign-in";
import { useAuth } from './context/AuthContext';
import { useEffect } from "react";

function App() {
  const { isAuthenticated } = useAuth();
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signup"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignUpPage />}
        />
        <Route
          path="/signin"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignInPage />}
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Landing />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
