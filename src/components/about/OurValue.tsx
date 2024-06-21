import Image from "next/image";

import Value1 from "@/assets/value-1.svg";
import Value2 from "@/assets/value-2.svg";
import Value3 from "@/assets/value-3.svg";

function OurValue() {
  return (
    <div className="px-4 py-10 lg:px-[164px] lg:py-[80px] bg-[#FFF]">
      <div className="border-t border-b border-t-[#C0C7E1] border-b-[#C0C7E1] py-10 lg:py-[80px]">
        <div className="flex flex-col lg:flex-row justify-between mb-8 md:mb-10 gap-5 items-left lg:items-center">
          <div className="flex flex-col gap-3 lg:gap-4">
            <div className="px-3 py-1 uppercase text-base font-bold text-[#46A7DE] leading-[130%] tracking-[0.64px]">
              Our value
            </div>
            <div className="text-[#121926] md:text-[50px] text-[24px] font-bold leading-[140%] tracking-[0.48px] md:tracking-[1px]">
              Cybersecurity is our specialty
            </div>
          </div>
          <div className="text-[#4B5565] md:text-[22px] text-lg font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px] lg:max-w-[440px]">
            We bridge expertise, reliability, and comprehensive solutions for
            your cybersecurity needs.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:px-6 py-4 flex flex-row items-start md:flex-col gap-4 md:gap-6">
            <Image src={Value1} alt="" />
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

          <div className="md:px-6 py-4 flex flex-row items-start md:flex-col gap-4 md:gap-6">
            <Image src={Value2} alt="" />
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

          <div className="md:px-6 py-4 flex flex-row items-start md:flex-col gap-4 md:gap-6">
            <Image src={Value3} alt="" />
            <div className="flex flex-col gap-[10px]">
              <div className="text-[#121926] md:text-[24px] lg:max-w-[327px] font-bold leading-[140%] md:tracking-[0.48px] tracking-[0.36px] text-lg">
                Offer Solution
              </div>
              <div className="text-[#4B5565] lg:max-w-[327px] md:text-base leading-[140%] md:tracking-[0.32px] text-sm tracking-[0.28px]">
                We offer end-to-end solutions to safeguard your digital assets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValue;
