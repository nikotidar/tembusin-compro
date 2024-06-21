import Image from "next/image";

import SecImage from "@/assets/security-excellent.svg";

function SecurityExcellent() {
  return (
    <div className="px-4 py-10 lg:px-[164px] lg:py-[120px] bg-[#FFF] flex flex-col lg:flex-row items-center gap-6 lg:gap-[96px]">
      <Image src={SecImage} alt="" />
      <div className="flex flex-col gap-5 lg:gap-[45px]">
        <div className="flex flex-col gap-3 lg:gap-6">
          <div className="text-[#121926] md:text-[36px] text-xl font-bold leading-[140%] tracking-[0.4px] md:tracking-[0.72px]">
            Security with Excellent Consulting Solutions
          </div>
          <div className="text-[#4B5565] md:text-base text-sm font-normal leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
            IT Security Consulting delivers top-tier consultation and tailored
            solutions to enhance your cyber security posture. Trust us to
            safeguard your digital assets with precision.
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:gap-6">
          <div className="text-[#121926] md:text-[24px] text-xl font-bold leading-[140%] tracking-[0.4px] md:tracking-[0.72px]">
            Empowering Businesses with Enhanced Security
          </div>
          <div className="text-[#4B5565] md:text-base text-sm font-normal leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
            QoinSec delivers tailored security assurance solutions for
            Indonesian businesses, prioritizing cutting-edge technologies. Our
            proactive monitoring ensures defense against evolving threats,
            offering peace of mind in today's digital landscape.
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityExcellent;
