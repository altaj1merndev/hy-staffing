import { useUploadImagesMutation } from "@/app/redux/services/upload-images.service";

export default function useHandleSingleFileUpload() {
  const [uploadImages, { isLoading: fileUploadLoading }] = useUploadImagesMutation();

  const handleUpload = async (id: string, files: File[], setUrl: (url: string) => void) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("file", file);
    });

    try {
      const response = await uploadImages({ formData, name: id }).unwrap();
      return setUrl(response?.data[0]);
    } catch (error) {
      console.error("Upload failed", error);
    }
  };

  return { handleUpload, fileUploadLoading };
}
