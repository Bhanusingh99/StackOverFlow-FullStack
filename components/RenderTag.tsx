import Link from 'next/link'
import React from 'react'

interface Props {
  key: number;
  id: number;
  totalQuestion?: number;
  name: string;
  showCount: boolean;
}

const RenderTag = ({key,id,name,totalQuestion,showCount}:Props) => {
  return (
    <Link href={`/tags/${id}`} className='flex justify-between gap-2 text-white'>
        <p className='maintag'>{name}</p>
        {showCount && (<p className='text-[12px]'>{totalQuestion}</p>)}
    </Link>
  )
}

export default RenderTag