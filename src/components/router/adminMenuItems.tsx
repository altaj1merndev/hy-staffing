import { TbHomeSignal } from "react-icons/tb";
import { PiUsersFourDuotone } from "react-icons/pi";
import { RiDropboxLine } from "react-icons/ri";
import { GiKnightBanner } from "react-icons/gi";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { HiMiniBars2 } from "react-icons/hi2";
import { FaDiagramSuccessor } from "react-icons/fa6";
import { SiPaloaltonetworks } from "react-icons/si";
import { IoGitNetworkSharp } from "react-icons/io5";
import { PiDiceFourLight } from "react-icons/pi";
// Define the menu items with correct `label` key
export const adMenuItems = [
  {
    label: "General",
    elements: [
      {
        label: "Dashboard",
        icon: <TbHomeSignal size={22} />,
        path: "/admin/dashboard",
        status: "unlocked",
      },
      {
        label: "Users",
        icon: <PiUsersFourDuotone size={22} />,
        path: "/admin/users",
        status: "unlocked",
      },
  
      {
        label: "Categorie's",
        icon: <MdOutlineCategory size={22} />,
        path: "/admin/categories",
        status: "unlocked",
      },
      {
        label: "How To Works",
        icon: <IoGitNetworkSharp size={22} />,
        path: "/admin/how-to-works",
        status: "unlocked",
      },
      {
        label: "Success Story",
        icon: <FaDiagramSuccessor size={22} />,
        path: "/admin/success-story",
        status: "unlocked",
      },
      {
        label: "Jobs",
        icon: <SiPaloaltonetworks size={22} />,
        path: "/admin/jobs",
        status: "locked",
      },
   
    ],
  },
  {
    label: "Settings",
    elements: [
      {
        label: "Navbar",
        icon: <HiMiniBars2 size={22} />,
        path: "/admin/settings/navbar",
      },
      {
        label: "Banner",
        icon: <GiKnightBanner size={22} />,
        path: "/admin/settings/banner",
      },
      {
        label: "Home",
        icon: <FaHome size={22} />,
        path: "/admin/settings/home",
      },
      {
        label: "Footer",
        icon: <PiDiceFourLight  size={22} />,
        path: "/admin/settings/footer",
      },
    ],
  },
];

export const routes = ["/", "/shop", "/cart", "/checkout"];
