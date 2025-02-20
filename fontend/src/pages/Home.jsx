import React from 'react'
import Hero from '../components/Hero/Hero'
import useTheme from '../hooks/useTheme'
import Services from '../components/Services/Services';
import Banner from '../components/Banner/Banner';

export default function Home() {

    let {isDark} = useTheme();
  return (
    <div className={`min-h-screen shadow-md bg-white text-black duration-200 ${ isDark ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <Hero />
      <Services />
      <Banner />
    </div>
  )
}
