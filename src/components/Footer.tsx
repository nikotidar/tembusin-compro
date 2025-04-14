import Image from "next/image";
import Link from "next/link";

import FacebookIcon from "@/assets/facebook.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LogoTembusin from "@/assets/logo tembusin-footer.svg";
import TwitterIcon from "@/assets/twitter.svg";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
const CONTAINER =
  "px-4 py-10 lg:px-[164px] lg:py-16 bg-[#0D2536] flex flex-col lg:flex-row gap-6 lg:justify-between lg:items-start";
const HEADING =
  "text-white text-sm font-bold leading-[130%] tracking-[0.56px] uppercase";
const LABEL_VALUE =
  "text-sm text-[#C0C7E1] font-normal leading-[140%] tracking-[0.28px]";
const COPYRIGHT =
  "bg-[#081E2B] px-4 lg:px-[164px] flex flex-wrap gap-5 justify-center lg:justify-between py-6 text-white font-normal leading-[140%] tracking-[0.28px] text-sm";

function Footer() {
  return (
    <>
      <div className={CONTAINER}>
        <div className="flex flex-col gap-10 lg:max-w-[198px]">
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image src={LogoTembusin} alt="logo tembusin" />
            </Link>
            <div className={`${LABEL_VALUE} `}>
              At Tembusin, we ensure cybersecurity through proactive learning, defense, and strategic offense, empowering clients to protect their digital assets in an ever-evolving landscape.
            </div>

          </div>

          <div className="flex flex-col gap-3">
            <div className={HEADING}>OUR CERTIFICATION</div>
            <div className="flex flex-nowrap gap-3">
              <Image width={36} height={36} src={"/assets/ethical.png"} alt="ethical" />
              <Image width={36} height={36} src={"/assets/cyberwarfare.png"} alt="cyberwarfare" />
              <Image width={36} height={36} src={"/assets/secops.png"} alt="secops" />
              <Image width={36} height={36} src={"/assets/ejpt.png"} alt="ejpt" />
              <Image width={36} height={36} src={"/assets/ewptx.png"} alt="ewptx" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className={HEADING}>CONTACT</div>
          <div className={`${LABEL_VALUE} lg:max-w-[198px]`}>
            Ruko Green Lake Blok TBE Unit L&M Sunter Agung, Penjaringan, Kec. Penjaringan, Jakarta Utara, DKI Jakarta
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
      </div>
      <div className={COPYRIGHT}>
        <div>Copyright©tembusin.id</div>
        <div className="flex gap-3 items-center">
          <Link href="https://instagram.com/tembusin.id" className={`${LABEL_VALUE} flex gap-2 items-center`}>
            <div className=" bg-[#C13584] text-white rounded-full p-1 text-sm">
              <FaInstagram />
            </div>
            Instagram
          </Link>
          <Link href="#" className={`${LABEL_VALUE} flex gap-2 items-center`}>
            <div className=" bg-[#0077B5] text-white rounded-full p-1 text-sm">
              <FaLinkedinIn />
            </div>
            LinkedIn
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
