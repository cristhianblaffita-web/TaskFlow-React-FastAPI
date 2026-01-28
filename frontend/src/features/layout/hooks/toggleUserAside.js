import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth"

export const useUserAside = () => {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAside = () => {
    if (isAuthenticated) {
    setIsOpen(prev => !prev);
    } 
  };
  
  useEffect(() => {
      if (!isAuthenticated){
        setIsOpen(prev => false)
      }
    }, [isAuthenticated])
  
  return {isOpen, toggleAside};
}