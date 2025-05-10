/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  useRegisterUserMutation,
} from "@/app/redux/services/auth.services";

import { FaCheck } from "react-icons/fa6";

import BackButton from "../button/BackButton";
import InputField from "../from/InputField";
import SubmitButton from "../button/SubmitButton";

export default function SignUpFrom() {

    const { handleSubmit, control, watch } = useForm();
    const [success, setSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isConfirmPassword, setisConfirmPassword] = useState(false);
  
    const router = useRouter();
    const [registerUser, { isLoading }] = useRegisterUserMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
      const { password, confirmPassword, ...rest } = data;
  
      if (password !== confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      const inputData = {
        email: data?.email,
        password,
        name: data?.name,
        phone: data.phone,
        contact: {
          address: data.address,
       
        },
      };
      const formData = new FormData();
  
      formData.append("data", JSON.stringify(inputData));
      try {
        const res = await registerUser(formData).unwrap();
        if (isLoading) {
          toast.loading("Sign Up...!", { duration: 1000 });
        }
        if (res.success) {
          toast.success(res.message, { duration: 1000 });
          router.push("/auth/login")
        } else {
          toast.error(res.message || "Registration failed.");
        }
      } catch (err: any) {
        toast.error(
          err?.data?.errorSources[0]?.message || "Something went wrong. Please try again."
        );
      }
    };


  return (
    <div className=" w-full signinBg relative min-h-screen flex items-center justify-center p-4 bg-white rounded overflow-hidden shadow-lg">
    <div
      style={{
        background:
          "linear-gradient(92deg, rgb(26 4 193 / 92%) 16%, rgba(0, 43, 34, 0.19) 171%)",
      }}
      className="absolute inset-0  z-0" />

    {/* Right Panel (Form) */}
    <div className="relative z-10 w-full max-w-4xl bg-white rounded shadow-2xl ">
      <div
        className="p-6 md:p-10 border-b border-gray-200">
        <BackButton />
        {/* Form Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Register To Continue</h2>
          <p className="text-sm text-gray-500 mt-1">
            Please fill in your account information to proceed
          </p>
        </div>

      </div>
      {/* Form */}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6">
          <div className="grid md:grid-cols-2 gap-5">
            <InputField
              label="Your  Full Name"
              name="name"
              placeholder="Al Taj"
              control={control}
            />
            <InputField
              label="Email"
              name="email"
              required
              placeholder="example@gmail.com"
              control={control}
              rules={{ required: "Email is required" }}
            />
          </div>

        
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { name: "address", label: "Address", placeholder: "Home Address" },
              { name: "phone", label: "Phone", placeholder: "Phone Number" },
            ].map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                control={control}
                required={field.name === "phone"}
              />
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="relative">
              <InputField
                name="password"
                control={control}
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                required
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "At least 8 characters",
                  },
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-[42px] transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
              >
                {showPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>

            <div className="relative">
              <InputField
                name="confirmPassword"
                control={control}
                label="Confirm Password"
                type={isConfirmPassword ? "text" : "password"}
                placeholder="Re-enter password"
                required
                rules={{
                  required: "Confirmation required",
                  minLength: {
                    value: 8,
                    message: "At least 8 characters",
                  },
                }}
              />
              <button
                type="button"
                onClick={() => setisConfirmPassword(!isConfirmPassword)}
                className="absolute right-3 top-[42px] transform -translate-y-1/2 text-gray-600 hover:text-blue-600"
              >
                {isConfirmPassword ? <IoMdEye /> : <IoMdEyeOff />}
              </button>
            </div>
          </div>


          {/* <button
            type="submit"
            className="w-full bg-[#2C18C6] rounded cursor-pointer hover:bg-[#1c109f] text-white font-semibold py-2.5  transition"
          >
            Next
          </button> */}
          <SubmitButton isLoading={isLoading}/>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-blue-600 font-bold">
              Log In
            </Link>
          </p>
        </form>
    </div>

  </div>
  )
}
