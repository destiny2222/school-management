"use client";

import PortalLayout from "@/components/dashboard/PortalLayout";
import {
  StatCard,
  CardWrapper,
  MiniCalendar,
  AgendaWidget,
  MessagesWidget,
  DonutChart,
  BarChart,
  LineChart,
} from "@/components/dashboard/DashboardWidgets";

// SVG Icons for stat cards
const StudentsStatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
);
const TeachersStatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const StaffsStatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
);
const AwardsStatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
);

export default function AdminDashboard() {
  const agendaItems = [
    { time: "08:00 am", title: "Homeroom & Announcement", subtitle: "All Grade", color: "#0B286D" },
    { time: "10:00 am", title: "Math Review & Practice", subtitle: "Grade 3–5", color: "#10B981" },
    { time: "10:30 am", title: "Science Experiment & Discussion", subtitle: "Grade 6–8", color: "#8B5CF6" },
  ];

  const messages = [
    { name: "Dr. Lila Ramirez", time: "9:00 AM", message: "Please ensure the monthly attendance report is accurate before the April 30th deadline.", unread: true },
    { name: "Ms. Heather Morris", time: "10:15 AM", message: "Don't forget the staff training on digital tools scheduled for May 5th at 3 PM in the..." },
    { name: "Mr. Carl Jenkins", time: "2:00 PM", message: "Budget review meeting for the next fiscal year is on April 28th at 10 AM." },
    { name: "Officer Dan Brooks", time: "2:30 PM", message: "Review the updated security protocols effective May 1st." },
  ];

  const attendanceBarData = [
    { label: "Mon", value: 92, color: "#0B286D" },
    { label: "Tue", value: 88, color: "#0B286D" },
    { label: "Wed", value: 75, color: "#0B286D" },
    { label: "Thu", value: 95, color: "#F59E0B" },
    { label: "Fri", value: 82, color: "#0B286D" },
  ];

  const earningsData = [45000, 52000, 48000, 61000, 55000, 59000, 63000, 67000, 72000, 69000, 75000, 80000];
  const earningsLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <PortalLayout role="admin" userName="Linda Adora" pageTitle="Dashboard">
      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <StatCard
          label="Students"
          value={124684}
          change="15%"
          changeType="up"
          icon={<StudentsStatIcon />}
          accentColor="#0B286D"
        />
        <StatCard
          label="Teachers"
          value={12379}
          change="3%"
          changeType="down"
          icon={<TeachersStatIcon />}
          accentColor="#10B981"
        />
        <StatCard
          label="Staffs"
          value={29300}
          change="3%"
          changeType="up"
          icon={<StaffsStatIcon />}
          accentColor="#F59E0B"
        />
        <StatCard
          label="Awards"
          value={95800}
          change="7%"
          changeType="up"
          icon={<AwardsStatIcon />}
          accentColor="#8B5CF6"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-5 mb-6">
        {/* Students Demographics */}
        <CardWrapper title="Students" headerRight={<span className="text-xs text-[#94A3B8]">•••</span>}>
          <div className="flex justify-center py-2.5">
            <DonutChart percentage={47} label="Boys (47%)" color="#0B286D" size={150} />
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <div className="text-center">
              <div className="text-xl font-bold text-[#0F172A]">45,414</div>
              <div className="text-xs text-[#94A3B8]">Boys (47%)</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-[#0F172A]">40,270</div>
              <div className="text-xs text-[#94A3B8]">Girls (53%)</div>
            </div>
          </div>
        </CardWrapper>

        {/* Attendance Chart */}
        <CardWrapper
          title="Attendance"
          headerRight={
            <div className="flex gap-2">
              <select className="text-xs px-2 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
                <option>Weekly</option>
                <option>Monthly</option>
              </select>
              <select className="text-xs px-2 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
                <option>Grade 3</option>
                <option>Grade 4</option>
                <option>Grade 5</option>
              </select>
            </div>
          }
        >
          <div className="flex gap-4 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="text-xs text-[#64748B]">Total Present</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0B286D]" />
              <span className="text-xs text-[#64748B]">Total Absent</span>
            </div>
          </div>
          <BarChart data={attendanceBarData} height={200} />
        </CardWrapper>

        {/* Calendar + Agenda */}
        <div className="flex flex-col gap-5">
          <MiniCalendar />
          <AgendaWidget items={agendaItems} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-5">
        {/* Earnings Chart */}
        <CardWrapper
          title="Earnings"
          headerRight={
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#0B286D]" />
                <span className="text-xs text-[#64748B]">Income</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                <span className="text-xs text-[#64748B]">Expense</span>
              </div>
            </div>
          }
        >
          <LineChart data={earningsData} labels={earningsLabels} color="#0B286D" height={200} />
        </CardWrapper>

        {/* Quick Stats */}
        <CardWrapper title="Olympic Students">
          <div className="text-center py-5">
            <div className="text-4xl font-bold text-[#0F172A]">24,680</div>
            <div className="text-xs text-[#94A3B8] mb-2">Olympic Students</div>
            <span className="text-xs font-semibold text-[#10B981] bg-[#ECFDF5] px-3 py-1 rounded-full">
              ↑ 15%
            </span>
          </div>
        </CardWrapper>

        {/* Messages */}
        <MessagesWidget messages={messages} />
      </div>
    </PortalLayout>
  );
}
