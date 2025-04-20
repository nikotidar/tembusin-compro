import Image from "next/image";

function OurServices() {
  return (
    <div>
      <div className="bg-white lg:px-[164px] lg:py-20 px-4 py-10 flex flex-col gap-16">
        <div className="w-full flex flex-col items-center">
          <div className="uppercase mb-4 text-[#46A7DE] md:text-base text-sm font-bold leading-[130%] tracking-[0.64px] px-3 py-1">
            SERVICES
          </div>
          <div className="mb-6 text-center max-w-3xl text-[#121926] md:text-[50px] text-[24px] font-bold leading-[130%] tracking-[0.48px] md:tracking-[1px]">
            Our Professional Services
          </div>
          <div className="mb-6 md:mb-10 max-w-lg text-center text-[#364152] md:text-[22px] text-lg font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px]">
            We are committed to delivering innovative solutions for your evolving
            business needs
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-6 text-center max-w-3xl text-[#2E449C] md:text-[50px] text-[24px] font-bold leading-[130%] tracking-[0.48px] md:tracking-[1px]">
            1. Penetration Testing
          </div>
          <div className="mb-6 md:mb-10 max-w-lg text-center text-[#364152] md:text-[22px] text-lg font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px]">
            We are committed to delivering innovative solutions for your evolving
            business needs
          </div>
          <div className='max-sm:px-4 grid grid-cols-1 sm:grid-cols-2 gap-6 gap-x-0 text-[#121926] max-w-2xl'>
            <div className='border-t-4 p-8 flex flex-col gap-4 border-[#0047FF]'>
              <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                Comprehensive Assessments
              </h1>
              <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                Our team of seasoned security professionals conducts in-depth penetration tests, simulating real-world attack scenarios. We cover all layers of your infrastructure, from web applications and mobile apps to networks and cloud environments.
              </p>
            </div>

            <div className='border-t-4 p-8 flex flex-col gap-4 border-[#46A7DE]'>
              <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                Tailored Approach
              </h1>
              <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                We understand that every organization has unique security needs. Our penetration testing services are customized to meet your specific requirements, ensuring that all potential vulnerabilities are identified and addressed.
              </p>
            </div>

            <div className='border-t-4 p-8 flex flex-col gap-4 border-[#FF4C00]'>
              <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                Actionable Insights
              </h1>
              <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                Our detailed reports go beyond merely identifying vulnerabilities. We provide clear, actionable recommendations that help you strengthen your security posture and protect your critical assets.
              </p>
            </div>

            <div className='border-t-4 p-8 flex flex-col gap-4 border-[#AD00FF]'>
              <h1 className="text-[20px] font-bold leading-[140%] tracking-[0.4px]">
                Regulatory Compliance
              </h1>
              <p className='text-base font-normal leading-[140%] tracking-[0.32px] text-[#364152]'>
                Whether you need to meet specific regulatory requirements or simply want to bolster your security defenses, our penetration testing services can help you achieve and maintain compliance with industry standards.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='relative bg-[#2E449C] pb-72'>
        <div className='flex flex-col items-center gap-12 py-10 max-sm:px-4 md:py-20'>
          <div className="max-w-3xl flex flex-col">
            <div className="mb-6 text-center text-[#46A7DE] md:text-[50px] text-[24px] font-bold leading-[130%] tracking-[0.48px] md:tracking-[1px]">
              2. Vulnerability Assessement
            </div>
            <div className="mb-6 md:mb-10 text-center text-white md:text-[22px] text-lg font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px]">
              A Vulnerability Assessment is your first line of defense in identifying potential weaknesses in your systems before attackers do. Our team of security experts offers comprehensive assessments to safeguard your infrastructure, data, and applications.
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-6 max-w-3xl max-sm:px-4">
            <div
              className="p-8 gap-4 flex flex-col border border-[#46A7DE] rounded"
            >
              <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
                Network Vulnerability Assessment
              </div>
              <div className="text-sm md:text-base text-white leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
                We begin by understanding your business goals, IT environment, and security needs.
              </div>
            </div>

            <div
              className="p-8 gap-4 flex flex-col border border-[#46A7DE] rounded"
            >
              <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
                Web Application Assessment
              </div>
              <div className="text-sm md:text-base text-white leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
                Secure your online presence by detecting flaws in your web applications.
              </div>
            </div>

            <div
              className="p-8 gap-4 flex flex-col border border-[#46A7DE] rounded"
            >
              <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
                Internal and External Penetration Testing
              </div>
              <div className="text-sm md:text-base text-white leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
                Simulate real-world attacks to test the resilience of your defenses.
              </div>
            </div>

            <div
              className="p-8 gap-4 flex flex-col border border-[#46A7DE] rounded"
            >
              <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
                Cloud Security Assessment
              </div>
              <div className="text-sm md:text-base text-white leading-[140%] tracking-[0.28px] md:tracking-[0.32px]">
                Assess the security of your cloud environment and ensure compliance with industry standards.
              </div>
            </div>
          </div>
        </div>
        <Image alt='left' src={"/assets/dot-left.png"} width={0} height={0} layout='responsive' className=' absolute bottom-72 left-0 max-w-60 md:max-w-sm opacity-30 hidden md:block' />
        <Image alt='right' src={"/assets/dot-right.png"} width={0} height={0} layout='responsive' className=' absolute bottom-72 right-0 max-w-60 md:max-w-sm opacity-30 hidden md:block' />
      </div>
    </div>
  );
}

export default OurServices;
