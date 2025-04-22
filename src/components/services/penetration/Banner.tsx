function Banner() {
  return (
    <div className="bg-banner-header h-[500px] md:h-[812px] lg:h-[700px] bg-cover bg-no-repeat md:px-[164px] md:py-[120px] px-4 py-6 flex flex-col items-center md:items-start justify-start gap-6 text-center md:text-left">
      <div className="w-full lg:max-w-[calc(100%-32rem)] text-white md:text-[50px] text-[36px] font-extrabold leading-[130%] md:tracking-[1px] tracking-[0.72px]">
        Safeguard Your Digital Assets with Our Penetration Testing Expertise
      </div>
      <div className="w-full md:max-w-[calc(100%-32rem)] text-white lg:text-[#C0C7E1] md:text-[22px] text-lg font-normal leading-[140%] md:tracking-[0.44px] tracking-[0.36px]">
        Our penetration testing services are designed to identify and mitigate vulnerabilities before they can be exploited by malicious actors.
      </div>
    </div>
  );
}

export default Banner;
