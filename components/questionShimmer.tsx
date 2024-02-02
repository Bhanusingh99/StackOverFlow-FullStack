import Link from 'next/link'
import React from 'react'

const EmptyHomeShimmer = () => {
  return (
    <div className='w-[250px] h-[200px] bg-dark-300 mx-auto mt-10 flex flex-col justify-center items-center'>
        <h1 className='h1-bold text-white'>Empty🥹</h1>
        
        <Link href="/ask-question" className='purple_btn mt-4 text-[12px]'>
            Ask Question
        </Link>
    </div>
  )
}

export default EmptyHomeShimmer