import React from "react";

// Define the interface for props
interface SubmitButtonProps {
  buttonText?: string;
  isLoading?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  buttonText = "Submit",
  isLoading = false,
}) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="w-full  bg-[#3E4DFE] text-white py-3 rounded-md font-semibold cursor-pointer border text-lg border-gray-300"
    >
      {isLoading ? `${buttonText}ing...` : `${buttonText}`}
    </button>
  );
};

export default SubmitButton;
