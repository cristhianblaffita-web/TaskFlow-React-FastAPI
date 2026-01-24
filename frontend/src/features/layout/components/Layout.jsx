import { useAside } from "../hooks/toggleAside";
import { Outlet } from "react-router-dom"
import NavBar from "./NavBar.jsx";
import Aside from "./Aside.jsx";

const Layout = () => {
  const nav = useAside();
  return (
    <>
      <NavBar toggleAside={nav.toggleAside} />
      <Aside isOpen={nav.isOpen} toggleAside={nav.toggleAside}/>

      <main>
       <Outlet/>
      </main>
    </>
  );
}

export default Layout;