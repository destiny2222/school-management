"use client";

import PortalLayout from "@/components/dashboard/PortalLayout";
import {
  CardWrapper,
  MiniCalendar,
  AgendaWidget,
  MessagesWidget,
  DonutChart,
  LineChart,
  ProgressBar,
  RecentActivity,
} from "@/components/dashboard/DashboardWidgets";

export default function StudentDashboard() {
  const scoreData = [65, 72, 68, 78, 70, 82, 75];
  const scoreLabels = ["Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15", "Apr 16"];

  const agendaItems = [
    { time: "08:00 am", title: "Homeroom & Announcement", subtitle: "Mathematics", color: "#0B286D" },
    { time: "10:00 am", title: "Science Fair Preparation", subtitle: "Science", color: "#10B981" },
    { time: "02:00 pm", title: "History Documentary Viewing", subtitle: "History", color: "#8B5CF6" },
    { time: "03:30 pm", title: "Art Champion Announcement", subtitle: "Art", color: "#F59E0B" },
  ];

  const messages = [
    { name: "Ms. Carter", time: "4:15 PM", message: "Don't forget, tomorrow's lab report on titration is due by 9 AM. Make sure you...", unread: true },
    { name: "Jake", time: "12:30 PM", message: "Hey! Want to study together for the math quiz tomorrow? I'll be in the library." },
    { name: "Coach Williams", time: "11:00 AM", message: "Basketball tryouts this Friday at 3 PM. Don't forget your gear!" },
  ];

  const recentActivities = [
    { icon: "🔔", title: "Reminder: Attending Physics Group Meeting.", time: "1:00 PM", type: "reminder" as const },
    { icon: "🔔", title: "Reminder: Art Supplies Collection.", time: "10:30 AM", type: "reminder" as const },
    { icon: "🏆", title: "You got Award for 1st place student", time: "10:30 AM", type: "achievement" as const },
    { icon: "📘", title: "Biology with Ms. Carter Quiz Scheduled", time: "4:00 PM", type: "info" as const },
    { icon: "📝", title: "Received Feedback on English Essay.", time: "9:15 AM", type: "info" as const },
  ];

  const gradeSubjects = [
    { label: "Biology", value: 88, color: "#0B286D" },
    { label: "Chemistry", value: 82, color: "#1D4ED8" },
    { label: "Geography", value: 76, color: "#3B82F6" },
    { label: "History", value: 71, color: "#60A5FA" },
    { label: "Mathematics", value: 92, color: "#0B1B3D" },
    { label: "English", value: 85, color: "#2563EB" },
  ];

  return (
    <PortalLayout role="student" userName="Mia Williams" pageTitle="Dashboard">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#EBF2FE] to-[#E0E7FF] rounded-2xl p-6 px-7 flex flex-wrap lg:flex-nowrap items-center gap-6 mb-6 border border-[#C7D2FE] relative overflow-hidden">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#0B286D] to-[#1D4ED8] flex items-center justify-center text-white text-3xl font-bold shrink-0 border-4 border-white shadow-md">
          M
        </div>

        <div className="flex-1 min-w-[280px]">
          <div className="flex items-center gap-2.5 mb-1">
            <h2 className="text-xl font-bold text-[#0F172A] m-0">
              Welcome, Mia Williams
            </h2>
            <button className="w-7 h-7 rounded-lg bg-[#0B286D] border-none cursor-pointer flex items-center justify-center text-white hover:bg-blue-900 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-[#64748B] m-0 mb-2.5">
            Keep pushing forward! Your dedication to learning makes all the difference.
          </p>
          <div className="flex gap-5 flex-wrap">
            <span className="text-xs text-[#0B286D] font-medium flex items-center gap-1">
              🎓 Grade 12
            </span>
            <span className="text-xs text-[#64748B] flex items-center gap-1">
              📅 November, 25 2009
            </span>
            <span className="text-xs text-[#64748B] flex items-center gap-1">
              ✉️ miawilliams@mail.co
            </span>
            <span className="text-xs text-[#64748B] flex items-center gap-1">
              📞 +28 1234 5678
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="flex gap-3 shrink-0 flex-wrap sm:flex-nowrap">
          {[
            { value: "97%", label: "Attendance", icon: "📊", bgClass: "bg-[#ECFDF5]" },
            { value: "258+", label: "Task Completed", icon: "✅", bgClass: "bg-[#EBF2FE]" },
            { value: "64%", label: "Task in Progress", icon: "📋", bgClass: "bg-[#FFFBEB]" },
            { value: "245", label: "Reward Points", icon: "⭐", bgClass: "bg-[#F5F3FF]" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-3 px-4 text-center min-w-[90px] ${stat.bgClass}`}
            >
              <div className="text-lg mb-0.5">{stat.icon}</div>
              <div className="text-xl font-bold text-[#0F172A]">{stat.value}</div>
              <div className="text-[11px] text-[#64748B]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-5 mb-6">
        {/* Performance - GPA */}
        <CardWrapper title="Performance" headerRight={<span className="text-xs text-[#94A3B8]">•••</span>}>
          <div className="text-center py-4">
            <DonutChart percentage={85} label="of 4.0 max GPA" color="#0B286D" size={150} />
            <div className="text-4xl font-bold text-[#0F172A] -mt-2">3.4</div>
            <div className="text-xs text-[#94A3B8] mt-1">of 4.0 max GPA</div>
            <div className="text-xs text-[#64748B] bg-[#F1F5F9] px-3.5 py-1.5 rounded-lg inline-block mt-3 font-medium">
              1st Semester – 6th Semester
            </div>
          </div>
        </CardWrapper>

        {/* Score Activity Chart */}
        <CardWrapper
          title="Score Activity"
          headerRight={
            <select className="text-xs px-2.5 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          }
        >
          <LineChart data={scoreData} labels={scoreLabels} color="#F59E0B" height={200} />
          <div className="text-center mt-2">
            <span className="text-3xl font-bold text-[#0F172A]">70 %</span>
          </div>
        </CardWrapper>

        {/* Calendar + Agenda */}
        <div className="flex flex-col gap-5">
          <MiniCalendar />
          <AgendaWidget items={agendaItems} />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-5">
        {/* Recent Activity */}
        <RecentActivity items={recentActivities} />

        {/* Grade by Subject */}
        <CardWrapper
          title="Grade by Subject"
          headerRight={
            <div className="flex gap-1.5">
              <select className="text-xs px-2 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
                <option>Weekly</option>
              </select>
              <select className="text-xs px-2 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
                <option>Grade 3</option>
              </select>
            </div>
          }
        >
          {gradeSubjects.map((subject) => (
            <ProgressBar key={subject.label} label={subject.label} value={subject.value} color={subject.color} />
          ))}
        </CardWrapper>

        {/* Messages */}
        <MessagesWidget messages={messages} />
      </div>
    </PortalLayout>
  );
}
