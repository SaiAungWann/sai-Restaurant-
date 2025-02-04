import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import useTheme from '../../hooks/useTheme'

export default function Layout() {
  let {isDark} = useTheme();
  return (
    <div className={` p-5 min-h-screen mx-auto space-y-5 bg-white text-black duration-200 ${ isDark ? 'bg-gray-600 text-white' : 'bg-white text-black'}`} >

    <Navbar />
    <div >
        <Outlet />
    </div>
    </div>
  )
}
