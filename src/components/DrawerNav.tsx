"use client";

import { Button } from "@/components/ui/button";
import Drawer from "@mui/material/Drawer";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

import ButtonNav from "@/assets/Button nav mobile.svg";
import CloseIcon from "@/assets/close icon.svg";
import Logo from "@/assets/logo.svg";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import path from "path";

function DrawerNav() {
  const router = useRouter()
  const pathname = usePathname();

  console.log(pathname)

  const [open, setOpen] = React.useState(false);
  const [openDropDown, setOpenDropDown] = React.useState(true);


  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const handleDropdown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <>
      <Image
        src={ButtonNav}
        alt=""
        className="cursor-pointer md:hidden"
        onClick={toggleDrawer(true)}
      />
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="left">
        <div className="w-[240px] bg-[#2E449C] h-full p-5">
          <div className="flex justify-between items-center">
            <Image src={Logo} alt="logo" className="w-[120px]" />
            <Image
              src={CloseIcon}
              alt="close"
              className="cursor-pointer"
              onClick={toggleDrawer(false)}
            />
          </div>
          <div className="my-4 border-[#46A7DE] border"></div>

          <div className="flex flex-col gap-4">
            <Link href="/">
              <div
                className={`py-[10px] text-base ${pathname === "/"
                  ? "text-[#46A7DE] font-bold"
                  : "text-[#C0C7E1] font-normal"
                  } leading-[140%] tracking-[0.32px]`}
              >
                Home
              </div>
            </Link>
            <div>
              <Button onClick={() => router.push("/services")} className="w-full p-0 text-start flex items-center justify-between">
                <span
                  className={`text-base ${pathname === "/services/"
                    ? "text-[#46A7DE] font-bold"
                    : "text-[#C0C7E1] font-normal"
                    } leading-[140%] tracking-[0.32px]`}
                >
                  Services
                </span>
                <div onClick={handleDropdown} className="p-2.5">
                  {openDropDown ? <FaAngleUp color="#C0C7E1" size={16} /> : <FaAngleDown color="#C0C7E1" size={16} />}
                </div>
              </Button>
              <Collapse in={openDropDown} timeout="auto" unmountOnExit className="p-0">
                <List component="div" disablePadding>
                  <ListItemButton onClick={() => router.push("/services/penetration")} className="p-0 ps-5">
                    <ListItemText primary="Penetration Testing"
                      className={`text-sm
                      ${pathname === "/services/penetration/"
                          ? "text-[#46A7DE] font-bold"
                          : "text-[#C0C7E1] font-normal"
                        } leading-[140%] tracking-[0.32px]`} />
                  </ListItemButton>
                  <ListItemButton onClick={() => router.push("/services/vulnerability")} className="p-0 ps-5">
                    <ListItemText
                      primary="Vulnerability Assessment"
                      className={`text-sm
                      ${pathname === "/services/vulnerability/"
                          ? "text-[#46A7DE] font-bold"
                          : "text-[#C0C7E1] font-normal"
                        } leading-[140%] tracking-[0.32px]`} />
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
            <Link href="/about">
              <div
                className={`py-[10px] text-base ${pathname === "/about/"
                  ? "text-[#46A7DE] font-bold"
                  : "text-[#C0C7E1] font-normal"
                  } leading-[140%] tracking-[0.32px]`}
              >
                About Us
              </div>
            </Link>
          </div>

          <Link href="contact">
            <Button className="uppercase text-white text-sm font-bold leading-[130%] tracking-[0.56px] rounded-[2px] border border-white bg-[#2E449C] px-4 py-[10px] mt-8">
              Contact Us
            </Button>
          </Link>
        </div>
      </Drawer>
    </>
  );
}

export default DrawerNav;
