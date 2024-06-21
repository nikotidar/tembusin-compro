import Image from "next/image";

import BannerImage from "@/assets/banner-about.svg";

function Banner() {
  return (
    <div className="bg-banner-header bg-cover bg-no-repeat lg:px-[164px] lg:py-[80px] px-4 py-[55px] flex flex-col lg:flex-row items-center gap-10">
      <div className="md:text-[80px] md:font-extrabold text-[32px] font-bold leading-[130%] md:tracking-[1.6px] tracking-[0.72px] text-white text-center lg:text-left">
        Meet Tembusin Cyber Security for your business.
      </div>
      <Image src={BannerImage} alt="banner" />
    </div>
  );
}

export default Banner;
