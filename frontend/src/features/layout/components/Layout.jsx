import { useAside } from "../hooks/toggleAside";
import { useUserAside } from "../hooks/toggleUserAside.js"
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar.jsx";
import Aside from "./Aside.jsx";
import UserAside from "./UserAside.jsx"


const Layout = () => {
  const nav = useAside();
  const user = useUserAside();
  return (
    <>
      <NavBar toggleAside={nav.toggleAside}
      toggleUserAside={user.toggleAside}/>
      <Aside isOpen={nav.isOpen} toggleAside={nav.toggleAside}/>
      <UserAside isOpen={user.isOpen} toggleAside={user.toggleAside}/>
      <main>
       <Outlet/>
      </main>
    </>
  );
}

export default Layout;