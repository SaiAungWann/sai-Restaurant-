import React, { useState } from 'react'
import Img1 from '../../assets/vector3.png'
import biryani from '../../assets/biryani.png'
import biryani2 from '../../assets/biryani2.png'
import biryani3 from '../../assets/biryani3.png'
import biryani4 from '../../assets/biryani4.png'
import biryani5 from '../../assets/biryani5.png' 
import useTheme from '../../hooks/useTheme'
import {FaShoppingCart, FaBook } from 'react-icons/fa'

export default function Hero() {

    let {isDark} = useTheme();

    let bgImg = {
        backgroundImage: `url(${Img1})`,
        backgroundPosition : 'center',
        backgroundSize : 'cover',
        backgroundRepeat : 'no-repeat',
        height : '100%',
        width : '100%'
    }

    // hard code for imgs

    const images = [
        {
            id :   1,
            img : biryani
        },
        {
            id : 2,
            img : biryani2
        },
        {
            id : 3,
            img : biryani3
        },

        {
            id : 5,
            img : biryani5
        },
    ]

    const [preView , setPreView ] = useState(images[0].img)
  return (

    <>
        <div className={`min-h-[550px] sm:min-h-[600px] bg-white flex justify-between items-center ${ isDark ? 'bg-gray-800 text-white' : ' text-black'}`}
         style={bgImg}>

            {/* picture rotation animation */}
            <div className='w-full gird gird-col-1 sm:gird-cols-2 sm:flex sm:justify-between sm:items-center space-y-10 sm:space-y-0 sm:space-x-20'>
                <div className=" w-full min-h-[250px] sm:max-h-[200px] sm:flex sm:justify-between sm:items-center order-1 sm:order-2 relative">
                    <div>
                        <img
                            // data-aos="zoom-in"
                            // data-aos-duration="300"
                            // data-aos-once="true"
                            src={preView} alt="" className='max-w-[200px] sm:max-w-[200px] lg:max-w-[350px] sm:max-h[400px] sm:scale-150 mx-auto spin'/>

                    </div>

                    {/* small pictures */}
                    <div className=" sm:w-fit w-full flex lg:flex-col justify-center items-center bg-white/30  rounded-full bottom-[0px] lg:right-20 lg:mt-2 lg:mb-2 absolute ">
            
                     { images.map((image) => (
                        <img key={image.id} src={image.img} className=' max-w-[20] h-[40px] object-contain inline-block ml-2 hover:scale-105 duration-200 sm:ml-0 '
                        onClick={ () => {
                            setPreView(
                            image.id ===1? biryani : image.id === 2 ? biryani2 : image.id === 3 ? biryani3 : image.id === 4 ? biryani4 : biryani5
                        )}}
                        />
                        ))}
                        
                    </div>
                
                </div>

                <div className={` w-full pl-10 space-y-4 text-bold text-black duration-200 ${ isDark ? ' text-white' : ' text-black'} sm:order-1 order-2`}>
                    <h1 className=' text-2xl text-center sm:text-left font-bold sm:text-3xl'>Welcome to Sai | <span className={`${ isDark ? ' sm:text-primary' : ''}`}>Restaurant</span> </h1>
                    <br />
                    <p className=' text-lg text-center sm:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, libero?</p>
                    <div className=' flex items-center gap-5 justify-center sm:justify-start'>
                
                    <button className='bg-gradient-to-r from-primary to-secondary rounded-lg text-white gap-2 flex justify-between items-center py-1 px-4 hover:scale-105'>
                                    Order 
                        <FaShoppingCart className='text-l text-white drop-shadow-sm cursor-pointer hidden sm:block' />
                    </button>
                    <button className='bg-gradient-to-r from-primary to-secondary rounded-lg text-white gap-2 flex justify-between items-center py-1 px-4 hover:scale-105'>
                                    Book Table 
                        <FaBook className='text-l text-white drop-shadow-sm cursor-pointer hidden sm:block' />
                    </button>
                    </div>
                </div>



            </div>
        </div>
    </>
  )
}
