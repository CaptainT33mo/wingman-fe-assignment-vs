"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import WingmanLogo from "./icons/logo";

export default function GlobalSidebar ({
  items,
}: {
  items: {
    title: string;
    href: string;
    icon: React.ReactNode;
  }[];
}) {
  const pathname = usePathname();
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <>
      {/* Desktop Sidebar */}
      <Sidebar className="hidden md:flex">
        <SidebarHeader className="h-header justify-center items-center">
          <Link href="/" className="flex gap-2.5 items-center">
            <WingmanLogo className="text-primary" width={35} height={35} />
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  asChild
                  className={cn(
                    "h-[60px] justify-center p-0",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted hover:text-primary"
                  )}
                >
                  <div>
                    {pathname === item.href && (
                      <div className="w-[6px] absolute left-0 h-[60px] bg-primary rounded-tr-2.5 rounded-br-2.5" />
                    )}
                    <div className="w-full px-10 h-full">
                      <Link
                        href={item.href}
                        className="h-full w-full flex items-center gap-7"
                      >
                        {item.icon}
                        
                      </Link>
                    </div>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>

      {/* Mobile Sidebar */}
      <Sheet open={openMobile} onOpenChange={setOpenMobile}>
        <SheetContent side="left" className="p-0">
          <SheetTitle>
            <VisuallyHidden>Menu</VisuallyHidden>
          </SheetTitle>
          <ScrollArea className="h-full w-full">
            <div className="flex flex-col space-y-4 py-4">
              <div className="px-3 py-2">
                <Link href="/" className="w-full flex gap-2.5 items-center">
                  <WingmanLogo className="text-primary w-5" />
                </Link>
              </div>
              <div className="flex-1">
                <nav className="flex flex-col space-y-1">
                  {items.map((item) => (
                    <div
                      className={cn(
                        "h-10 justify-center p-0",
                        pathname === item.href
                          ? "text-primary"
                          : "text-muted hover:text-primary"
                      )}
                      key={item.href}
                    >
                      <div className="w-full px-5 h-full">
                        <Link
                          href={item.href}
                          className="h-full w-full flex items-center gap-3 [&>svg]:w-4"
                        >
                          {item.icon}
                          
                        </Link>
                      </div>
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  );
};