import React, {useState} from "react"
import { NavLink, Link, useLocation } from 'react-router-dom'
import "../styles/Aside.css"

const Aside = ({isOpen, toggleAside}) => {
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
    
  return (
    <>
    <section className={"aside-container " + (isOpen ? "container-visible" :
    "")}>
      <aside className={"options-aside " + (isOpen ? "aside-visible" :
      "aside-hidden")}>
        <button className="hide-aside-btn" type="button" onClick={toggleAside}></button>
        
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index} className="item">
              <NavLink className={( { isActive }) => isActive ? "option current-page" :
              "option"}
            to={option.path} end={option.path === "/"}>{option.label}</NavLink></li>
          ))}
          
        </ul>
        </aside>
      </section>  
    </>
  )
}

export default Aside;