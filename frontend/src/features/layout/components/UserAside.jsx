import React from "react"
import "../styles/UserAside.css"

const UserAside = ({isOpen, toggleAside}) => {
  return (
    <aside className={"user-aside " + (isOpen ? "user-aside-visible" : "")}>
      <button className="user-aside-btn">Taskflow</button>
      <button className="user-aside-btn">Logout</button>
    </aside>
  )
}

export default UserAside
