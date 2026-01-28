import {useState} from "react";

export const useUserAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAside = () => {
    setIsOpen(prev => !prev);
  };
  
  return {isOpen, toggleAside};
}