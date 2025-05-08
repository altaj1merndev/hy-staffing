import React from "react";
import worker_img from "../../../../public/accets/image 14.png"
import Image from "next/image";

const HeroSection = () => {
  return (
<div className="w-[90%] mx-auto mt-5 ">
<section className=" bg-gradient-to-r from-pink-50 via-white to-blue-50  flex flex-col md:flex-row  justify-between rounded-xl shadow">
      {/* Left side: Text and search bar */}
      <div className="w-[98%] py-12  px-6 md:px-32 lg:px-44 pt-28">
        <h1 className="text-[80px] md:text-4xl font-bold text-blue-600 leading-snug">
          Establishing Productive<br />Relationships
        </h1>
        <p className="text-gray-600 mt-4">
          My staffing precisely matches your skills with the best position that brings you
          success in the job you love.
        </p>

        <div className="mt-6 flex w-full max-w-md bg-white rounded-full shadow border border-white">
          <div className="flex items-center pl-4 pr-2 text-gray-400">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search Jobs"
            className="flex-grow px-2 py-2 rounded-l-full focus:outline-none "
          />
          <button className="bg-gradient-to-r from-blue-500 to-blue-400 text-white px-5 py-2 rounded-full">
            Apply Now
          </button>
        </div>
      </div>


      <div className=" md:mt-0 relative w-[35%] ">
  <div className="bg-blue-300 h-[350] rounded-lg relative overflow-hidden rounded-bl-full rounded-br-full rounded-tl-full">

  </div>
  <Image
      src={worker_img}
      alt="Worker"
      className="w-auto h-[350px] absolute bottom-0 right-32 object-center   z-10  top-4 "
    />
</div>
    </section>
</div>
  );
};

export default HeroSection;
