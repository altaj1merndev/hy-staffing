/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import upload from "../../../public/accets/upload.svg";
import uploading from "../../../public/accets/uploading.gif";
interface FileUploadProps {
  onChange: (file: File | undefined) => void; // Function to update files in the form
  setImageUrl: (url: string) => void; // Function to update files in the form
  imageUrl?: string; // Optional existing file for preview
  fileUploadLoading?: boolean;
  name?: string;
}

const SingleFileUpload: React.FC<FileUploadProps> = ({
  onChange,
  imageUrl,
  setImageUrl,
  fileUploadLoading,
  name,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target?.files ? event.target.files[0] : undefined;
    onChange(files);
  };

  const removeFile = () => {
    setImageUrl("");
  };
  return (
    <div className="">
      <input
        disabled={fileUploadLoading}
        type="file"
        accept=".png,.jpg,.mp4"
        onChange={handleFileChange}
        className="hidden"
        id="file-upload"
      />

      <label
        htmlFor="file-upload"
        className="cursor-pointer flex flex-col items-center bg-white p-4 border-2 border-[#dee4e8] rounded-lg border-dashed "
      >
        {/* Upload Icon */}
        <div className=" flex space-x-2 items-center text-sm h-32">
          <div className="">
            {fileUploadLoading && name == "logo" ? (
              <Image src={uploading} alt="Upload" width={30} height={30} />
            ) : (
              <Image src={upload} alt="Upload" width={20} height={30} />
            )}
          </div>
          <div>
            <p className="text-gray-500">
              Drag and drop file or{" "}
              <span className="text-blue-500 font-semibold">Browse</span>
            </p>
            <p className="text-xs text-gray-400">Support file jpg, png</p>
          </div>
        </div>
      </label>

      {/* Preview section */}
      <div className="flex mt-4 space-x-4 overflow-x-auto">
        {imageUrl && (
          <div className="relative   h-24">
            <Image
              src={imageUrl}
              alt="Preview"
              width={120}
              height={70}
              className=" object-cover rounded-[10px] w-72 h-[90px]"
            />

            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-500 rounded-xl"></div>
            {/* Remove button */}
            <button
              onClick={() => removeFile()}
              type="button"
              className="absolute cursor-pointer top-0 right-0 bg-white text-black rounded-full w-5 h-5 flex items-center justify-center border border-gray-300 shadow-md"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleFileUpload;

// example

{
  /* <div className="mt-2">
<Controller
  name="file"
  control={control}
  render={({ field: { onChange, value } }) => (
    <SingleFileUpload
      onChange={(file: File | undefined) => onChange(file)} // Update form value with selected files
      existingFile={value} // Pass the existing value (optional)
    />
  )}
/>
</div> */
}
