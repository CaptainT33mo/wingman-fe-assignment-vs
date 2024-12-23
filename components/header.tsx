import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaTag } from "react-icons/fa6";
import { PiChatTeardropTextFill, PiChartPieSliceFill } from "react-icons/pi";

export default function Header() {
  const pathname = usePathname();

  const tabs = [
    { name: "Summary", icon: <PiChartPieSliceFill />, path: "/" },
    { name: "Sales", icon: <FaTag />, path: "/sales" },
    { name: "Chats", icon: <PiChatTeardropTextFill />, path: "/chat" }
  ];

  return (
    <div className="flex gap-3 bg-white py-5 px-5 md:px-10 border-b border-b-[#DCDFE4]">
      {tabs.map((tab) => (
        <Link
          href={tab.path}
          key={tab.name}
          className={`flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-lg font-medium transition-all ${
            pathname === tab.path
              ? "bg-mutedGreen text-brand"
              : "text-[#8A94A6]"
          }`}
        >
          {tab.icon}
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
