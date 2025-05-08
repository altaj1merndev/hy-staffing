import { BsTruckFlatbed } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa6";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { RiGalleryView2 } from "react-icons/ri";


export default function JobOpportunities() {
    const jobs = [
      { title: "Logistics and Warehousing" ,
        icone: <BsTruckFlatbed />
      },
      { title: "Software Engineer",
        icone:<FaLaptopCode />
      },
      { title: "Administrative Support" ,
        icone:<MdOutlineSupportAgent />
      },
      { title: "Skilled Trades",
        icone:<GiSkills />
      },
      { title: "View All",
        icone:<RiGalleryView2 />
      },
    ];
  
    return (
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center  font-bold text-[#141414] mb-6">
            Explore Job Opportunities Across Various Industries
          </h2>
          <p className="text-center text-[#5A5C5F] pt-5 text-base text-[16px] leading-relaxed mb-4">
            Unlock Your Potential with Jobs Tailored to Your Skills and Experience. Whether you're looking to grow in logistics, manufacturing, administrative support, or skilled trades, our comprehensive job listings offer a wide range of opportunities to help you achieve your career goals.
          </p>
  
 
  
        </div>
        {/* */}
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 mb-8 max-w-5xl mx-auto mt-20">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className=" hover:text-white text-gray-800 border space-y-2 border-[#D1D5FF] rounded-[20px] shadow-sm p-6 flex flex-col items-center justify-between w-44 text-center hover:bg-[#6777FE] bg-[#F8F8FF]"
              >
                <p className="text-4xl text-center  p-3 rounded-full bg-[#ECECFE] hover:bg-white text-blue-500">{job.icone}</p>
                <h3 className="text-xl font-semibold  ">
                  {job.title}
                </h3>
                <button className="mt-auto text-[#5A5C5F] hover:text-[#EBECF0] underline text-sm font-medium">
                  View Job
                </button>
              </div>
            ))}
          </div>
      </section>
    );
  }
  