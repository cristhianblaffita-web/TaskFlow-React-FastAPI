import {useAside} from "../hooks/ToggleAside";
import NavBar from "./NavBar.jsx";
import Aside from "./Aside.jsx";

const Layout = () => {
  const nav = useAside();
  
  return (
    <>
      <NavBar toggleAside={nav.toggleAside} />
      <Aside isOpen={nav.isOpen} toggleAside={nav.toggleAside}/>
    </>  
  );
}

export default Layout;