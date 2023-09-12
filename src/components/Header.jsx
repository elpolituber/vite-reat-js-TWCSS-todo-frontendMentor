import { useEffect, useState } from "react";
import IconsMoon from "./icons/IconsMoon";
import IconsSun from "./icons/iconsSun";

const inicialStateDartMode=localStorage.getItem('theme')==='dark';
const Header = () => { 
    const [darkMode,setDarkMode]=useState(inicialStateDartMode);
    useEffect(()=>{
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme',"light")
      }
    },[darkMode])
    return(
        <header className="container mx-auto px-4 pt-8">
        <div className="flex justify-between">
        <h1 className="uppercase text-white pt-8 px-4 text-2xl font-bold tracking-[0.3em] ">Todo</h1>
        <button onClick={()=>setDarkMode(!darkMode)}>
          { darkMode ? <IconsSun/>:<IconsMoon/>}
        </button>
        </div> 
      </header> 
    )
 }

 export default Header