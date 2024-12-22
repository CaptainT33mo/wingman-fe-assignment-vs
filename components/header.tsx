import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PieChartIcon from "./icons/pie=chart";
import SalesIcon from "./icons/sales";
import ChatIconFilled from "./icons/chat-filled";


export default function Header () {
    const pathname = usePathname();

    const tabs = [
        { name: "Summary", icon: <PieChartIcon /> , path: "/" },
        { name: "Sales", icon: <SalesIcon />, path: "/sales" },
        { name: "Chats", icon: <ChatIconFilled />, path: "/chats" },
    ];

    console.log('%ccomponents/header.tsx:19 pathname', 'color: #007acc;', pathname);

    return (
        <div className="flex gap-3 bg-white py-5 px-5 md:px-10 border-b border-b-[#DCDFE4]">
            {tabs.map((tab) => (
                <Link
                    href={tab.path}
                    key={tab.name}
                    className={`flex gap-2 items-center px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-lg font-medium transition-all ${pathname === tab.path
                        ? "bg-[#CCFBEF] text-[#212636]"
                        : "text-[#8A94A6]"
                        }`}
                >
                    {tab.icon}
                    {tab.name}
                </Link>
            ))}
        </div>
    );
};