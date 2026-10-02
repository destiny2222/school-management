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

export default function ParentDashboard() {
  const attendanceData = [88, 92, 95, 90, 87, 93, 96, 91, 89, 94, 97, 95];
  const attendanceLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const agendaItems = [
    { time: "09:00 am", title: "Parent-Teacher Conference", subtitle: "Class 10A - Room 204", color: "#0B286D" },
    { time: "11:00 am", title: "School Open Day", subtitle: "Main Hall", color: "#10B981" },
    { time: "02:30 pm", title: "Sports Day Rehearsal", subtitle: "School Field", color: "#F59E0B" },
  ];

  const messages = [
    { name: "Ms. Carter (Biology)", time: "9:00 AM", message: "Your child excelled in the recent biology quiz. Keep up the great work!", unread: true },
    { name: "Principal Adeyemi", time: "10:00 AM", message: "Reminder: School fees for next term are due by October 15th.", unread: true },
    { name: "Mr. Thompson (Math)", time: "1:00 PM", message: "David needs to submit his homework assignments from last week." },
    { name: "School Admin", time: "3:00 PM", message: "Annual sports day is scheduled for November 8th. Permission slip required." },
  ];

  const recentActivities = [
    { icon: "📝", title: "David scored 92% in Mathematics test", time: "Today", type: "achievement" as const },
    { icon: "🏆", title: "Sarah received Best Student Award", time: "Yesterday", type: "achievement" as const },
    { icon: "📚", title: "Homework submitted: English Essay", time: "2 days ago", type: "info" as const },
    { icon: "🔔", title: "Parent-Teacher meeting scheduled", time: "3 days ago", type: "reminder" as const },
    { icon: "💰", title: "Term fees payment confirmed", time: "1 week ago", type: "info" as const },
  ];

  const children = [
    {
      name: "David Williams",
      class: "Grade 10A",
      attendance: 95,
      gpa: 3.7,
      rank: 4,
      subjects: { Math: 92, Science: 88, English: 85, History: 78, Art: 95 },
    },
    {
      name: "Sarah Williams",
      class: "Grade 7B",
      attendance: 98,
      gpa: 3.9,
      rank: 2,
      subjects: { Math: 95, Science: 91, English: 93, History: 85, Art: 97 },
    },
  ];

  const feeData = [
    { label: "Tuition Fee", amount: "₦450,000", status: "Paid", statusClass: "text-[#10B981] bg-[#ECFDF5]" },
    { label: "Activities Fee", amount: "₦30,000", status: "Paid", statusClass: "text-[#10B981] bg-[#ECFDF5]" },
    { label: "Library Fee", amount: "₦15,000", status: "Pending", statusClass: "text-[#F59E0B] bg-[#FFFBEB]" },
    { label: "Transport Fee", amount: "₦80,000", status: "Overdue", statusClass: "text-[#EF4444] bg-[#FEF2F2]" },
  ];

  return (
    <PortalLayout role="parent" userName="Mrs. Williams" pageTitle="Parent Dashboard">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#0B286D] via-[#1D4ED8] to-[#3B82F6] rounded-2xl p-7 px-8 text-white mb-6 relative overflow-hidden">
        <div className="card-accent-circle-1" />
        <div className="card-accent-circle-2" />
        <h2 className="text-xl font-bold m-0 mb-1.5">
          Good afternoon, Mrs. Williams 👋
        </h2>
        <p className="text-sm text-white/80 m-0 max-w-[550px]">
          Stay connected with your children&apos;s academic journey. You have 2 children enrolled and 1 pending fee payment.
        </p>
        <div className="flex gap-4 mt-4 flex-wrap">
          {[
            { value: "2", label: "Children", bgClass: "bg-white/12" },
            { value: "96.5%", label: "Avg Attendance", bgClass: "bg-emerald-500/20" },
            { value: "3.8", label: "Avg GPA", bgClass: "bg-amber-500/20" },
            { value: "#3", label: "Avg Rank", bgClass: "bg-purple-500/20" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-2.5 px-5 text-center shadow-xs ${stat.bgClass}`}
            >
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-[11px] text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Children Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
        {children.map((child, idx) => (
          <CardWrapper key={idx} title={child.name} subtitle={child.class}>
            <div className="grid grid-cols-[auto_1fr] gap-5 items-center">
              {/* Child Avatar */}
              <div className="flex flex-col items-center gap-2">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold border-4 border-[#E8ECF3] shadow-xs ${
                    idx === 0
                      ? "bg-gradient-to-br from-[#0B286D] to-[#1D4ED8]"
                      : "bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA]"
                  }`}
                >
                  {child.name.charAt(0)}
                </div>
                <span className="text-xs font-semibold text-[#0B286D] bg-[#EBF2FE] px-2.5 py-0.5 rounded-full">
                  Rank #{child.rank}
                </span>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 bg-[#ECFDF5] rounded-xl">
                  <div className="text-xl font-bold text-[#10B981]">{child.attendance}%</div>
                  <div className="text-[11px] text-[#64748B]">Attendance</div>
                </div>
                <div className="text-center p-2 bg-[#EBF2FE] rounded-xl">
                  <div className="text-xl font-bold text-[#0B286D]">{child.gpa}</div>
                  <div className="text-[11px] text-[#64748B]">GPA</div>
                </div>
                <div className="text-center p-2 bg-[#FFFBEB] rounded-xl">
                  <div className="text-xl font-bold text-[#F59E0B]">{Object.keys(child.subjects).length}</div>
                  <div className="text-[11px] text-[#64748B]">Subjects</div>
                </div>
              </div>
            </div>

            {/* Subject Progress */}
            <div className="mt-4">
              {Object.entries(child.subjects).map(([subject, grade]) => (
                <ProgressBar
                  key={subject}
                  label={subject}
                  value={grade}
                  color={grade >= 90 ? "#10B981" : grade >= 80 ? "#0B286D" : "#F59E0B"}
                />
              ))}
            </div>
          </CardWrapper>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_320px] gap-5 mb-6">
        {/* Attendance Trend */}
        <CardWrapper
          title="Attendance Trend"
          headerRight={
            <select className="text-xs px-2.5 py-1 rounded-md border border-[#E2E8F0] text-[#64748B] bg-white outline-none">
              <option>David Williams</option>
              <option>Sarah Williams</option>
            </select>
          }
        >
          <LineChart data={attendanceData} labels={attendanceLabels} color="#10B981" height={200} />
        </CardWrapper>

        {/* Fee Summary */}
        <CardWrapper title="Fee Summary">
          <div className="mb-4">
            <DonutChart percentage={72} label="Fees Paid" color="#10B981" size={120} />
          </div>
          <div className="flex flex-col gap-1.5">
            {feeData.map((fee, idx) => (
              <div
                key={idx}
                className="flex justify-between items-center p-2 px-2.5 rounded-lg bg-[#F8FAFC]"
              >
                <span className="text-xs text-[#334155]">{fee.label}</span>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#0F172A]">{fee.amount}</span>
                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${fee.statusClass}`}>
                    {fee.status}
                  </span>
                </div>
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
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5">
        {/* Recent Activity */}
        <RecentActivity items={recentActivities} title="Children Activity" />

        {/* Messages */}
        <MessagesWidget messages={messages} />
      </div>
    </PortalLayout>
  );
}
