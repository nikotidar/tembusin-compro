import Image from "next/image";

import PentestIcon from "@/assets/Bug Bounty.svg";
import BugBountyIcon from "@/assets/Bug Bountyplatform.svg";
import SecurityIcon from "@/assets/Bug Bountysecurity solution.svg";
import VulnerableIcon from "@/assets/Bug Bountyvulnerability.svg";

function Services() {
  return (
    <div className="lg:px-[164px] lg:py-[120px] px-4 py-10 bg-[#F7FAFC]">
      <div className="flex flex-col items-center">
        <div className="uppercase text-sm md:text-base font-bold leading-[130%] tracking-[0.64px] mb-4 py-1 px-3">
          Services
        </div>
        <div className="md:text-[50px] text-[24px] font-bold tracking-[0.48px] md:tracking-[1px] leading-[130%] mb-5 md:mb-6">
          Our Professional Services
        </div>
        <div className="text-center text-[#364152] text-lg md:text-[22px] font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px] mb-6 md:mb-[56px]">
          We are committed to delivering innovative solutions for your evolving
          business needs
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-16 gap-6">
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
    </div>
  );
}

export default Services;
