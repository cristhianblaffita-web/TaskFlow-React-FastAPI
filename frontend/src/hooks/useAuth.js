import { useContext } from "react";
import { AuthContext } from "../features/auth/context/authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("uuseAuth debe usarse dentro del AuthProvider");
  }
  
  return context;
};