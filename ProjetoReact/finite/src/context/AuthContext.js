import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../services/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  console.log('autheticated :', authenticated);

  useEffect(() => {
    const checkUser = () => {
      if (!localStorage.getItem('@Auth:token')) {
        setAuthenticated(false);
      } else {
        setAuthenticated(true);
      }
    };
    
    checkUser();

  }, [navigate]);

  return (
    <AuthContext.Provider value={{authenticated}}>
      {children}
    </AuthContext.Provider>
  );
};