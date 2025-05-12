import Link from "next/link";

interface AddNewProps {
  title?: string;
  path?: string;
}

function AddNewLink({ title, path }: AddNewProps) {
  return (
    <Link href={path ? path : "/"}>
      <button
        type="button"
        className="flex  cursor-pointer items-center gap-x-2 font-poppins font-normal text-sm bg-[#017BFE] text-white px-4 py-1.5 rounded whitespace-nowrap justify-center"
      >
        <span>{title ? title : "Add New"}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="size-5"
        >
          <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
        </svg>
      </button>
    </Link>
  );
}

export default AddNewLink;
