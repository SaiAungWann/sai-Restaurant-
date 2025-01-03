
import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/food-logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import ThemeBtn from './ThemeBtn'
import useTheme from '../../hooks/useTheme'
export default function Navbar() {

  let {isDark} = useTheme();
  return (
   <>
   {/*  dark:bg-gray-800 dark:text-white */}
      <div className={` shadow-md bg-white text-black duration-200 ${ isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className='p-2'>
              <NavLink to="/" className="text-xl font-bold sm:text-2xl flex gap-2 text-center items-center">
                <img src={Logo} alt="" className='w-10 m-auto'/>
                  Sai | Restaurant
              </NavLink>
            </div>
            <div className="space-x-4 flex justify-between items-center">
              <ul className="hidden sm:flex space-x-4 text-l items-center">
                <li className="hover:text-primary"><ThemeBtn /></li>    
                <li className="hover:text-primary"><NavLink to="/" >Home</NavLink></li>    
                <li className="hover:text-primary"><NavLink to="/about">About</NavLink></li>
                <li className="hover:text-primary"><NavLink to="/contact">Contact</NavLink></li>
              </ul>
              <button className='bg-gradient-to-r from-primary to-secondary rounded-lg text-white gap-2 flex justify-between items-center py-1 px-4 hover:scale-105'>
                Order 
                <FaShoppingCart className='text-l text-white drop-shadow-sm cursor-pointer hidden sm:block' />
              </button>
            </div>
          
          </div>
        </div>
      </div>
   </>
  )
}
