/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useForgotPasswordMutation } from "@/app/redux/services/auth.services";

import React from "react";
import { useForm } from "react-hook-form";
import sign_up from "../../../assets/signup.jpg";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackButton from "@/src/components/shears/button/BackButton";
import InputField from "@/src/components/shears/from/InputField";
import SubmitButton from "@/src/components/shears/button/SubmitButton";
const ForgotPasswordPage = () => {
  const { handleSubmit, control, reset } = useForm();
  const router = useRouter();
  const [forgotPassword] = useForgotPasswordMutation();
  const onSubmit = async (data: any) => {
    console.log(data.email);
    const res = await forgotPassword({
      email: data.email,
    });
    console.log({ res });
    if (res?.data?.success) {
      reset();
      toast.success(res?.data?.message);
      router.push("/");
    } else {
      toast.error("Email does not exist ");
    }
  };
  return (
    <div className="relative h-screen flex justify-center">
      {/* Image Section */}
      <div className="h-[100%]  w-[60%] z-10 relative md:block hidden overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(92deg, #002B22EB 16%, #002B2230 171%)",
          }}
        ></div>
        <Image
          className="h-full w-full object-cover"
          src={sign_up}
          width={1000}
          height={1000}
          alt="signUp"
          priority
          quality={100}
        />
      </div>

      {/* Form Section */}
      <div className="bg-[#F4F4F4] h-full shadow-2xl md:w-[40%] w-full z-10">
        <div className="p-2 bg-white">
          {" "}
          <BackButton />
        </div>
        <div className="md:p-10 p-2 bg-white border-b  border-gray-200 ">
          <div className="pt-2 flex flex-col text-center items-center justify-center">
        
            <p className="md:text-lg font-semibold text-xs mt-3 mb-4 md:max-w-96 max-w-72 mx-auto text-neutral-700 font-poppins">
              Forgot your Password?
            </p>
          </div>
        </div>
        <form
          action=""
          className="space-y-3 mt-5 w-[50%] mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <InputField
            key={"email"}
            label={"Youer Email"}
            name={"email"}
            type={"email"}
            placeholder={"Enter Your Email"}
            control={control}
          />
          <SubmitButton buttonText={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
