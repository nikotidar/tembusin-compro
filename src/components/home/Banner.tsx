import { Button } from "@/components/ui/button";
import Image from "next/image";

import IllustrationBanner from "@/assets/Illustrationbanner.svg";

function Banner() {
  return (
    <div className="bg-banner-header h-[855px] bg-cover bg-no-repeat relative">
      <div className="lg:px-[164px] lg:py-[120px] px-4 py-6 flex flex-col items-center lg:items-start">
        <div className="text-[36px] lg:text-[80px] text-white font-extrabold tracking-[1.6px] leading-[130%] lg:text-left text-center lg:max-w-[920px] mb-10">
          Empowering Security, Ensuring Trust.
        </div>
        <div className="text-base lg:text-[22px] text-white font-normal leading-[140%] tracking-[0.44px] mb-16 text-center lg:text-left lg:max-w-[536px]">
          Focus on your business and let us protect your company's cyber space.
        </div>
        <Button className="px-6 py-4 text-white text-base font-bold tracking-[0.8px] leading-[138%] bg-[#46A7DE] rounded-[2px]">
          Contact Us
        </Button>
      </div>
      <Image
        src={IllustrationBanner}
        alt="illustration"
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}

export default Banner;
