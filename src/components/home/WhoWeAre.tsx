import { Button } from "@/components/ui/button";
import Image from "next/image";

import Illustration from "@/assets/illustration whoweare.svg";

function WhoWeAre() {
  return (
    <div className="lg:px-[164px] lg:py-[140px] py-[80px] px-4 bg-[#F7FAFC] flex flex-col-reverse lg:flex-row items-center">
      <div>
        <div className="px-3 py-1 uppercase text-base font-bold leading-[130%] tracking-[0.64px] text-[#46A7DE] mb-5">
          who we are
        </div>
        <div className="text-[#121926] md:text-[50px] text-[24px] font-bold leading-[130%] tracking-[1px] mb-5 md:mb-6">
          Secure your cyber transformation
        </div>
        <div className="text-[#364152] font-normal text-lg md:text-[22px] leading-[140%] tracking-[0.36px] md:tracking-[0.44px] md:mb-10 mb-6">
          We specialize in guiding businesses through their cybersecurity
          transformation journey. Trust us to secure your digital assets and
          achieve your business goals.
        </div>

        <Button className="border-[#46A7DE] px-4 py-3 rounded-[2px] text-[#46A7DE] uppercase bg-transparent leading-[130%] tracking-[0.64px] font-bold border-[2px]">
          Contact Us
        </Button>
      </div>

      <Image src={Illustration} alt="illustration" />
    </div>
  );
}

export default WhoWeAre;
