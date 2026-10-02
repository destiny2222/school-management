"use client";

import { UserRole } from "./Sidebar";

interface DashboardHeaderProps {
  role: UserRole;
  userName: string;
  pageTitle?: string;
}

const roleLabels: Record<UserRole, string> = {
  superadmin: "Super Admin",
  admin: "Admin",
  teacher: "Teacher",
  student: "Student",
  parent: "Parent",
};

export default function DashboardHeader({ role, userName, pageTitle }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-end px-8 py-4 bg-transparent  top-0 z-30">
      <div className="flex items-center gap-4">
        {/* Dark mode toggle placeholder */}
        <button
          className="w-[38px] h-[38px] rounded-full bg-[#F1F5F9] border-none cursor-pointer flex items-center justify-center text-[#64748B] hover:bg-slate-200 transition-all duration-200"
          title="Toggle theme"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>

        {/* Notifications */}
        <button
          className="w-[38px] h-[38px] rounded-full bg-[#F1F5F9] border-none cursor-pointer flex items-center justify-center text-[#64748B] relative hover:bg-slate-200 transition-all duration-200"
          title="Notifications"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-[6px] right-[6px] w-2 h-2 rounded-full bg-[#EF4444] border-2 border-white" />
        </button>

        {/* User avatar & info */}
        <div className="flex items-center gap-2.5 pl-2">
          <div className="text-right">
            <div className="text-sm font-semibold text-[#0F172A]">{userName}</div>
            <div className="text-[11px] text-[#94A3B8]">{roleLabels[role]}</div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0B286D] to-[#1D4ED8] flex items-center justify-center text-white text-base font-bold border-2 border-[#E8ECF3]">
            {userName.charAt(0).toUpperCase()}
          </div>
        </div>
      </div>
    </header>
  );
}
