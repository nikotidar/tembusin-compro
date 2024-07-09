"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function Form() {
  const [body, setBody] = useState("");

  const handleBody = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBody(e.target.value);
  };

  const handleSubmit = () => {
    console.log(body);
    const urlEncoded = encodeURI(body);
    window.location.href = `mailto:info@tembusin.id?body=${urlEncoded}`;
  };

  return (
    <form
      // action="mailto:info@tembusin.id"
      encType="text/plain"
      method="POST"
      onSubmit={handleSubmit}
    >
      <div className="px-5 py-8 lg:px-10 lg:py-[56px] bg-white flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Fullname <span className="text-[#D30D0D]">*</span>
          </div>
          <Input name="name" type="text" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Company Name <span className="text-[#D30D0D]">*</span>
          </div>
          <Input name="company" type="text" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Email Address <span className="text-[#D30D0D]">*</span>
          </div>
          <Input name="email" type="email" />
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Message (Optional)
          </div>
          <Textarea name="body" onChange={handleBody} />
        </div>

        <Button
          className="w-full px-4 py-3 bg-[#2E449C] rounded-[2px] uppercase text-base font-bold leading-[130%] tracking-[0.64px] lg:my-[56px] my-6 text-white"
          type="submit"
        >
          SEND
        </Button>

        <div className="text-[#4B5565] text-sm font-normal leading-[140%] tracking-[0.28px]">
          By submitting this form you aggree the{" "}
          <span className="underline">Website Terms of Use</span>, consent to be
          contacted by Tembusin.id and acknowledge the{" "}
          <span className="underline">Privacy Notice</span>
        </div>
      </div>
    </form>
  );
}

export default Form;
