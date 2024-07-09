"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required(),
    company: yup.string().required(),
    email: yup.string().email().required(),
    body: yup.string(),
  })
  .required();

type Inputs = {
  name: string;
  company: string;
  email: string;
  body?: string | undefined;
};

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    const urlEncoded = encodeURI(data.body !== undefined ? data.body : "");
    window.location.href = `mailto:info@tembusin.id?body=${urlEncoded}`;
  };

  return (
    <form
      // action="mailto:info@tembusin.id"
      encType="text/plain"
      method="POST"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="px-5 py-8 lg:px-10 lg:py-[56px] bg-white flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Fullname <span className="text-[#D30D0D]">*</span>
          </div>
          <Input {...register("name")} type="text" />
          <p>{errors.name?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Company Name <span className="text-[#D30D0D]">*</span>
          </div>
          <Input {...register("company")} type="text" />
          <p>{errors.company?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Email Address <span className="text-[#D30D0D]">*</span>
          </div>
          <Input {...register("email")} type="email" />
          <p>{errors.email?.message}</p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="text-[#121926] text-base font-normal leading-[140%] tracking-[0.32px]">
            Message (Optional)
          </div>
          <Textarea {...register("body")} />
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
