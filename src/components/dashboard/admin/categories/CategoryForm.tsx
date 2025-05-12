/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import SubmitButton from "@/src/components/shears/button/SubmitButton";
import InputField from "@/src/components/shears/from/InputField";
import Label from "@/src/components/shears/from/Label";
import SingleFileUpload from "@/src/components/shears/SingleFileUpload";
import useHandleSingleFileUpload from "@/src/shears/hooks/usehandleSingleFileUpload";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
interface CategoryFormProps {
  onSubmit: (data: any) => void;
  title: string;
  defaultValues?: {
    title?: string;
    buttonText?: string;
    logo?: string;
  };
  isLoading?: boolean;
}
const CategoryForm = ({
  onSubmit,
  title,
  isLoading,
  defaultValues = {},

}: CategoryFormProps) => {

  const [logoUrl, setLogoUrl] = React.useState("");
  const {handleUpload, fileUploadLoading} = useHandleSingleFileUpload()
  // Using the defaultValues to pre-fill the form fields
  const { handleSubmit, control, setValue, } = useForm<{
    title: string;
    buttonText: string;
    logo: string;
  }>({
    defaultValues: {
      title: defaultValues.title || "",
      buttonText: defaultValues.buttonText || "",
      logo: defaultValues.logo || "",
    },
  });

  // Update form fields when defaultValues change
  useEffect(() => {
    if (defaultValues) {
      setValue("title", defaultValues.title || "");
      setValue("buttonText", defaultValues.buttonText || "");
      setValue("logo", defaultValues.logo || "");

    }
  }, [defaultValues,]);

  // Update form logo when logoUrl changes
  useEffect(() => {
    setValue("logo", logoUrl);

  }, [logoUrl]);
  return (
    <div className="flex flex-col gap-8 w-80 md:w-1/2 lg:w-[500px] p-5 ">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full space-y-5">
          {/* Render form fields dynamically */}
          {[
            {
              name: "title",
              label: "Category Name",
              placeholder: "Enter Job Category Name",
              type: "text",
            },
            {
              name: "buttonText",
              label: "Button Text",
              placeholder: "Enter Button Text",
              type: "text" as const,
            },
          ].map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={
                field.type as
                  | "text"
                  | "textarea"
                  | "email"
                  | "password"
                  | "select"
                  | "date"
                  | undefined
              }
              placeholder={field.placeholder}
              control={control}
            />
          ))}
        </div>


        {/* Image upload */}
        <div className="mt-2">
  
             <Label label="Logo" />
              <Controller
                name="logo"
                control={control}
                render={() => (
                  <SingleFileUpload
                    onChange={(file: File | undefined) =>
                      file && handleUpload("logo", [file], setLogoUrl)
                    } // Update form value with selected file
                    imageUrl={logoUrl || defaultValues?.logo
                    }
                    setImageUrl={setLogoUrl}
                    fileUploadLoading={fileUploadLoading}
                  />
                )}
              />

        </div>

        {/* Submit Button */}

        <SubmitButton isLoading={fileUploadLoading || isLoading} />
      </form>
    </div>
  );
};

export default CategoryForm;
