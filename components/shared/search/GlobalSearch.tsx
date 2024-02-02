import Image from 'next/image'
import React from 'react';

const GlobalSearch = () => {
  return (
    <div className='relative w-[600px] max-lg:hidden '>
      <div className=' background_dark300 w-[600px] relative flex
        grow items-center gap-1 rounded-xl py-3 px-4 addBg '>
        <Image
          src="/assets/icons/search.svg"  // Make sure to provide the correct path
          height={20}
          width={20}
          alt='search logo'
        />
        <input className='w-full bg-transparent text-white outline-none 
        border-none ml-2 py-1 px-1' placeholder='Search Globlly'/>
      </div>
    </div>
  );
};

export default GlobalSearch;
