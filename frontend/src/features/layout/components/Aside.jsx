import React, {useState} from "react"
import { NavLink, Link, useLocation } from 'react-router-dom'
import "../styles/Aside.css"

const Aside = ({isOpen, toggleAside, auth}) => {
  const options = [
    {
      path: "/",
      label: "Home",
    }, 
    {
      path: "/login",
      label: "Login",
    }, 
    {
      path: "/signup",
      label: "Sign up",
    },
    {
      path: "/about",
      label: "About us",
    }
    ]
    
  
  const deployMenu = () => {
    if (auth) {
      const avilableOptions = options.filter((option) => option.path !==
      "/login" && option.path !== "/signup");
  
      return (
      avilableOptions.map((option, index) => (
      <li key={index} className="item" onClick={toggleAside}>
              <NavLink className={( { isActive }) => isActive ? "option current-page" :
              "option"}
            to={option.path} end={option.path === "/"}>{option.label}</NavLink></li>  
      ))
    )
    } else {
      return (
      options.map((option,index) => (
        <li key={index} className="item" onClick={toggleAside}>
              <NavLink className={( { isActive }) => isActive ? "option current-page" :
              "option"}
            to={option.path} end={option.path === "/"}>{option.label}</NavLink></li>  
      ))
    )
    }
  }
    
  return (
    <>
      <div 
        className={isOpen ? "aside-backdrop" : ""}
        onClick={toggleAside}
      ></div>
      <aside className={"options-aside " + (isOpen ? "aside-visible" :
      "")}>
        <button className="hide-aside-btn" type="button" onClick={toggleAside}></button>
        
        <ul className="options-list">
          {deployMenu()}
      
        </ul>
      </aside>
    </>
  )
}

export default Aside;