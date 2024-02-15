import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RenderTag from '../RenderTag'

const title = [
    {
        heading:"Best Practices for data fetching in Next.Js application in server side rendering(ssd)",
        url:"/something"
    },
    {
        heading:"Is it only me or the font is bolder then necessary",
        url:"/something"
    },
    {
        heading:"Can i get the course for free",
        url:"/something"
    },
    {
        heading:"Redux tookkit not updating state as expected",
        url:"/something"
    },
    {
        heading:"use try and catch for error handling properly",
        url:"/something"
    }
]

const popularTags = [
    {
        _id:"1",
        name:"Javascript",
        totalQuestion:5
    },
    {
        _id:"2",
        name:"ReactJs",
        totalQuestion:5
    },
    {
        _id:"3",
        name:"NextJs",
        totalQuestion:5
    },
    {
        _id:"4",
        name:"NodeJs",
        totalQuestion:5
    },
    {
        _id:"5",
        name:"Javascript",
        totalQuestion:5
    }
]

const RightSidebar = () => {
  return (
    <section className="background_dark200 sticky right-0 top-0 flex 
    h-screen rightsidebar flex-col gap-6 overflow-y-auto
    p-6 pt-36 max-xl:hidden">
        <div>
            <h1 className='top-questions h3-bold'>
                Top Questions
            </h1>
            <div className='mt-2 mb-5 flex w-full flex-col gap-8'>
                {
                    title.map((items,index) => {
                        return(
                            <Link href={items.url} key={index} className='flex cursor-pointer items-center justify-between gap-7 texts'>
                                <p className='body-medium title'>{items.heading}</p>
                                <Image 
                                src="/assets/icons/chevron-right.svg"
                                height={15}
                                width={15}
                                alt='arrow logo'
                                />
                            </Link>
                        )
                    })
                }
            </div>
        </div>

        <div className='tags'> 
            <h3 className='h3-bold text-white mt-5 popTags'>Popular Tags</h3>
            <div className='mt-7 flex flex-col gap-4'>
                {
                    popularTags.map((items,index) => {
                        return(
                            <RenderTag 
                            key={index}
                            id={items._id}
                            name={items.name}
                            totalQuestion={items.totalQuestion}
                            showCount
                            />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default RightSidebar