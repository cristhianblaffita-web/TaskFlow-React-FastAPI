import {useState} from "react";

export const useAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleAside = () => {
    setIsOpen(prev => !prev);
  };
  
  return {isOpen, toggleAside};
}