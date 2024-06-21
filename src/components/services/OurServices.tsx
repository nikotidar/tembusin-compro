import Image from "next/image";

import PentestIcon from "@/assets/Bug Bounty.svg";
import BugBountyIcon from "@/assets/Bug Bountyplatform.svg";
import SecurityIcon from "@/assets/Bug Bountysecurity solution.svg";
import VulnerableIcon from "@/assets/Bug Bountyvulnerability.svg";

function OurServices() {
  return (
    <div className="bg-[#F7FAFC] lg:px-[164px] lg:py-20 px-4 py-10 flex flex-col items-center">
      <div className="uppercase mb-4 text-[#46A7DE] md:text-base text-sm font-bold leading-[130%] tracking-[0.64px] px-3 py-1">
        SERVICES
      </div>
      <div className="mb-6 text-center text-[#121926] md:text-[50px] text-[24px] font-bold leading-[130%] tracking-[0.48px] md:tracking-[1px]">
        Our Professional Services
      </div>
      <div className="mb-6 md:mb-10 text-center text-[#364152] md:text-[22px] text-lg font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px]">
        We are committed to delivering innovative solutions for your evolving
        business needs
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6">
        <div
          className="p-6 flex flex-col border-[1px] border-[#C0C7E1] rounded-[2px] md:h-[350px] h-[250px]"
          style={{
            boxShadow: "0px 22px 24px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Image src={PentestIcon} alt="pentest" />
          <div className="text-[#121926] text-xl font-bold leading-[140%] tracking-[0.4px] mt-5 mb-3 md:mt-6 md:mb-6">
            Penetration Testing
          </div>
          <div className="text-sm md:text-base text-[#4B5565] leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
            Our penetration testing goes beyond surface-level assessments.
          </div>
        </div>

        <div
          className="p-6 flex flex-col border-[1px] border-[#C0C7E1] rounded-[2px] md:h-[350px] h-[250px]"
          style={{
            boxShadow: "0px 22px 24px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Image src={VulnerableIcon} alt="pentest" />
          <div className="text-[#121926] text-xl font-bold leading-[140%] tracking-[0.4px] mt-5 mb-3 md:mt-6 md:mb-6">
            Vulnerability Assessement
          </div>
          <div className="text-sm md:text-base text-[#4B5565] leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
            We identify and address system weaknesses to keep your business
            protected.
          </div>
        </div>

        <div
          className="p-6 flex flex-col border-[1px] border-[#C0C7E1] rounded-[2px] md:h-[350px] h-[250px]"
          style={{
            boxShadow: "0px 22px 24px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Image src={BugBountyIcon} alt="pentest" />
          <div className="text-[#121926] text-xl font-bold leading-[140%] tracking-[0.4px] mt-5 mb-3 md:mt-6 md:mb-6">
            Bug Bounty Platform
          </div>
          <div className="text-sm md:text-base text-[#4B5565] leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
            We identify and address system weaknesses to keep your business
            protected.
          </div>
        </div>

        <div
          className="p-6 flex flex-col border-[1px] border-[#C0C7E1] rounded-[2px] md:h-[350px] h-[250px]"
          style={{
            boxShadow: "0px 22px 24px 0px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Image src={SecurityIcon} alt="pentest" />
          <div className="text-[#121926] text-xl font-bold leading-[140%] tracking-[0.4px] mt-5 mb-3 md:mt-6 md:mb-6">
            Security Solution Integration
          </div>
          <div className="text-sm md:text-base text-[#4B5565] leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
            Security Solution Integration
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
