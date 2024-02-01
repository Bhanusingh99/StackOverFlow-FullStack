"use client"
import { usePathname } from "next/navigation";
import { sidebarLinks } from "../../../constants";
import Link from "next/link";
import Image from "next/image";

export const NavContent = () => {
  const pathName = usePathname();

  return (
    <section className="pt-10 flex flex-col">
      {sidebarLinks.map((item, index) => {
        const active =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;

        return (
          <Link
            href={item.route}
            key={index}
            className={`flex gap-5 my-1 ml-2 py-2.5 px-2 ${
              active
                ? "bg-purple-600 base-bold text-white rounded-lg"
                : "text-white"
            }`}
          >
            <Image src={item.imgURL} alt={item.label} width={22} height={22} />
            {item.label}
          </Link>
        );
      })}
    </section>
  );
};
