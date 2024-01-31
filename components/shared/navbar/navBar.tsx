import { SignedIn } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="flex-between fixed z-50 p-6
    background-dark200 w-full gap-5 sm:px-12"
    >
        <div className="flex gap-2">
      <Sheet>
        <SheetTrigger className="max-md:block hidden text-white">
          <Menu />
        </SheetTrigger>
        <SheetContent side={"left"} className="background-dark200">
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
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
      GlobalSearch
      <div className="flex items-center">
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
    </nav>
  );
};

export default Navbar;
