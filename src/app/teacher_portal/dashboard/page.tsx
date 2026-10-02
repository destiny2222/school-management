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

export default function TeacherDashboard() {
  const performanceBarData = [
    { label: "Mon", value: 75, color: "#0B286D" },
    { label: "Tue", value: 60, color: "#1D4ED8" },
    { label: "Wed", value: 40, color: "#3B82F6" },
    { label: "Thu", value: 80, color: "#F59E0B" },
    { label: "Fri", value: 65, color: "#10B981" },
  ];

  const teachingActivityData = [85, 92, 78, 95, 88, 105, 110, 98, 115, 120, 108, 125];
  const teachingActivityLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const agendaItems = [
    { time: "8:00 AM", title: "Review Recent Test Results", subtitle: "History 11 AP World History", color: "#0B286D" },
    { time: "10:00 AM", title: "Lecture on Cold War", subtitle: "History 12", color: "#10B981" },
    { time: "4:30 PM", title: "Prepare for Tomorrow's Debate", subtitle: "History 10A", color: "#F59E0B" },
  ];

  const messages = [
    { name: "Principal Adeyemi", time: "8:00 AM", message: "Please submit the mid-term grades by end of week. The deadline has been extended.", unread: true },
    { name: "Ms. Johnson", time: "9:30 AM", message: "Can we coordinate on the science fair project? My students would like to collaborate.", unread: true },
    { name: "Parent: Mrs. Davis", time: "11:00 AM", message: "I'd like to schedule a meeting to discuss my son's progress in your class." },
    { name: "IT Support", time: "2:00 PM", message: "Your smart board has been fixed. Please verify it's working properly." },
  ];

  const tasks = [
    { title: "Grade Student Essays", date: "Sept 24, 2026", done: false },
    { title: "Prepare Quiz for Grade 10", date: "Sept 25, 2026", done: false },
    { title: "Submit Attendance Report", date: "Sept 23, 2026", done: true },
    { title: "Parent-Teacher Conference Prep", date: "Sept 28, 2026", done: false },
    { title: "Update Lesson Plan", date: "Sept 22, 2026", done: true },
  ];

  return (
    <PortalLayout role="teacher" userName="Heather Morris" pageTitle="Dashboard">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0B286D] via-[#1D4ED8] to-[#3B82F6] rounded-2xl p-6 px-8 text-white mb-6 flex items-center justify-between relative overflow-hidden">
        <div className="card-accent-circle-1" />
        <div className="card-accent-circle-2" />

        <div className="max-w-[450px]">
          <h2 className="text-lg font-bold m-0 mb-2 leading-snug">
            Your teaching classes are increasing great about 30% than last year 🎉
          </h2>
          <div className="flex gap-4 mt-3">
            <span className="text-xs flex items-center gap-1 text-white/80">
              ✉️ heathermorris@mail.com
            </span>
            <span className="text-xs flex items-center gap-1 text-white/80">
              📞 +28 1234 5678
            </span>
          </div>
        </div>

        {/* Illustration placeholder */}
        <div className="w-28 h-24 rounded-2xl bg-white/10 flex items-center justify-center text-5xl shrink-0 shadow-inner">
          👩‍🏫
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <StatCard label="Total Classes" value={147} change="15%" changeType="up" accentColor="#0B286D" icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5" /></svg>
        } />
        <StatCard label="Total Students" value={3250} change="5%" changeType="up" accentColor="#10B981" icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /></svg>
        } />
        <StatCard label="Total Hours" value="104,687" change="10%" changeType="up" accentColor="#F59E0B" icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        } />
        <StatCard label="Total Income" value="₦1,682,500" change="23%" changeType="up" accentColor="#8B5CF6" icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V7m0 8v1" /></svg>
        } />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-5 mb-6">
        {/* Student Attendance */}
        <CardWrapper
          title="Student Attendance"
          headerRight={
            <div className="flex gap-1.5">
              <select className="text-xs px-2 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
                <option>10 April 2024</option>
              </select>
              <select className="text-xs px-2 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
                <option>Grade 3</option>
              </select>
            </div>
          }
        >
          <div className="flex justify-center py-2.5">
            <DonutChart percentage={80} label="Present" color="#10B981" size={160} />
          </div>
          <div className="flex justify-center gap-6 mt-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
              <span className="text-xs text-[#64748B]">Present</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
              <span className="text-xs text-[#64748B]">Absent</span>
            </div>
          </div>
        </CardWrapper>

        {/* Student Performance */}
        <CardWrapper
          title="Student Performance"
          headerRight={
            <select className="text-xs px-2.5 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
              <option>Weekly</option>
              <option>Monthly</option>
            </select>
          }
        >
          <BarChart data={performanceBarData} height={200} />
          <div className="flex justify-center gap-4 mt-2">
            {["Class 10", "Class 11", "Class 12"].map((cls, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${["bg-[#0B286D]", "bg-[#F59E0B]", "bg-[#10B981]"][idx]}`} />
                <span className="text-[11px] text-[#64748B]">{cls}</span>
              </div>
            ))}
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
        {/* Tasks */}
        <CardWrapper
          title="Tasks"
          headerRight={
            <button className="text-xs font-semibold text-white bg-[#10B981] border-none rounded-lg px-3.5 py-1.5 cursor-pointer flex items-center gap-1 hover:bg-emerald-600 transition-colors">
              + Add Task
            </button>
          }
        >
          {/* Search */}
          <div className="flex items-center gap-2 bg-[#F1F5F9] rounded-lg px-3 py-2 mb-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search Task"
              className="bg-transparent border-none outline-none text-xs text-[#334155] w-full placeholder:text-[#94A3B8]"
            />
          </div>

          <div className="flex flex-col gap-1">
            {tasks.map((task, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 py-2.5 px-2 ${
                  idx < tasks.length - 1 ? "border-b border-[#F1F5F9]" : ""
                }`}
              >
                <input
                  type="checkbox"
                  defaultChecked={task.done}
                  className="w-4 h-4 accent-[#0B286D] cursor-pointer"
                />
                <div className="flex-1">
                  <div
                    className={`text-xs font-medium ${
                      task.done ? "text-[#94A3B8] line-through" : "text-[#0F172A]"
                    }`}
                  >
                    {task.title}
                  </div>
                  <div className="text-[11px] text-[#94A3B8]">{task.date}</div>
                </div>
                <div className="flex gap-1">
                  <button className="bg-transparent border-none cursor-pointer text-[#94A3B8] p-1 hover:text-[#0B286D]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                  </button>
                  <button className="bg-transparent border-none cursor-pointer text-[#EF4444] p-1 hover:text-red-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </CardWrapper>

        {/* Teaching Activity */}
        <CardWrapper
          title="Teaching Activity"
          headerRight={
            <select className="text-xs px-2.5 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
              <option>Monthly</option>
              <option>Weekly</option>
            </select>
          }
        >
          <LineChart data={teachingActivityData} labels={teachingActivityLabels} color="#F59E0B" height={220} />
        </CardWrapper>

        {/* Messages */}
        <MessagesWidget messages={messages} />
      </div>
    </PortalLayout>
  );
}
