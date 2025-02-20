import React from 'react'
import Slider from 'react-slick'

 const TestData = [
   { id : 1,
    name : 'Aung Min Khant',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam iste quae illo, rerum odio?",
    img : 'https://picsum.photos/100/100'
    },
   { id : 2,
    name : 'Hlaing Htet Aung',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam iste quae illo, rerum odio?",
    img : 'https://picsum.photos/101/101'
    },
   { id : 3,
    name : 'Thiri Zin Mar',
    text : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id aliquam iste quae illo, rerum odio?",
    img : 'https://picsum.photos/102/102'
    },
  ]

export default function Testimonial() {

    var settings = {
         dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    }
  return (
    <>
        <div data-aos="fade-up" data-aos-duration="300" className="py-10">
            <div className='container'>
                <div className="text-center mb-20 max-w-[400px] mx-auto">
                    <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>What our customers say</p>
                    <h1 className="text-3xl font-bold">Testimonial</h1>
                    <p className="text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse reiciendis sit saepe laborum, autem maxime. Ab, libero velit?</p>
                </div>
                <div  data-aos="zoom-in"
                        data-aos-duration="300"
                         className="grid grid-cols-1 max-w-[600px] mx-auto">
                   <Slider {...settings} >
                       {TestData.map((data) => {
                            return (
                                <div key={data.id}>

                                    <div 
                                        className='flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl bg-primary/10 relative'>

                                        <img src={data.img} alt="" className='rounded-full block mx-auto'/>

                                        <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,,</p>
                                        <h1  className="text-xl font-bold" >{data.name}</h1>
                                        <p className="text-gray-500 text-sm"> {data.text}</p>
                                    </div>
                                </div>
                            )
                        })}
                   </Slider>
                </div>
            </div>
        </div>
    </>
  )
}
