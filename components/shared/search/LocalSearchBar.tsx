"use client"
import Image from 'next/image'
import React from 'react'

interface Props{
    routes:String,
    iconsPosition:String,
    iconSrc:String,
    additionalCss?:String
    placeholder:String
}

const LocalSearchBar = ({routes,iconsPosition,iconSrc,additionalCss,placeholder}:Props) => {
  return (
    <div className={`background_dark300 grow flex min-h-[56px] items-center
    px-4 rounded-[10px] ${additionalCss}`}>
        {iconsPosition === "left" && (
            <Image src={iconSrc} height={20} width={20} alt='Search Icons' className='cursor-pointer'/>
        )}
         <input className='w-full bg-transparent text-white outline-none 
        border-none ml-2 py-1 px-1' placeholder={`${placeholder}`}
        onChange={() =>{}}
        value={""}
        type='text'/>
        {iconsPosition === "right" && (
            <Image src={iconSrc} height={20} width={20} alt='Search Icons' className='cursor-pointer'/>
        )}
    </div>
  )
}

export default LocalSearchBar