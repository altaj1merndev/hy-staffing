/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";

import { FieldValues, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useGetCategoryQuery, useUpdateCategoryMutation } from "@/app/redux/services/categories.services";
import Modal from "@/src/components/shears/Modal";

interface ModalProps {
  isOpen: boolean;
  categorySlug: string;
  onClose: () => void;
  onSuccess: () => void;
  selectedIds: string[];
  setSelectedIds: any;
}

const UpdateCategoryModal = ({
  isOpen,
  onClose,
  onSuccess,
  categorySlug,
  selectedIds,
  setSelectedIds,
}: ModalProps) => {
  const [defaultValues, setDefaultValues] = useState<{
    title?: string;
    buttonText?: string;
    logo?: string;
  }>({});
  const { data, isLoading: isCategoryLoading } = useGetCategoryQuery({
    categorySlug,
  });
  console.log({data})
  const [updateCategory] = useUpdateCategoryMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const { title, buttonText, logo } = data;
    const inputData = {
      title,
      buttonText,
      logo: logo,
    };
    try {
      await updateCategory({
        slug: categorySlug, // Assuming `slug` is in `defaultValues`
        updatedCategoryData: inputData,
      }).unwrap();
      toast.success("Subcategory Update successfully!");
      onSuccess(); // Call the onSuccess function passed from the parent component
    } catch (error: any) {
      toast.error(
        error?.data?.errorSources[0]?.message || "Something went wrong. Please try again."
      );
    } finally {
      //   setIsLoading(false);
      onClose(); // Close the modal after submission
    }
  };
  useEffect(() => {
    setDefaultValues({
      title: data?.data?.title,
      buttonText: data?.data?.buttonText,
      logo: data?.data?.logo,
    });
  }, [isCategoryLoading, data?.data]);
  if (isCategoryLoading) {
    return <p>Loading...!</p>;
  }
console.log({defaultValues})
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CategoryForm
        onSubmit={onSubmit}
        title={"Update category"}
        oneSelectedIds={(ids: string[]) => {
          setSelectedIds([...ids]);
        }}
        selectedIds={selectedIds}
        buttonText="Update"
        defaultValues={defaultValues}
        isUpdate={true}
      />
    </Modal>
  );
};

export default UpdateCategoryModal;
