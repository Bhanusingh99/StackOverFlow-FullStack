'use client'
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobalSearch from "../search/GlobalSearch";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { LogIn, LogOut, Menu } from "lucide-react";
import { sidebarLinks } from "../../../constants";
import { NavContent } from "./NavContent";


const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 px-6 py-5 background_dark200 w-full gap-5 sm:px-12">
      <div className="flex gap-2">
        <Link href="/" className="flex max-md:ml-2">
          <Image
            src="/assets/images/blog-logo.png"
            height={28}
            width={28}
            alt="logo"
          />
          <p className="h3-bold ml-1 text-white max-sm:hidden">
            Gutur-<span className="text-purple-400">Gu</span>
          </p>
        </Link>
      </div>

      <GlobalSearch />

      {/* Mobile Navbar starts from Here */}
      <div className="flex items-center gap-4">
        <div className="ml-20">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
            }}
          />
        </SignedIn>
        </div>
        
      
      <Sheet>
        <SheetTrigger className="max-md:block hidden text-white border-r-none">
          <Menu size={28} strokeWidth={2}/>
        </SheetTrigger>
        <SheetContent side={"left"} className="background-dark200">
          <Link href="/" className="flex max-md:ml-2">
            <Image
              src="/assets/images/blog-logo.png"
              height={28}
              width={28}
              alt="logo"
            />
            <p className="h3-bold ml-2 text-white">
              Gutur-<span className="text-purple-400">Gu</span>
            </p>
          </Link>

          <NavContent />

          <div className="flex flex-col mt-8">
            <SignedOut>
              <Link href="/sign-in" className="purple_btn flex gap-4">
                <LogIn />
                Log-in
              </Link>
            </SignedOut>

            <SignedOut>
              <Link href="/sign-up" className="purple_btn flex gap-4">
                <Image
                  src="assets/icons/sign-up.svg"
                  height={20}
                  width={20}
                  alt="sign-in-logo"
                />
                Sign-up
              </Link>
            </SignedOut>

            <SignedIn>
              <Link href="/sign-up" className="purple_btn flex gap-4">
                <LogOut />
                Log-out
              </Link>
            </SignedIn>
          </div>
        </SheetContent>
      </Sheet>
      </div>

      <div className="flex max-lg:hidden">
        <SignedOut>
          <Link
            href="/sign-in"
            className="text-white border-[1.25px] border-purple-500 flex gap-1 items-center py-1.5 px-2.5 rounded-md"
          >
            <LogOut size={16} strokeWidth={1.75} />
            <p className="text-[12px]">Log-in</p>
          </Link>
        </SignedOut>
      </div>
    </nav>
  );
};

export default Navbar;
