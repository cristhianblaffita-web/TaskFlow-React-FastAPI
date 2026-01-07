import React, {useState, useEffect} from "react";
import "../styles/NavBar.css";
import {useAside} from "../hooks/ToggleAside.js";

const NavBar = ({toggleAside}) => {
  return (
    <nav className="main-navbar">
    <div className="options-burger">
      <button type="button" id="option-btn" onClick={toggleAside}></button>
    </div>
      <div className="logo-container">
        <h1>Atlas</h1>
      </div>
      <div className="user-options">
        <button className="user-btn" type="button"></button>
      </div>
    </nav>
  )
}

export default NavBar;