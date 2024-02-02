import Link from 'next/link'
import React from 'react'

interface Props {
  id: String;
  totalQuestion?: number;
  name: string;
  showCount?: boolean;
}

const RenderTag = ({id,name,totalQuestion,showCount}:Props) => {
  return (
    <Link href={`/tags/${id}`} className='flex justify-between gap-2 text-white' key={`${id}`}>
        <p className='maintag'>{name}</p>
        {showCount && (<p className='text-[12px]'>{totalQuestion}</p>)}
    </Link>
  )
}

export default RenderTag