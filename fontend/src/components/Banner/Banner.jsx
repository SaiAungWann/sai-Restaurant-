import React from 'react'
import biryani5 from '../../assets/biryani5.png' 
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import {FaShoppingCart} from "react-icons/fa"


export default function Banner() {
  return (
    <>
    <div className=' gird gird-col-1 sm:gird-col-2 container min-h-[350px] pt-14'>
        <div className='sm:flex'
             data-aos="fade-up"
            data-aos-duration="300">
        {/* image  */}
            <div className=" max-w-[350px] sm:max-w-[450px] mx-auto sm:mx-0  mt-4">
                <img src={biryani5} alt="" className=' drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)' />
            </div>
            {/* description */}
            <div className=' w-full sm:max-w[450px]'>

                <div className=" space-y-4 ml-14">
                    <h1 className=' text-3xl sm:text-4xl font-bold'> Lorem, ipsum dolor. </h1>
                    <p className=' text-sm text-gray-500 tracking-wide leading-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, in. </p>  
                    <p className='  text-sm text-gray-500 tracking-wide leading-5'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, in. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, omnis. </p>  
                </div>

                    {/*  linked button */}
                <div className='flex gap-6 ml-14 mt-4'>
                    <GrSecure className="text-4xl h-20  w-20 shadow-sm p-5 rounded-full bg-violet-100"/>
                    <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100"/>
                    <GiFoodTruck className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100"/>                   
                </div>
                <div className='ml-14 mt-4'>

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
