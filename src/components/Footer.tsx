import Image from "next/image";
import Link from "next/link";

import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LogoTembusin from "@/assets/logo tembusin-footer.svg";
import TwitterIcon from "@/assets/twitter.svg";

const CONTAINER =
  "px-4 py-10 lg:px-[164px] lg:py-16 bg-[#0D2536] flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-start";
const HEADING =
  "text-white text-sm font-bold leading-[130%] tracking-[0.56px] uppercase";
const LABEL_VALUE =
  "text-sm text-[#C0C7E1] font-normal leading-[140%] tracking-[0.28px]";
const COPYRIGHT =
  "bg-[#081E2B] text-center py-6 text-white font-normal leading-[140%] tracking-[0.28px] text-sm";

function Footer() {
  return (
    <>
      <div className={CONTAINER}>
        <Link href="/">
          <Image src={LogoTembusin} alt="logo tembusin" />
        </Link>

        <div className="flex flex-col gap-3">
          <div className={HEADING}>CONTACT</div>
          <div className={`${LABEL_VALUE} lg:max-w-[198px]`}>
            Jl. Outer Ring Road Rukan Sedayu Square Blok G No. 8 Cengkareng
            Barat, Jakarta Barat 11730
          </div>
          <Link href="mailto:info@tembusin.id">
            <div className={LABEL_VALUE}>info@tembusin.id</div>
          </Link>

          <Link href="tel:+62214757383">
            <div className={LABEL_VALUE}>(021) 4757383</div>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className={HEADING}>menu</div>
          <Link href="/services">
            <div className={LABEL_VALUE}>Services</div>
          </Link>

          <Link href="/about">
            <div className={LABEL_VALUE}>About us</div>
          </Link>

          <Link href="/contact">
            <div className={LABEL_VALUE}>Contact Us</div>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className={HEADING}>Services</div>
          <Link href="#">
            <div className={LABEL_VALUE}>Penetration Testing</div>
          </Link>
          <Link href="#">
            <div className={LABEL_VALUE}>Security Solution Integration</div>
          </Link>
          <Link href="#">
            <div className={LABEL_VALUE}>Vulnerability Assessment</div>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <div className={HEADING}>Social Media</div>
          <Link href="#">
            <div className={`${LABEL_VALUE} flex gap-2 items-center`}>
              <Image src={InstagramIcon} alt="Instagram icon" />{" "}
              <span>Instagram</span>
            </div>
          </Link>

          <Link href="#">
            <div className={`${LABEL_VALUE} flex gap-2 items-center`}>
              <Image src={TwitterIcon} alt="Twitter icon" />{" "}
              <span>Twitter</span>
            </div>
          </Link>

          <Link href="#">
            <div className={`${LABEL_VALUE} flex gap-2 items-center`}>
              <Image src={FacebookIcon} alt="Facebook icon" />{" "}
              <span>Facebook</span>
            </div>
          </Link>
        </div>
      </div>
      <div className={COPYRIGHT}>Copyright©tembusin.id</div>
    </>
  );
}

export default Footer;
