/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import sign_up from "../../../../public/accets/signup.jpg";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useLoginUserMutation } from "@/app/redux/services/auth.services";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/features/auth.slice";
import { getCurrentUser, setCookie } from "@/src/shears/utils/cookie";
import BackButton from "../button/BackButton";
import InputField from "../from/InputField";
import SubmitButton from "../button/SubmitButton";

const LoginForm = () => {
  const { handleSubmit, control, reset } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [loginUser, { isLoading, data: loginData, error }] =
    useLoginUserMutation();
  const router = useRouter();

  const dispatch = useDispatch();
  useEffect(() => {
    const handleLogin = async () => {
      if (loginData?.success === true) {
        // toast.success(loginData?.message);
        setCookie("hy-staffing", loginData?.data?.accessToken);
        const user = await getCurrentUser({
          accessToken: loginData?.data?.accessToken,
        });

        const { email, id, role } = user;
        dispatch(
          setUser({
            email,
            id,
            role,
          })
        );
        reset();
        router.replace(`/`);
      }

      if (loginData?.success === false) {
        toast.error(loginData?.message);
      }
    };

    handleLogin();
  }, [isLoading, loginData, error, dispatch]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsSubmitting(true);
    const { password, ...rest } = data;
    let toastId: string | undefined;
    try {
      const res = await loginUser({ ...rest, password }).unwrap();
      if (isLoading) {
        toastId = toast.loading("Login...!");
      }
      if (res.success) {
        if (toastId) toast.dismiss(toastId);
        toast.success("Login successful!");
        // router.push("/");
      } else {
        toast.error(res.message || "Login failed.");
      }
    } catch (err: any) {
        toast.error(
            err?.data?.errorSources[0]?.message || "Something went wrong. Please try again."
          );
    } finally {
      setIsSubmitting(false);
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
          <p className="text-gray-600 mb-4 text-end">
            Don't have account please?{" "}
            <Link className="text-blue-500 font-semibold " href="/auth/signin">
              Sign Up
            </Link>
          </p>
          <div className="pt-2 flex flex-col text-center items-center justify-center">
    
            <h1 className="md:text-3xl text-xl text-black font-semibold mt-4">
              Welcome to Hy Staffing
            </h1>
            <p className="md:text-sm text-xs mt-3 mb-4 md:max-w-96 max-w-72 mx-auto text-neutral-700 font-poppins">
              Sign up or login below to find your job.
            </p>
          </div>
        </div>
        <form
          action=""
          className="w-full md:p-10 p-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-4">
            <InputField
              key={"email"}
              label={"Email"}
              name={"email"}
              required={true}
              placeholder={"example@gmail.com"}
              control={control}
              rules={{
                required: "Email is required",
                minLength: {
                  value: 8,
                  message: "Email is required",
                },
              }}
            />
          </div>
          <div className="mt-4 space-y-4">
            <div className="relative">
              <InputField
                name="password"
                control={control}
                rules={{
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                }}
                label="Password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className={`${showPassword ? "text-gray-600 w-full" : "w-full"
                  }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute cursor-pointer right-3 top-[50px] transform -translate-y-1/2 ${showPassword ? "text-[#1677df]" : "text-gray-600"
                  }  `}
              >
                {showPassword ? (
                  <IoMdEye size={20} />
                ) : (
                  <IoMdEyeOff size={20} />
                )}
              </button>
            </div>
          </div>
          <div className="mt-6 text-center space-y-3">
            {/* <button type="submit" className="w-full  bg-[#3E4DFE] text-white py-3 rounded-md font-semibold cursor-pointer border text-lg border-gray-300">
              Sign Up
            </button> */}
            <SubmitButton isLoading={isLoading}  buttonText="Sign Up"/>
            <Link
              className="text-blue-500 font-semibold "
              href="/auth/forgot-password"
            >
              Forgotten password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
