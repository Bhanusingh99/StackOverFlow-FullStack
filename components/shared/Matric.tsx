import Image from 'next/image'
import React from 'react'

interface matricProps{
    imageUrl:String,
    alt:String,
    value:String | Number,
    title:String,
    href?:String,
    textStyle?:String,
    isAuthor?:boolean
}
const Matric = ({imageUrl,alt,value,title,href,textStyle}:matricProps) => {
  return (
    <div className='flex flex-wrap gap-1'>
        <Image 
        src={imageUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? 'rounded-full' : ''}`}
        />
        <p className={`${textStyle} flex items-center gap-1 text-white text-[13px]`}>
            {value} <span>{title}</span>
        </p>
    </div>

  )
}

export default Matric
