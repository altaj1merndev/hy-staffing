import React from "react";

const Label = ({ label }: { label: string }) => {
  return (
    <label
      className="block mb- pb-2 text-xs md:text-sm xl:text-[15px] font-normal font-poppins text-black"
      htmlFor={label}
    >
      {label}
    </label>
  );
};

export default Label;
