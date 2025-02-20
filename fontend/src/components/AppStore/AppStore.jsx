import React from 'react'
import AppStoreJPG from '../../assets/app_store.png'
import PlayStoreJPG from '../../assets/play_store.png'
import Gif from '../../assets/mobile_bike.gif'
export default function AppStore() {
  
    return (
    <>
        <div className='bg-gray-100'>
            <div className='container'>
              <div className=' grid sm:grid-cols-2 grid-cols-1 items-center gap-4'>
                <div
                   data-aos="fade-up"
                  data-aos-duration="300"
                  className="space-y-6 max-w-xl mx-auto"
                >
                  <h1 className='text-2xl text-center sm:text-left sm:text-4xl font-semibold text-gray-700 dark:text-gray-400 pt-4'>
                    SAI | RESTAURANT is available for Android and IOS
                  </h1>
                  <div className='flex flex-wrap justify-center sm:justify-start items-center'>
                    <a href="#">
                      <img src={AppStoreJPG} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'/>
                    </a>
                    <a href="#">
                      <img src={PlayStoreJPG} alt="" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' />
                    </a>
                </div>
                </div>
              <div data-aos="zoom-in" data-aos-duration="300">
                <img src={Gif} alt="" className="w-full p-4 sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply"/>
              </div>
              </div>
            </div>
        </div>
    </>
  )
}
