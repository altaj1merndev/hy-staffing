import Image from "next/image";
import qute from "../../../../public/accets/cod.png"

const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Logistics Coordinator",
      quote:
        "With Allegiance Staffing, I found a temp-to-hire position that turned into a full-time career.",
    },
    {
      name: "Leslie Alexander",
      role: "Logistics Coordinator",
      quote:
        "ProLogistix helped me find a job in logistics that I love. The process was quick and easy!",
    },
    {
      name: "Leslie Alexander",
      role: "Logistics Coordinator",
      quote:
        "With Allegiance Staffing, I found a temp-to-hire position that turned into a full-time career.",
    },
  ];
  
  export default function SuccessStories() {
    return (
      <section className="bg-gray-50 py-12 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-center  font-bold text-[#141414] mb-3">
            Success Stories from Our Candidates
          </h2>
          <p className="text-center text-[#5A5C5F] pt-5 text-base text-[16px] leading-relaxed mb-4">
            Real People, Real Results: How Our Services Have Transformed Careers.
          </p>
  
          <div className="flex gap-2">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#DFE1E6] hover:bg-[#6777FE] text-[#5A5C5F] hover:text-white  rounded-xl p-6 shadow-md hover:shadow-lg transition relative text-start"
              >
                
                   <Image alt="cod" src={qute} className="absolute right-3"/>
                <h3 className="text-lg font-semibold ">
                  {t.name}
                </h3>
                <p className=" text-xs">{t.role}</p>
                <p className="text-sm mb-4 italic mt-2">{t.quote} </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  