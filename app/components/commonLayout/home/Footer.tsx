import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-10 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">HY<span className="text-gray-200">Staffing</span></h2>
          <div className="flex items-center gap-2 mb-2">
            <FaPhoneAlt />
            <span>(239) 247-6240</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>info@hystaffing.com</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <p className="font-semibold">Explore</p>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Our Company</a></li>
            <li><a href="#" className="hover:underline">Job Seekers</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-2">
          <p className="font-semibold">Legal</p>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Mandatory Notices</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-gray-200">
        © 2024 HYStaffing. All rights reserved.
      </div>
    </footer>
  );
}
