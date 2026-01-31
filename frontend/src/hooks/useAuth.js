import { useContext } from "react";
import { AuthContext } from "../features/auth/context/authContext";

export const useAuth = () => {
  const context = useContext(AuthContext);
  
  return context;
};