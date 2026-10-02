"use client";

import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import type { UserRole } from "@/components/dashboard/Sidebar";

interface PortalLayoutProps {
  role: UserRole;
  userName: string;
  pageTitle?: string;
  children: React.ReactNode;
}

export default function PortalLayout({ role, userName, pageTitle, children }: PortalLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#F6F8FC]">
      <Sidebar role={role} userName={userName} />
      <div className="flex-1 ml-[260px] flex flex-col transition-[margin-left] duration-300 ease-in-out">
        <DashboardHeader role={role} userName={userName} pageTitle={pageTitle} />
        <main className="flex-1 px-7 py-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
