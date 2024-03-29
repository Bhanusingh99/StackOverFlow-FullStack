import React from 'react'
import Navbar from '../../../components/shared/navbar/navBar'
import LeftSidebar from '../../../components/shared/leftSideBar'
import RightSidebar from "../../../components/shared/rightSidebar"

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className='background_dark100 relative'>
        <Navbar/>
        <div className='flex'>
            <LeftSidebar/>
            <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36
            max-md:pb-14 sm:px-14 lg:ml-[15rem] md:ml-24 sm:ml-16'>
                <div className='mx-auto w-full max-w-5xl'>
                    {children}
                </div>
            </section>
            <RightSidebar/>
        </div>
        Toaster
    </main>
  )
}

export default Layout