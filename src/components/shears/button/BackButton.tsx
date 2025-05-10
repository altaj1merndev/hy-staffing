import Link from "next/link";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return (
    <Link
      href={"/"}
      className="flex items-center w-10 h-10 cursor-pointer text-blue-500 font-semibold p-2 border rounded-full transition duration-200 ease-in-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </Link>
  );
};

export default BackButton;
