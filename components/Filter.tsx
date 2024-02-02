import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup
  } from "@/components/ui/select";

  interface Props{
        filter:{
            name:String,
            value:String
        }[],
        otherClasses?:String,
        containerClasses?:String
  }

const Filter = ({filter,otherClasses,containerClasses}:Props) => {
  return (
    <div className={`relative ${otherClasses} hidden max-md:flex`}>
        <Select>
          <SelectTrigger className={`${otherClasses} background_dark300
           text-white border px-5 py-2.5`}>

            <div className='line-clamp-1 flex-1 text-left'>
            <SelectValue placeholder="Select a Filter" />
            </div>

          </SelectTrigger>
          <SelectContent className='background_dark300'>
            <SelectGroup>
                {
                    filter.map((items) => (
                        <SelectItem value={`${items.value}`} key={`${items.value}`} 
                        className='hover:bg-dark-400 rounded-[10px] duration-100 text-white'>
                            {items.name}
                        </SelectItem>
                    ))
                }
            </SelectGroup>
          </SelectContent>
        </Select>
    </div>
  )
}

export default Filter