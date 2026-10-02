"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export type UserRole = "superadmin" | "admin" | "teacher" | "student" | "parent";

interface SidebarProps {
  role: UserRole;
  userName: string;
  userAvatar?: string;
}

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
  children?: { label: string; href: string }[];
}

// SVG icon components
const DashboardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const TeachersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const StudentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
);
const AttendanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
);
const FinanceIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
const NoticeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
);
const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
);
const LibraryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
);
const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
);
const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
);
const SettingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const LogoutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
);
const SchoolIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const GradesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
);
const ChildIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

function getNavItems(role: UserRole, basePath: string): { main: NavItem[]; other: NavItem[] } {
  const commonOther: NavItem[] = [
    { label: "Profile", href: `${basePath}/profile`, icon: <ProfileIcon /> },
    { label: "Setting", href: `${basePath}/settings`, icon: <SettingIcon /> },
  ];

  switch (role) {
    case "superadmin":
      return {
        main: [
          { label: "Dashboard", href: basePath, icon: <DashboardIcon /> },
          { label: "Schools", href: `${basePath}/schools`, icon: <SchoolIcon /> },
          { label: "Teachers", href: `${basePath}/teachers`, icon: <TeachersIcon /> },
          { label: "Students", href: `${basePath}/students`, icon: <StudentsIcon /> },
          { label: "Attendance", href: `${basePath}/attendance`, icon: <AttendanceIcon /> },
          {
            label: "Finance",
            href: `${basePath}/finance`,
            icon: <FinanceIcon />,
            children: [
              { label: "Fees Collection", href: `${basePath}/finance/fees` },
              { label: "School Expenses", href: `${basePath}/finance/expenses` },
            ],
          },
          { label: "Notice", href: `${basePath}/notice`, icon: <NoticeIcon /> },
          { label: "Calendar", href: `${basePath}/calendar`, icon: <CalendarIcon /> },
          { label: "Library", href: `${basePath}/library`, icon: <LibraryIcon /> },
          { label: "Message", href: `${basePath}/messages`, icon: <MessageIcon /> },
        ],
        other: commonOther,
      };
    case "admin":
      return {
        main: [
          { label: "Dashboard", href: basePath, icon: <DashboardIcon /> },
          { label: "Teachers", href: `${basePath}/teachers`, icon: <TeachersIcon /> },
          { label: "Students", href: `${basePath}/students`, icon: <StudentsIcon /> },
          { label: "Attendance", href: `${basePath}/attendance`, icon: <AttendanceIcon /> },
          {
            label: "Finance",
            href: `${basePath}/finance`,
            icon: <FinanceIcon />,
            children: [
              { label: "Fees Collection", href: `${basePath}/finance/fees` },
              { label: "School Expenses", href: `${basePath}/finance/expenses` },
            ],
          },
          { label: "Notice", href: `${basePath}/notice`, icon: <NoticeIcon /> },
          { label: "Calendar", href: `${basePath}/calendar`, icon: <CalendarIcon /> },
          { label: "Library", href: `${basePath}/library`, icon: <LibraryIcon /> },
          { label: "Message", href: `${basePath}/messages`, icon: <MessageIcon /> },
        ],
        other: commonOther,
      };
    case "teacher":
      return {
        main: [
          { label: "Dashboard", href: basePath, icon: <DashboardIcon /> },
          { label: "My Classes", href: `${basePath}/classes`, icon: <StudentsIcon /> },
          { label: "Students", href: `${basePath}/students`, icon: <StudentsIcon /> },
          { label: "Attendance", href: `${basePath}/attendance`, icon: <AttendanceIcon /> },
          { label: "Grades", href: `${basePath}/grades`, icon: <GradesIcon /> },
          { label: "Notice", href: `${basePath}/notice`, icon: <NoticeIcon /> },
          { label: "Calendar", href: `${basePath}/calendar`, icon: <CalendarIcon /> },
          { label: "Library", href: `${basePath}/library`, icon: <LibraryIcon /> },
          { label: "Message", href: `${basePath}/messages`, icon: <MessageIcon /> },
        ],
        other: commonOther,
      };
    case "student":
      return {
        main: [
          { label: "Dashboard", href: basePath, icon: <DashboardIcon /> },
          { label: "My Grades", href: `${basePath}/grades`, icon: <GradesIcon /> },
          { label: "Attendance", href: `${basePath}/attendance`, icon: <AttendanceIcon /> },
          { label: "Notice", href: `${basePath}/notice`, icon: <NoticeIcon /> },
          { label: "Calendar", href: `${basePath}/calendar`, icon: <CalendarIcon /> },
          { label: "Library", href: `${basePath}/library`, icon: <LibraryIcon /> },
          { label: "Message", href: `${basePath}/messages`, icon: <MessageIcon /> },
        ],
        other: commonOther,
      };
    case "parent":
      return {
        main: [
          { label: "Dashboard", href: basePath, icon: <DashboardIcon /> },
          { label: "My Children", href: `${basePath}/children`, icon: <ChildIcon /> },
          { label: "Attendance", href: `${basePath}/attendance`, icon: <AttendanceIcon /> },
          { label: "Grades", href: `${basePath}/grades`, icon: <GradesIcon /> },
          {
            label: "Finance",
            href: `${basePath}/finance`,
            icon: <FinanceIcon />,
            children: [
              { label: "Fees & Payments", href: `${basePath}/finance/fees` },
            ],
          },
          { label: "Notice", href: `${basePath}/notice`, icon: <NoticeIcon /> },
          { label: "Calendar", href: `${basePath}/calendar`, icon: <CalendarIcon /> },
          { label: "Message", href: `${basePath}/messages`, icon: <MessageIcon /> },
        ],
        other: commonOther,
      };
  }
}

const roleLabels: Record<UserRole, string> = {
  superadmin: "Super Admin",
  admin: "Admin",
  teacher: "Teacher",
  student: "Student",
  parent: "Parent",
};

const roleBasePaths: Record<UserRole, string> = {
  superadmin: "/superadmin_portal",
  admin: "/admin_portal",
  teacher: "/teacher_portal",
  student: "/student_portal",
  parent: "/parents_portal",
};

export default function Sidebar({ role, userName, userAvatar }: SidebarProps) {
  const pathname = usePathname();
  const basePath = roleBasePaths[role];
  const { main, other } = getNavItems(role, basePath);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  const toggleExpand = (label: string) => {
    setExpandedItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const isActive = (href: string) => {
    if (href === basePath) return pathname === basePath;
    return pathname.startsWith(href);
  };

  return (
    <aside
      className={`sidebar-container fixed top-0 left-0 z-40 min-h-screen bg-white border-r border-[#E8ECF3] flex flex-col transition-[width] duration-300 ease-in-out overflow-y-auto overflow-x-hidden ${
        collapsed ? "w-[72px]" : "w-[260px]"
      }`}
    >
      {/* Logo */}
      <div
        className={`flex items-center gap-3 border-b border-[#E8ECF3] ${
          collapsed ? "px-3 py-5" : "px-6 py-5"
        }`}
      >
        <Image
          src="/logo.png"
          alt="Bethel Montessori"
          width={36}
          height={36}
          className="rounded-lg shrink-0"
        />
        {!collapsed && (
          <span className="font-bold text-base text-[#0B286D] whitespace-nowrap tracking-tight">
            SchoolHub
          </span>
        )} 
      </div>

      {/* Search */}
      {!collapsed && (
        <div className="px-6 pt-4 pb-2">
          <div className="flex items-center gap-2 bg-[#F1F5F9] rounded-xl px-3 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-sm text-[#334155] w-full placeholder:text-[#94A3B8]"
            />
          </div>
        </div>
      )}

      {/* Menu Section */}
      <div className={`flex-1 ${collapsed ? "px-2 py-4" : "px-4 py-4"}`}>
        {!collapsed && (
          <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider px-2 pb-2">
            Menu
          </div>
        )}

        <nav className="flex flex-col gap-0.5">
          {main.map((item) => {
            const active = isActive(item.href);
            const hasChildren = item.children && item.children.length > 0;
            const isExpanded = expandedItems.includes(item.label);

            return (
              <div key={item.label}>
                {hasChildren ? (
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className={`flex items-center w-full border-none cursor-pointer rounded-xl font-medium text-sm transition-all duration-200 ${
                      collapsed ? "justify-center py-2.5 px-0 gap-0" : "justify-start py-2.5 px-3 gap-3"
                    } ${
                      active ? "bg-[#EBF2FE] text-[#0B286D] font-semibold" : "bg-transparent text-[#64748B] hover:bg-[#F1F5F9]"
                    }`}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.label}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </>
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center rounded-xl text-sm no-underline transition-all duration-200 ${
                      collapsed ? "justify-center py-2.5 px-0 gap-0" : "justify-start py-2.5 px-3 gap-3"
                    } ${
                      active ? "bg-[#EBF2FE] text-[#0B286D] font-semibold" : "bg-transparent text-[#64748B] hover:bg-[#F1F5F9] font-medium"
                    }`}
                  >
                    <span className="shrink-0">{item.icon}</span>
                    {!collapsed && <span>{item.label}</span>}
                  </Link>
                )}

                {/* Submenu */}
                {hasChildren && isExpanded && !collapsed && (
                  <div className="ml-8 flex flex-col gap-0.5 border-l-2 border-[#E2E8F0] pl-3 mt-0.5">
                    {item.children!.map((child) => {
                      const childActive = isActive(child.href);
                      return (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`p-2 rounded-lg text-xs no-underline transition-all duration-200 ${
                            childActive ? "text-[#0B286D] font-semibold bg-blue-50/50" : "text-[#64748B] hover:text-[#0B286D] font-normal"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Other Section */}
        {!collapsed && (
          <div className="text-[11px] font-semibold text-[#94A3B8] uppercase tracking-wider px-2 pt-5 pb-2">
            Other
          </div>
        )}

        <nav className="flex flex-col gap-0.5">
          {other.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center rounded-xl text-sm no-underline transition-all duration-200 ${
                  collapsed ? "justify-center py-2.5 px-0 gap-0" : "justify-start py-2.5 px-3 gap-3"
                } ${
                  active ? "bg-[#EBF2FE] text-[#0B286D] font-semibold" : "bg-transparent text-[#64748B] hover:bg-[#F1F5F9] font-medium"
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}

          {/* Logout */}
          <Link
            href="/"
            className={`flex items-center rounded-xl text-sm no-underline text-red-500 font-medium transition-all duration-200 hover:bg-red-50 ${
              collapsed ? "justify-center py-2.5 px-0 gap-0" : "justify-start py-2.5 px-3 gap-3"
            }`}
          >
            <span className="shrink-0"><LogoutIcon /></span>
            {!collapsed && <span>Log out</span>}
          </Link>
        </nav>
      </div>

      {/* User Info Footer */}
      {!collapsed && (
        <div className="p-4 px-6 border-t border-[#E8ECF3] flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#0B286D] to-[#1D4ED8] flex items-center justify-center text-white text-sm font-bold shrink-0">
            {userName.charAt(0).toUpperCase()}
          </div>
          <div className="overflow-hidden">
            <div className="text-xs font-semibold text-[#1E293B] whitespace-nowrap overflow-hidden text-ellipsis">
              {userName}
            </div>
            <div className="text-[11px] text-[#94A3B8]">{roleLabels[role]}</div>
          </div>
        </div>
      )}
    </aside>
  );
}
