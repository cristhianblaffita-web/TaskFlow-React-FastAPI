import React, {useState, useEffect} from "react";
import "../styles/NavBar.css";
import { useNavigate } from "react-router-dom";
import { useAside } from "../hooks/toggleAside.js";
import { useUserAside } from "../hooks/toggleUserAside.js";


const NavBar = ({toggleAside, toggleUserAside, auth}) => {
  
  const navigate = useNavigate();
  return (
    <nav className="main-navbar">
    <div className="options-burger">
      <button type="button" id="option-btn" onClick={toggleAside}></button>
    </div>
      <div className="logo-container">
        
      </div>
      <div className="user-options">
        <button 
          className= {"user-btn " + (auth ? "loged-user" : "")} 
          type="button" 
          onClick={auth ? toggleUserAside : () => navigate("/login")}
        ></button>
      </div>
    </nav>
  )
}

export default NavBar;