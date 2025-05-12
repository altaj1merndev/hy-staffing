/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import CategoryForm from "./CategoryForm";
import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { TModalProps } from "@/src/components/shears/commonTypes/modaltypes";
import { useCreateCategoryMutation } from "@/app/redux/services/categories.services";
import Modal from "@/src/components/shears/Modal";
import { useAppSelector } from "@/app/redux/hoook";

const AddCategoryModal = ({ isOpen, onClose, onSuccess }: TModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [createCategory, {isLoading: createCategoryLoading}] = useCreateCategoryMutation();
  const {user} = useAppSelector(state=>state.auth)
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, buttonText, logo } = data;
    const inputData = {
      title,
      buttonText,
      logo: logo,
      agentId:user?.id
    };
    console.log({inputData})
    try {
      setIsLoading(true);
      // Simulate an API call
      await createCategory(inputData).unwrap();
      toast.success("Subcategory added successfully!");
      onSuccess(); 
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources[0]?.message || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
      onClose(); // Close the modal after submission
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CategoryForm
        onSubmit={onSubmit}
        title={"Add category"}
        isLoading={createCategoryLoading}
      />
    </Modal>
  );
};

export default AddCategoryModal;
