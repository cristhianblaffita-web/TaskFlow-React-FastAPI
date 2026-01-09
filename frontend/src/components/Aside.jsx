import React, {useState} from "react"
import { Link } from 'react-router-dom'
import "../styles/Aside.css"

const Aside = ({isOpen, toggleAside}) => {
  const options = [
    {
      route: "/",
      component: "Home"
    }, 
    {
      route: "/login",
      component: "Login"
    }, 
    {
      route: "/signup",
      component: "Sign up"
    },
    {
      route: "/about",
      component: "About us"
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
            <li key={index}><Link className="option" to={option.route}>{option.component}</Link></li>
          ))}
        </ul>
        </aside>
      </section>  
    </>
  )
}

export default Aside;