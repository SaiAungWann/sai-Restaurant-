import React from 'react'
import DarkBtn from '../../assets/website/dark-mode-button.png'
import LightBtn from '../../assets/website/light-mode-button.png'
import useTheme from '../../hooks/useTheme'

export default function Theme() {
  let {isDark , changeTheme} = useTheme();

  return (
    <>
           { !isDark && <img src={LightBtn} alt="" className='w-10 rounded-lg cursor-pointer' onClick={() => changeTheme('dark')} title='light'/> }
            { isDark && <img src={DarkBtn} alt="" className='w-10 rounded-lg cursor-pointer' onClick={() => changeTheme('light')} title='dark'/>}
    </>
  )
}
