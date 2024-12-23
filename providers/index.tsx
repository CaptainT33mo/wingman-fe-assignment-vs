"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalSidebar from "@/components/global-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import Header from "@/components/header";
import { MdOutlineGroups2 } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { PiChatTeardropFill } from "react-icons/pi";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: <GoHomeFill size={25} />
  },
  {
    title: "Chat",
    href: "/chat",
    icon: <PiChatTeardropFill size={25} />
  },
  {
    title: "Accounts",
    href: "/accounts",
    icon: <MdOutlineGroups2 size={25} />
  }
];

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <GlobalSidebar items={sidebarItems} />
        <main className="flex-1 bg-white md:bg-background">
          <Header />
          {children}
        </main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}
