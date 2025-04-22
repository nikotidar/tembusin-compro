"use client";
import DrawerNav from "@/components/DrawerNav";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import Logo from "@/assets/logo.svg";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function Header() {
  const pathname = usePathname();
  const route = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseAndRoute = (path: string) => {
    handleClose();
    route.push(path);
  };

  return (
    <div className="lg:px-[164px] lg:py-6 px-4 py-3 bg-banner-header flex justify-between items-center">
      <Link href="/">
        <Image src={Logo} alt="logo" className="md:w-full w-[120px]" />
      </Link>
      <DrawerNav />

      <div className="md:flex items-center hidden gap-2">
        <Link href="/">
          <div
            className={`p-[10px] text-base ${pathname === "/" ? "text-[#46A7DE] font-bold" : "text-[#C0C7E1]"
              }`}
          >
            Home
          </div>
        </Link>
        <Button
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          onMouseEnter={handleClick}
        >
          <div
            className={`text-base flex items-center gap-2 ${pathname.includes("/services")
              ? "text-[#46A7DE] font-bold"
              : "text-[#C0C7E1]"
              }`}
          >
            Services
            <FaAngleDown />
          </div>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem
            onClick={() => handleCloseAndRoute("/services/penetration")}
            className={`${pathname.includes("/penetration")
              ? "text-[#46A7DE]"
              : ""
              }`}>Penetration Testing</MenuItem>
          <MenuItem
            onClick={() => handleCloseAndRoute("/services/vulnerability")}
            className={`${pathname.includes("/vulnerability")
              ? "text-[#46A7DE]"
              : ""
              }`}>Vulnerability Assessment</MenuItem>
        </Menu>
        <Link href="/about">
          <div
            className={`p-[10px] text-base ${pathname === "/about"
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
