import React, {useState} from "react";
import "../styles/Aside.css"

const Aside = ({isOpen}) => {
  
  return (
    <>
      {isOpen ? <p>Testing</p> : false}
    </>
  )
}

export default Aside;