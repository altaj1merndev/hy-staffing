
import { MdOutlineContentPasteSearch } from "react-icons/md";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { MdWorkHistory } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";

const steps = [
    {
      title: "Register Online",
      icone :<FaUserShield />,
      description: "Create an account and fill out your profile to get started.",
    },
    {
      title: "Search and Apply",
      icone:<MdOutlineContentPasteSearch />,
      description:
        "Browse our extensive job listings and apply for positions that match your qualifications.",
    },
    {
      title: "Get Matched",
      icone:<BsFillClipboardDataFill />,
      description:
        "Our team reviews your application and connects you with potential employers.",
    },
    {
      title: "Start Working",
      icone:<MdWorkHistory />,
      description:
        "Begin your new job with confidence, knowing you've found the right fit.",
    },
  ];
  
  export default function HowItWorks() {
    return (
      <section className="bg-white py-12 px-6 md:px-16 pt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-center  font-bold text-[#141414] mb-3">
            How It Works
          </h2>
          <p className="text-center text-[#5A5C5F] pt-5 text-base text-[16px] leading-relaxed mb-4">
            Seamlessly Navigate the Path to Your Next Job with Our Simple Process.
          </p>
  
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#F9F9FF] hover:bg-[#F1F1FF]  rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center gap-2">
                     <p className="text-blue-600 bg-[#ECECFE] rounded-lg p-4 hover:bg-[#3E4DFE] hover:text-white text-2xl font-bold mb-2">{step.icone}</p>
                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                </div>
        
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  