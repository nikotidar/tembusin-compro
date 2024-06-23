import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function ContactForm() {
  return (
    <div className="bg-banner-header lg:px-[164px] lg:py-20 px-4 py-6 flex flex-col lg:flex-row gap-6 lg:gap-10 lg:items-center">
      <div className="flex flex-col lg:gap-[70px] gap-6">
        <div className="flex flex-col gap-5 lg:gap-10">
          <div className="md:text-[64px] text-[36px] font-extrabold leading-[140%] md:leading-[140%] text-white tracking-[0.72px] md:tracking-[1.28px]">
            Website and Mobile App Security
          </div>
          <div className="text-white lg:text-[#C0C7E1] text-lg text-[22px] font-normal leading-[140%] tracking-[0.36px] md:tracking-[0.44px]">
            Tell us how we can help and our dedicated team will be in touch
            soon.
          </div>
        </div>

        <div className="lg:flex lg:flex-col lg:gap-10 hidden">
          <div className="flex flex-col gap-4">
            <div className="text-[#46A7DE] text-[24px] font-semibold leading-[140%] tracking-[0.48px]">
              Address
            </div>
            <div className="text-white text-[22px] font-normal leading-[140%] tracking-[0.48px]">
              Jl. Outer Ring Road Rukan Sedayu Square Blok G No. 8 Cengkareng
              Barat, Jakarta Barat 11730
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[#46A7DE] text-[24px] font-semibold leading-[140%] tracking-[0.48px]">
              Phone Number
            </div>
            <div className="text-white text-[22px] font-normal leading-[140%] tracking-[0.48px]">
              (021) 4757383
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="text-[#46A7DE] text-[24px] font-semibold leading-[140%] tracking-[0.48px]">
              Email Address
            </div>
            <div className="text-white text-[22px] font-normal leading-[140%] tracking-[0.48px]">
              info@tembusin.id
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 py-8 lg:px-10 lg:py-[56px] bg-white flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Fullname <span className="text-[#D30D0D]">*</span>
          </div>
          <Input />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Company Name <span className="text-[#D30D0D]">*</span>
          </div>
          <Input />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Email Address <span className="text-[#D30D0D]">*</span>
          </div>
          <Input />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Message (Optional)
          </div>
          <Textarea />
        </div>

        <Button className="w-full px-4 py-3 bg-[#2E449C] rounded-[2px] uppercase text-base font-bold leading-[130%] tracking-[0.64px] lg:my-[56px] my-6 text-white">
          SEND
        </Button>

        <div className="text-[#4B5565] text-sm font-normal leading-[140%] tracking-[0.28px]">
          By submitting this form you aggree the{" "}
          <span className="underline">Website Terms of Use</span>, consent to be
          contacted by Tembusin.id and acknowledge the{" "}
          <span className="underline">Privacy Notice</span>
        </div>
      </div>

      <div className="flex flex-col lg:gap-10 lg:hidden">
        <div className="flex flex-col gap-4">
          <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
            Address
          </div>
          <div className="text-white text-lg font-normal leading-[140%] tracking-[0.36px]">
            Jl. Outer Ring Road Rukan Sedayu Square Blok G No. 8 Cengkareng
            Barat, Jakarta Barat 11730
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
            Phone Number
          </div>
          <div className="text-white text-lg font-normal leading-[140%] tracking-[0.36px]">
            (021) 4757383
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="text-[#46A7DE] text-xl font-bold leading-[140%] tracking-[0.4px]">
            Email Address
          </div>
          <div className="text-white text-lg font-normal leading-[140%] tracking-[0.36px]">
            info@tembusin.id
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
