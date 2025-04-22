"use client";
import DrawerNav from "@/components/DrawerNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Logo from "@/assets/logo.svg";
import { FaAngleDown } from "react-icons/fa";

function Header() {
  const pathname = usePathname();
  const route = useRouter();

  return (
    <div className="lg:px-[164px] lg:py-6 px-4 py-3 bg-banner-header flex justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="logo" className="md:w-full w-[120px]" />
      </Link>
      <DrawerNav />

      <div className="md:flex items-center hidden gap-2">
        <Link href="/">
          <div
            className={`p-[10px] text-base ${pathname === "/" ? "text-[#46A7DE] font-bold" : "text-[#C0C7E1]"}`}
          >
            Home
          </div>
        </Link>

        {/* Custom Dropdown Services */}
        <div className="relative group">
          <button
            onClick={() => route.push("/services")}
            className={`text-base font-medium flex items-center gap-1 px-3 py-2 ${pathname.includes("/services") ? "text-[#46A7DE]" : "text-[#C0C7E1]"
              }`}
          >
            Services
            <FaAngleDown className="ml-1" />
          </button>

          {/* Dropdown on hover */}
          <div className="absolute left-0 top-full mt-0 hidden group-hover:flex flex-col bg-white rounded shadow-md z-50 min-w-[220px]">
            <button
              onClick={() => route.push("/services/penetration")}
              className={`${pathname.includes("/penetration") ? "text-[#46A7DE]" : " "} text-left px-4 py-2.5 text-sm rounded-t hover:bg-gray-100`}
            >
              Penetration Testing
            </button>
            <button
              onClick={() => route.push("/services/vulnerability")}
              className={`${pathname.includes("/vulnerability") ? "text-[#46A7DE]" : ""} text-left px-4 py-2.5 text-sm rounded-b hover:bg-gray-100`}
            >
              Vulnerability Assessment
            </button>
          </div>
        </div>

        <Link href="/about">
          <div
            className={`p-[10px] text-base ${pathname === "/about" ? "text-[#46A7DE] font-bold" : "text-[#C0C7E1]"}`}
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
