"use client"
import React from 'react'
import { sidebarLinks } from '../../constants'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { LogIn, LogOut } from 'lucide-react'

const LeftSidebar = () => {
    const pathName = usePathname();
  return (
    <section className="background_dark200 light-border fixed left-0 top-0 max-lg:pt-[6rem]
    flex h-screen w-fit flex-col justify-between  overflow-y-auto p-5 pt-32 max-sm:hidden lg:w-[275px]">
        <div className='flex flex-1 flex-col gap-1 '>
            {
                sidebarLinks.map((items) => {
                    const active =
                    (pathName.includes(items.route) && items.route.length > 1) ||
                    pathName === items.route;
                    return (
                        <Link href={items.route} className={`flex gap-4 my-1 ml-2 py-2.5 px-2 ${
                            active
                              ? "bg-purple-600 text-white rounded-lg"
                              : "text-white"
                          }`} key={items.label}>
                            <Image src={items.imgURL} height={26} width={26} alt={items.label} />
                            <p className='max-lg:hidden text-white'>{items.label}</p>
                        </Link>
                    )
                })
            }
        </div>

        <div className="flex flex-col mt-2 max-lg:mt-4">
            <SignedOut>
              <Link href="/sign-in" className="purple_btn flex gap-4 max-lg:px-3">
                <LogIn />
                <p className='max-lg:hidden'>Log-in</p>
              </Link>
            </SignedOut>

            <SignedOut>
              <Link href="/sign-up" className="purple_btn flex gap-4 max-lg:px-3">
                <Image
                  src="assets/icons/sign-up.svg"
                  height={20}
                  width={20}
                  alt="sign-in-logo"
                />
                <p className='max-lg:hidden'>Sign-up</p>
              </Link>
            </SignedOut>

            <SignedIn>
              <Link href="/sign-up" className="purple_btn flex gap-4 max-lg:px-3 max-lg:ml-2">
                <LogOut />
                <p className='max-lg:hidden'>Log-out</p>
              </Link>
            </SignedIn>
          </div>
    </section>
  )
}

export default LeftSidebar