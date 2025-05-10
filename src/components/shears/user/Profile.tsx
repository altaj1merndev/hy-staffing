"use client";
import { useRef, useState } from "react";
import { IoIosLogOut } from "react-icons/io";

import { useAppSelector } from "@/app/redux/hoook";
import Link from "next/link";
import { PiUserLight } from "react-icons/pi";
// import { logOut } from "@/app/redux/features/auth.slice";
import { CiUser } from "react-icons/ci";
import { MdDashboard } from "react-icons/md";
import { useLogOut } from "@/src/shears/utils/logOut";
import { calculatePosition } from "@/src/shears/utils/calculatePosition";
import AnimateButton from "../button/AnimateButton";

const Profile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const profileRef = useRef<HTMLDivElement | null>(null);
  const [showAbove, setShowAbove] = useState(false);

  interface User {
    role: string;
    email: string;
    id: string;
  }

  const { user } = useAppSelector((state) => state.auth) as {
    user: User | null;
  };
  const { logOut } = useLogOut();

  const toggleDropdown = () => {
    if (!isVisible) {
      setShowAbove(calculatePosition(profileRef));
    }
    setIsVisible(!isVisible);
  };

  const items = [
    {
      id: "my-profile",
      to: `/profile/edit`,
      name: "My Profile",
      icon: <CiUser size={17} />,
      role: "all",
    },
    {
      id: "dashboard",
      to: `/admin/dashboard`,
      name: "My Dashboard",
      icon: <MdDashboard size={17} />,
      role: "admin",
    },
  ];

  const filteredItems = items.filter(
    (item) => item.role === "all" || item.role === user?.role
  );

  return (
    <div className="relative" ref={profileRef}>
      {/* Profile Avatar (Clickable) */}
      <div
        className="bg-[#2C18C6] cursor-pointer rounded-full md:p-3 p-2 border hover:border-white text-white"
        onClick={toggleDropdown}
      >
        <PiUserLight strokeWidth={10} size={26} />
      </div>

      {/* Dropdown Menu */}
      <AnimateButton
        isOpen={isVisible}
        setIsOpen={setIsVisible}
        targetedElement={profileRef}
        showAbove={showAbove}
      >
        <div className="flex flex-col h-full space-y-3 pt-5 px-5 outline-none border-none pr-8 z-10 bg-white  rounded shadow w-44">
          {filteredItems.map((item) => (
            <Link
              href={item.to}
              key={item.id}
              passHref
              className="flex cursor-pointer items-center gap-x-3 font-poppins text-sm whitespace-nowrap  w-full hover:bg-base/5 rounded-md"
            >
              <span className="">{item.icon}</span>
              <span> {item.name}</span>
            </Link>
          ))}

          {/* Logout Button */}
          <button
            onClick={() => logOut()}
            className="flex cursor-pointer  items-center gap-x-3 font-poppins text-sm whitespace-nowrap  pb-3 w-full hover:bg-base/5 rounded-md"
          >
            <span>
              {" "}
              <IoIosLogOut size={17} />
            </span>
            <span>Logout</span>
          </button>
        </div>
      </AnimateButton>
    </div>
  );
};

export default Profile;
