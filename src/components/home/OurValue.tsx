import Image from "next/image";

import Union from "@/assets/Union.svg";
import Value1 from "@/assets/value-1.svg";
import Value2 from "@/assets/value-2.svg";
import Value3 from "@/assets/value-3.svg";

function OurValue() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="hidden bg-our-value bg-no-repeat bg-contain lg:w-[796px] lg:pl-[260px] lg:py-[120px] lg:flex lg:flex-col">
        <div className="px-1 py-3 mb-4 uppercase text-base text-[#46A7DE] font-bold leading-[130%] tracking-[0.56px] md:tracking-[0.64px]">
          Our value
        </div>
        <div className="mb-5 md:mb-10 text-white md:text-[50px] text-[24px] font-bold leading-[140%] tracking-[0.48px] md:tracking[1px] md:max-w-[440px]">
          Cybersecurity is our specialty
        </div>
        <div className="text-white max-w-sm font-normal text-lg md:text-[22px] leading-[140%] tracking-[0.36px] md:tracking-[0.44px] ">
          We bridge expertise, reliability, and comprehensive solutions for your
          cybersecurity needs.
        </div>
      </div>

      <div
        className="lg:hidden flex flex-col bg-[#2E449C] pt-10 pb-20 px-4 mb-10 bg-no-repeat bg-contain relative"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 90%)",
        }}
      >
        <div className="px-1 py-3 mb-4 uppercase text-base text-[#46A7DE] font-bold leading-[130%] tracking-[0.56px] md:tracking-[0.64px]">
          Our value
        </div>
        <div className="mb-5 md:mb-10 text-white md:text-[50px] text-[24px] font-bold leading-[140%] tracking-[0.48px] md:tracking[1px] md:max-w-[440px]">
          Cybersecurity is our specialty
        </div>
        <div className="text-white font-normal text-lg md:text-[22px] leading-[140%] tracking-[0.36px] md:tracking-[0.44px] md:max-w-[440px]">
          We bridge expertise, reliability, and comprehensive solutions for your
          cybersecurity needs.
        </div>
        <Image src={Union} className="absolute top-16 left-0" alt="" />
        <Image src={Union} className="absolute bottom-16 right-10" alt="" />
      </div>

      <div className="flex flex-col gap-6 md:py-[42px] px-4 md:px-0">
        <div className="flex gap-6 items-start md:px-6 md:py-4">
          <Image src={Value1} alt="1" />
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#121926] md:text-[24px] lg:max-w-[327px] font-bold leading-[140%] md:tracking-[0.48px] tracking-[0.36px] text-lg">
              Transparance Communication
            </div>
            <div className="text-[#4B5565] lg:max-w-[327px] md:text-base leading-[140%] md:tracking-[0.32px] text-sm tracking-[0.28px]">
              We prioritizes transparency, integrity, <br />
              and open communication.
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-start md:px-6 md:py-4">
          <Image src={Value2} alt="2" />
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#121926] md:text-[24px] lg:max-w-[327px] font-bold leading-[140%] md:tracking-[0.48px] tracking-[0.36px] text-lg">
              Expert Team
            </div>
            <div className="text-[#4B5565] lg:max-w-[327px] md:text-base leading-[140%] md:tracking-[0.32px] text-sm tracking-[0.28px]">
              Our expert teams stay ahead of emerging threats to provide
              tailored solutions for you.
            </div>
          </div>
        </div>

        <div className="flex gap-6 items-start md:px-6 md:py-4">
          <Image src={Value3} alt="3" />
          <div className="flex flex-col gap-[10px]">
            <div className="text-[#121926] lg:max-w-[327px] md:text-[24px] font-bold leading-[140%] md:tracking-[0.48px] tracking-[0.36px] text-lg">
              Offer Solution
            </div>
            <div className="text-[#4B5565] lg:max-w-[327px] md:text-base leading-[140%] md:tracking-[0.32px] text-sm tracking-[0.28px]">
              We offer end-to-end solutions to safeguard your digital assets.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValue;
