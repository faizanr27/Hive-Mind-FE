import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { BACKEND_URL } from "../config";
import { checkAuthStatus, loginUser, signUpUser } from '../helpers/communicator'
import axios from 'axios'

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
  name: string | null;
  loading: boolean;
  login:(
    email:string,
    password:string
  )=>void;
  signUp:(
    name:string,
    email:string,
    password:string
  )=>void;
  logout: () => void;
  loggingOut: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState<string | null>(null)
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
          setName(data.username)
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
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
      console.log(data)
      setUser({email :email})
      setName(data.name)
      setIsAuthenticated(true);
  }
  };
  const signUp = async(
    name:string,
    email:string,
    password:string
  ) => {
    const data = await signUpUser(name,email,password);
    setIsAuthenticated(true);
    if(data){
      setUser({email :email})
      setName(data.name)
      setIsAuthenticated(true);
  }
  };

  const logout = async() => {
    setLoggingOut(true);
    try {
      const res = await axios.get(`${BACKEND_URL}/auth/logout`, {
        withCredentials: true,
      });

      if (res.status !== 200) {
        throw new Error("Logout failed");
      }

      localStorage.removeItem("userID")
      setIsAuthenticated(false);
      setUser(null);

      return res.data;
    } catch (error) {
      console.error("Logout error:", error);
      setIsAuthenticated(false);
      setUser(null);
      throw error;
    }
    finally {
      setLoggingOut(false);
    }
  };


  const value = {
    user,
    isAuthenticated,
    login,
    signUp,
    loading,
    logout,
    loginWithGoogle,
    loginWithGithub,
    loggingOut,
    name,

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
