import {useState} from "react";

export const useAside = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  //const [asideState, setAsideState] = useState("aside-hidden");
  
  const toggleAside = () => {
    setIsOpen(prev => !prev);
    
    //if (asideState === "aside-hidden"){
      //setAsideState(prev => "aside-visible");
    //} else if (asideState === "aside-visible"){
      //setAsideState(prev => "aside-visible");
    //}
  };
  
  return {isOpen, toggleAside};
}