import Image from 'next/image'
import Link from 'next/link'
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
const Matric = ({imageUrl,alt,value,title,href,textStyle,isAuthor}:matricProps) => {

  const matricContent = (
    <>
    <Image 
        src={`${imageUrl}`}
        width={16}
        height={16}
        alt={`${alt}`}
        className={`object-contain ${href ? 'rounded-full' : ''}`}
        />
        <p className={`${textStyle} flex items-center gap-1 text-white text-[13px]`}>
            {`${value}`}
             <span className={`small-regular line-clamp-1 ${isAuthor?"max-sm:hidden":""}`}>
              {title}
              </span>
        </p>
    </>
  )

  if(href){
    return(
      <Link href={`${href}`} className='flex gap-1'>
        {matricContent}
      </Link>
    )
  }

  return (
    <div className='flex flex-wrap gap-1'>
        {matricContent}
    </div>

  )
}

export default Matric
