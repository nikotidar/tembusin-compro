"use client";
import DrawerNav from "@/components/DrawerNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/assets/logo.svg";

function Header() {
  const pathname = usePathname();

  return (
    <div className="lg:px-[164px] lg:py-6 px-4 py-3 bg-banner-header flex justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="logo" className="md:w-full w-[120px]" />
      </Link>
      <DrawerNav />

      <div className="md:flex hidden gap-2">
        <Link href="/">
          <div
            className={`p-[10px] text-base ${
              pathname === "/" ? "text-[#46A7DE] font-bold" : "text-[#C0C7E1]"
            }`}
          >
            Home
          </div>
        </Link>
        <Link href="/services">
          <div
            className={`p-[10px] text-base ${
              pathname === "/services"
                ? "text-[#46A7DE] font-bold"
                : "text-[#C0C7E1]"
            }`}
          >
            Services
          </div>
        </Link>
        <Link href="/about">
          <div
            className={`p-[10px] text-base ${
              pathname === "/about"
                ? "text-[#46A7DE] font-bold"
                : "text-[#C0C7E1]"
            }`}
          >
            About Us
          </div>
        </Link>
      </div>
      <Link href="/contact" className="md:flex hidden">
        <Button className="px-4 py-[10px] border-[#46A7DE] text-[#46A7DE] border-[1px] rounded-[2px] text-sm font-bold leading-[130%] tracking-[0.56px] uppercase">
          Contact us
        </Button>
      </Link>
    </div>
  );
}

export default Header;
