"use client";

import PortalLayout from "@/components/dashboard/PortalLayout";
import {
  StatCard,
  CardWrapper,
  MiniCalendar,
  AgendaWidget,
  MessagesWidget,
  DonutChart,
  LineChart,
  ProgressBar,
} from "@/components/dashboard/DashboardWidgets";

// Icons
const SchoolsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
);
const StudentsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
);
const TeachersIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
);
const RevenueIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);

export default function SuperAdminDashboard() {
  const revenueData = [120000, 145000, 135000, 168000, 152000, 189000, 210000, 195000, 228000, 240000, 235000, 260000];
  const revenueLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const agendaItems = [
    { time: "09:00 am", title: "Board of Directors Meeting", subtitle: "Conference Room A", color: "#D90429" },
    { time: "11:00 am", title: "School Inspection Review", subtitle: "All Campuses", color: "#0B286D" },
    { time: "02:00 pm", title: "Budget Approval Session", subtitle: "Finance Committee", color: "#10B981" },
    { time: "04:00 pm", title: "Staff Performance Review", subtitle: "HR Department", color: "#F59E0B" },
  ];

  const messages = [
    { name: "Principal Adeyemi", time: "8:00 AM", message: "The semester report cards have been prepared and await your review before distribution.", unread: true },
    { name: "Head of Finance", time: "9:30 AM", message: "Q3 financial statements are ready. Revenue is up 12% compared to last quarter.", unread: true },
    { name: "IT Director", time: "11:00 AM", message: "Server migration complete. All portal systems are running smoothly on the new infrastructure." },
    { name: "HR Manager", time: "1:00 PM", message: "5 new teacher applications received. Background checks pending for 3 candidates." },
  ];

  const schoolBranches = [
    { name: "Bethel Main Campus", students: 3420, teachers: 145, rating: 94 },
    { name: "Bethel North Branch", students: 1850, teachers: 82, rating: 91 },
    { name: "Bethel South Branch", students: 2100, teachers: 95, rating: 88 },
    { name: "Bethel East Annex", students: 980, teachers: 42, rating: 92 },
  ];

  return (
    <PortalLayout role="superadmin" userName="Admin Supreme" pageTitle="Super Admin Dashboard">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0B286D] via-[#1D4ED8] to-[#0B1B3D] rounded-2xl p-7 px-8 text-white mb-6 relative overflow-hidden">
        <div className="card-accent-circle-1" />
        <div className="card-accent-circle-2" />
        <h2 className="text-2xl font-bold m-0 mb-2">
          Welcome back, Administrator 👋
        </h2>
        <p className="text-sm text-white/80 m-0 max-w-[500px]">
          You have 12 pending approvals, 3 new school applications, and 5 staff reviews awaiting your attention today.
        </p>
        <div className="flex gap-3 mt-4">
          <button className="px-5 py-2 rounded-xl bg-[#F59E0B] text-[#0B1B3D] border-none font-semibold text-xs cursor-pointer hover:bg-amber-400 transition-colors">
            View Approvals
          </button>
          <button className="px-5 py-2 rounded-xl bg-white/15 text-white border border-white/20 font-semibold text-xs cursor-pointer hover:bg-white/25 transition-colors">
            Generate Reports
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        <StatCard label="Total Schools" value={4} change="1 new" changeType="up" icon={<SchoolsIcon />} accentColor="#0B286D" />
        <StatCard label="Total Students" value={8350} change="12%" changeType="up" icon={<StudentsIcon />} accentColor="#10B981" />
        <StatCard label="Total Teachers" value={364} change="5%" changeType="up" icon={<TeachersIcon />} accentColor="#8B5CF6" />
        <StatCard label="Total Revenue" value="₦12.8M" change="18%" changeType="up" icon={<RevenueIcon />} accentColor="#F59E0B" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-6">
        {/* Revenue Chart */}
        <CardWrapper
          title="Revenue Overview"
          headerRight={
            <select className="text-xs px-3 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
              <option>This Year</option>
              <option>Last Year</option>
            </select>
          }
        >
          <LineChart data={revenueData} labels={revenueLabels} color="#0B286D" height={220} />
        </CardWrapper>

        {/* Calendar + Agenda */}
        <div className="flex flex-col gap-5">
          <MiniCalendar />
          <AgendaWidget items={agendaItems} />
        </div>
      </div>

      {/* Schools Table + Messages */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-6">
        {/* School Branches Table */}
        <CardWrapper title="School Branches Performance">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="border-b-2 border-[#E8ECF3]">
                  <th className="text-left p-2.5 px-3 text-[#64748B] font-semibold text-xs uppercase tracking-wider">School Name</th>
                  <th className="text-center p-2.5 px-3 text-[#64748B] font-semibold text-xs uppercase tracking-wider">Students</th>
                  <th className="text-center p-2.5 px-3 text-[#64748B] font-semibold text-xs uppercase tracking-wider">Teachers</th>
                  <th className="text-center p-2.5 px-3 text-[#64748B] font-semibold text-xs uppercase tracking-wider">Rating</th>
                </tr>
              </thead>
              <tbody>
                {schoolBranches.map((school, idx) => (
                  <tr key={idx} className="border-b border-[#F1F5F9] hover:bg-slate-50 transition-colors">
                    <td className="p-3 text-[#0F172A] font-medium">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-sm">
                          🏫
                        </div>
                        {school.name}
                      </div>
                    </td>
                    <td className="text-center text-[#334155]">{school.students.toLocaleString()}</td>
                    <td className="text-center text-[#334155]">{school.teachers}</td>
                    <td className="text-center">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                          school.rating >= 90 ? "text-[#10B981] bg-[#ECFDF5]" : "text-[#F59E0B] bg-[#FFFBEB]"
                        }`}
                      >
                        {school.rating}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardWrapper>

        <MessagesWidget messages={messages} />
      </div>

      {/* System Health */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <CardWrapper title="System Health">
          <ProgressBar label="Server Uptime" value={99} color="#10B981" />
          <ProgressBar label="Database Usage" value={67} color="#0B286D" />
          <ProgressBar label="Storage Used" value={45} color="#F59E0B" />
          <ProgressBar label="API Response" value={92} color="#8B5CF6" />
        </CardWrapper>

        <CardWrapper title="Enrollment Trend">
          <DonutChart percentage={78} label="Enrollment Rate" color="#0B286D" size={140} />
          <div className="flex justify-center gap-5 mt-3">
            <div className="text-center">
              <div className="text-lg font-bold text-[#0F172A]">6,513</div>
              <div className="text-[11px] text-[#94A3B8]">Enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-[#0F172A]">1,837</div>
              <div className="text-[11px] text-[#94A3B8]">Pending</div>
            </div>
          </div>
        </CardWrapper>

        <CardWrapper title="Quick Actions">
          <div className="flex flex-col gap-2">
            {[
              { icon: "🏫", label: "Add New School", bgClass: "bg-[#EBF2FE]" },
              { icon: "👨‍🏫", label: "Approve Teachers", bgClass: "bg-[#ECFDF5]" },
              { icon: "📊", label: "Generate Reports", bgClass: "bg-[#FFFBEB]" },
              { icon: "⚙️", label: "System Settings", bgClass: "bg-[#FEF2F2]" },
              { icon: "📢", label: "Send Announcement", bgClass: "bg-[#F5F3FF]" },
            ].map((action, idx) => (
              <button
                key={idx}
                className={`flex items-center gap-3 p-2.5 px-3.5 rounded-xl border-none cursor-pointer text-xs font-medium text-[#0F172A] text-left transition-all hover:opacity-90 ${action.bgClass}`}
              >
                <span className="text-lg">{action.icon}</span>
                {action.label}
              </button>
            ))}
          </div>
        </CardWrapper>
      </div>
    </PortalLayout>
  );
}
