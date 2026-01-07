import React, {useState} from "react";
import "../styles/Aside.css"

const Aside = ({isOpen, toggleAside}) => {
  const options = ["Home", "Login", "Sign up", "About us"];
  return (
    <>
    <section className={"aside-container " + (isOpen ? "container-visible" : "")}>
      <aside className={"options-aside " + (isOpen ? "aside-visible" : "")}>
        <button className="hide-aside-btn" type="button" onClick={toggleAside}></button>
        
        <ul className="options-list">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
        </aside>
      </section>  
    </>
  )
}

export default Aside;