import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { BACKEND_URL } from "../config";
import { checkAuthStatus, loginUser, logoutUser } from '../helpers/communicator'

type User = {
  email: string;
}

interface AuthContextType {
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
  // token: string | null;
  // setToken: (token: string | null) => void;
  isAuthenticated: boolean;
  user: User | null;
  loading: boolean;
  login:(
    email:string,
    password:string
  )=>void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    // Fetch if the user's cookies are valid, means already logged in and no need to perform login step here
    async function checkStatus () {
      try {
        const data = await checkAuthStatus();
        if (!data) {
          setIsAuthenticated(false);
        } else {
          setUser({ email: data.email });
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false); // Ensure loading is set to false after the check
      }
    }

    checkStatus();
},[]);


  const loginWithGoogle = () => {
    window.location.href = `${BACKEND_URL}/auth/google`;
  };

  const loginWithGithub = () => {
    window.location.href = `${BACKEND_URL}/auth/github`;
  };

  const login = async(
    email:string,
    password:string
  ) => {
    const data = await loginUser(email,password);
    setIsAuthenticated(true);
    if(data){
      setUser({email :email})
      setIsAuthenticated(true);
  }
  };

  const logout = () => {
    logoutUser();
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated,
    login,
    loading,
    logout,
    loginWithGoogle,
    loginWithGithub,

};

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
