"use client"
import React from 'react'
import { HomePageFilters } from '../constants/filter'

const HomeFilter = () => {
    const active = "newest"
  return (
    <div className='mt-5 hidden flex-wrap gap-4 md:flex'>
        {
            HomePageFilters.map((items) =>(
                <button key={items.value} onClick={()=>{}}
                className={`text-white bg-dark-300 cursor-pointer py-1.5
                 px-3 rounded-[8px] text-[14px] ${active === items.value 
                 ?"bg-purple-500"
                 :"hover:bg-dark-400"}`}>
                    {items.name}
                </button>
            ))
        }
    </div>
  )
}

export default HomeFilter