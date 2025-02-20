import React from 'react'
import biryani from '../../assets/biryani.png'
import biryani2 from '../../assets/biryani2.png'
import biryani3 from '../../assets/biryani3.png'
import biryani4 from '../../assets/biryani4.png'
import biryani5 from '../../assets/biryani5.png' 

export default function Services() {

    let ServiceDates = [
              {
                  id : 2,
                  img : biryani2,
                  name : 'biryani2',
                  description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat reprehenderit sequi nemo minima rem laboriosam saepe dicta odio repellat.'
              },
              {
                  id : 3,
                  img : biryani3,
                  name : 'biryani3',
                  description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat reprehenderit sequi nemo minima rem laboriosam saepe dicta odio repellat.'
              },
      
              {
                  id : 5,
                  img : biryani5,
                  name : 'biryani5',
                  description : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde fugiat reprehenderit sequi nemo minima rem laboriosam saepe dicta odio repellat.'
              },
    ]
  return (
    <>
    <div className=' pt-10'>
        <div className="container">
            {/* Service introduction */}
            <div className="text-center mb-20 max-w-[400px] mx-auto">
                <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Our Services</p>
                <h1  className="text-3xl font-bold">Services</h1>
                <p className="text-xs text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos modi repellat provident id itaque optio voluptatem quam, molestias cumque aut.</p>
            </div>
            {/* Services Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-5 place-items-center">
               {ServiceDates.map( (service ) => 
                <div 
                data-aos="zoom-in"
                data-aos-duration="300"
                className=" mt-10 rounded-2xl hover:bg-primary hover:text-white relative group max-w-[300px] shadow-md">
                    <div className='h-[100px]'>
                    <img src={service.img} alt="" className='max-w-[200px] max-h-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300'/>
                    </div>
                    <div className=" p-4 text-center">
                        <h1 className='text-xl font-bold'>{service.name}</h1>
                        <p className='text-gray-500 group-hover:text-white duration-high text-sm'>{service.description}</p>
                    </div>
                </div>
                
               )}
            </div>

        </div>
    </div>
    </>
  )
}
