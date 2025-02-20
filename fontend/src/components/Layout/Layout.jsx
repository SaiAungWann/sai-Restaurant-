import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'
  import AOS from "aos";
import "aos/dist/aos.css";

export default function Layout() {
  let {isDark} = useTheme();

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className={` p-5 min-h-screen mx-auto space-y-5 bg-white text-black duration-200 ${ isDark ? 'bg-gray-500 text-white' : 'bg-white text-black'}`} >

    <Navbar />
    <div >
        <Outlet />
    </div>
    </div>
  )
}
