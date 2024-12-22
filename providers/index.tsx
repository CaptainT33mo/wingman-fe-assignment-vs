"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import GlobalSidebar from "@/components/global-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import HomeIcon from "@/components/icons/sidebar/home";
import ChatIcon from "@/components/icons/sidebar/chat";
import GroupsIcon from "@/components/icons/sidebar/groups";
import Header from "@/components/header";



const sidebarItems = [
  { title: "Dashboard", href: "/", icon: <HomeIcon width={25} height={25} /> },
  {
    title: "Chat",
    href: "/chat",
    icon: <ChatIcon width={25} height={25} />
  },
  { title: "Accounts", href: "/accounts", icon: <GroupsIcon width={25} height={25} />},
];

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <SidebarProvider>
        <GlobalSidebar items={sidebarItems} />
        <main className="flex-1 bg-white md:bg-background">
          <Header />
          {children}</main>
      </SidebarProvider>
    </QueryClientProvider>
  );
}