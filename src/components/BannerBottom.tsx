import { Button } from "@/components/ui/button";

function BannerBottom() {
  return (
    <div className="lg:p-[80px] p-4">
      <div
        className="hidden md:block md:items-start md:p-[80px]"
        style={{
          backgroundImage: "url('/assets/background-imagebottom.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="md:text-[50px] text-[24px] font-bold leading-[140%] tracking-[0.48px] md:tracking-[1px] md:mb-6 mb-4 text-white">
          <div>We take care of Security,</div>
          <div>You can focus on your Business.</div>
        </div>

        <div className="md:text-[22px] text-base tracking-[0.32px] font-normal leading-[140%] md:tracking-[0.44px] md:max-w-[628px] mb-5 md:mb-10 text-white">
          Rasakan perbedaan antara rasa aman dan keamanan yang sebenarnya
        </div>

        <Button className="uppercase px-4 py-3 rounded-[2px] bg-[#2E449C] text-white font-bold leading-[130%] tracking-[0.64px]">
          CONTACT US NOW
        </Button>
      </div>

      <div
        className="md:hidden flex flex-col items-center px-4 py-[48px]"
        style={{
          background: "linear-gradient(313deg, #46A7DE 8.7%, #2E449C 116.88%)",
        }}
      >
        <div className="md:text-[50px] text-[24px] font-bold leading-[140%] tracking-[0.48px] md:tracking-[1px] md:mb-6 mb-4 text-white text-center">
          <div>We take care of Security,</div>
          <div>You can focus on your</div>
          <div>Business.</div>
        </div>

        <div className="md:text-[22px] text-base tracking-[0.32px] font-normal leading-[140%] md:tracking-[0.44px] md:max-w-[628px] mb-5 md:mb-10 text-white text-center">
          Rasakan perbedaan antara rasa aman dan keamanan yang sebenarnya
        </div>

        <Button className="uppercase px-4 py-3 rounded-[2px] bg-[#2E449C] text-white font-bold leading-[130%] tracking-[0.64px]">
          CONTACT US NOW
        </Button>
      </div>
    </div>
  );
}

export default BannerBottom;
