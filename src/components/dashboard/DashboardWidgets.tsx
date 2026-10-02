"use client";

import React from "react";

/* ─────────────────────── StatCard ─────────────────────── */
interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  changeType?: "up" | "down";
  icon?: React.ReactNode;
  accentColor?: string;
}

export function StatCard({
  label,
  value,
  change,
  changeType = "up",
  icon,
  accentColor = "#0B286D",
}: StatCardProps) {
  return (
    <div
      className="stat-card-hover bg-white rounded-2xl p-5 px-6 flex items-center gap-4 border border-[#E8ECF3] transition-all duration-300 cursor-default relative overflow-hidden"
    >
      {/* Decorative accent bar */}
      <div
        className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
        style={{ backgroundColor: accentColor }}
      />

      {icon && (
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
        >
          {icon}
        </div>
      )}

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#0F172A] tracking-tight">
            {typeof value === "number" ? value.toLocaleString() : value}
          </span>
          {change && (
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
                changeType === "up"
                  ? "text-[#10B981] bg-[#ECFDF5]"
                  : "text-[#EF4444] bg-[#FEF2F2]"
              }`}
            >
              {changeType === "up" ? "↑" : "↓"} {change}
            </span>
          )}
        </div>
        <div className="text-xs text-[#94A3B8] font-medium mt-0.5">{label}</div>
      </div>
    </div>
  );
}

/* ─────────────────────── CardWrapper ─────────────────────── */
interface CardWrapperProps {
  title?: string;
  subtitle?: string;
  headerRight?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function CardWrapper({ title, subtitle, headerRight, children, className = "", noPadding }: CardWrapperProps) {
  return (
    <div className={`bg-white rounded-2xl border border-[#E8ECF3] overflow-hidden ${className}`}>
      {(title || headerRight) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-[#F1F5F9]">
          <div>
            {title && (
              <h3 className="text-sm font-semibold text-[#0F172A] m-0">{title}</h3>
            )}
            {subtitle && (
              <p className="text-xs text-[#94A3B8] m-0 mt-0.5 font-normal">{subtitle}</p>
            )}
          </div>
          {headerRight && <div>{headerRight}</div>}
        </div>
      )}
      <div className={noPadding ? "" : "p-4 px-5"}>{children}</div>
    </div>
  );
}

/* ─────────────────────── Mini Calendar ─────────────────────── */
export function MiniCalendar() {
  const now = new Date();
  const month = now.toLocaleString("default", { month: "long" });
  const year = now.getFullYear();
  const today = now.getDate();
  const firstDay = new Date(year, now.getMonth(), 1).getDay();
  const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let i = 1; i <= daysInMonth; i++) cells.push(i);

  return (
    <CardWrapper title={`${month} ${year}`}>
      <div className="grid grid-cols-7 gap-0.5">
        {days.map((d) => (
          <div key={d} className="text-center text-[11px] font-semibold text-[#94A3B8] py-1">
            {d}
          </div>
        ))}
        {cells.map((day, idx) => (
          <div
            key={idx}
            className={`text-center text-xs py-1.5 rounded-lg transition-all duration-150 ${
              day === today
                ? "font-bold text-white bg-[#0B286D]"
                : day
                ? "font-normal text-[#334155] cursor-pointer hover:bg-slate-100"
                : "text-transparent cursor-default"
            }`}
          >
            {day || "·"}
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────── Agenda List ─────────────────────── */
interface AgendaItem {
  time: string;
  title: string;
  subtitle?: string;
  color: string;
}

export function AgendaWidget({ items }: { items: AgendaItem[] }) {
  return (
    <CardWrapper
      title="Agenda"
      headerRight={
        <button className="text-xs text-[#0B286D] bg-transparent border-none cursor-pointer font-medium hover:underline">
          View All
        </button>
      }
    >
      <div className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex gap-3 p-2.5 px-3.5 rounded-xl items-start border-l-4"
            style={{ backgroundColor: `${item.color}10`, borderColor: item.color }}
          >
            <div className="min-w-[56px]">
              <div className="text-xs font-semibold text-[#64748B]">{item.time}</div>
            </div>
            <div>
              <div className="text-xs font-semibold text-[#0F172A]">{item.title}</div>
              {item.subtitle && (
                <div className="text-[11px] text-[#94A3B8] mt-0.5">{item.subtitle}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────── Messages Widget ─────────────────────── */
interface MessageItem {
  name: string;
  time: string;
  message: string;
  avatar?: string;
  unread?: boolean;
}

export function MessagesWidget({ messages }: { messages: MessageItem[] }) {
  return (
    <CardWrapper
      title="Messages"
      headerRight={
        <button className="text-xs text-[#0B286D] bg-transparent border-none cursor-pointer font-medium hover:underline">
          View All
        </button>
      }
    >
      <div className="flex flex-col gap-1">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex gap-3 p-2.5 rounded-xl cursor-pointer transition-all duration-150 ${
              msg.unread ? "bg-[#EBF2FE]" : "bg-transparent hover:bg-slate-50"
            }`}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
              style={{ backgroundColor: `hsl(${(idx * 67) % 360}, 55%, 55%)` }}
            >
              {msg.name.charAt(0)}
            </div>
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between items-center">
                <span className="text-xs font-semibold text-[#0F172A]">{msg.name}</span>
                <span className="text-[11px] text-[#94A3B8]">{msg.time}</span>
              </div>
              <div className="text-xs text-[#64748B] mt-0.5 whitespace-nowrap overflow-hidden text-ellipsis">
                {msg.message}
              </div>
            </div>
            {msg.unread && (
              <div className="w-2 h-2 rounded-full bg-[#0B286D] self-center shrink-0" />
            )}
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}

/* ─────────────────────── SVG Mini Charts ─────────────────────── */

// Donut Chart
interface DonutChartProps {
  percentage: number;
  label: string;
  color?: string;
  size?: number;
}

export function DonutChart({ percentage, label, color = "#0B286D", size = 160 }: DonutChartProps) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E8ECF3"
          strokeWidth={12}
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={12}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          className="transition-[stroke-dashoffset] duration-1000 ease-out"
        />
        <text
          x={size / 2}
          y={size / 2 - 6}
          textAnchor="middle"
          className="text-2xl font-bold fill-[#0F172A]"
        >
          {percentage}%
        </text>
        <text
          x={size / 2}
          y={size / 2 + 16}
          textAnchor="middle"
          className="text-xs fill-[#94A3B8] font-medium"
        >
          {label}
        </text>
      </svg>
    </div>
  );
}

// Bar Chart (simple SVG)
interface BarChartProps {
  data: { label: string; value: number; color?: string }[];
  height?: number;
}

export function BarChart({ data, height = 180 }: BarChartProps) {
  const maxVal = Math.max(...data.map((d) => d.value));

  return (
    <div className="w-full">
      <svg width="100%" height={height} viewBox={`0 0 ${data.length * 60} ${height}`} preserveAspectRatio="none">
        {data.map((d, idx) => {
          const barH = (d.value / maxVal) * (height - 30);
          return (
            <g key={idx}>
              <rect
                x={idx * 60 + 10}
                y={height - barH - 20}
                width={35}
                height={barH}
                rx={6}
                fill={d.color || "#0B286D"}
                opacity={0.85}
                className="transition-all duration-500 ease-out"
              />
              <text
                x={idx * 60 + 27}
                y={height - 4}
                textAnchor="middle"
                className="text-[11px] fill-[#94A3B8] font-medium"
              >
                {d.label}
              </text>
              <text
                x={idx * 60 + 27}
                y={height - barH - 26}
                textAnchor="middle"
                className="text-[10px] fill-[#64748B] font-semibold"
              >
                {d.value}%
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Line Chart (simple SVG)
interface LineChartProps {
  data: number[];
  labels: string[];
  color?: string;
  height?: number;
}

export function LineChart({ data, labels, color = "#0B286D", height = 180 }: LineChartProps) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 30;
  const chartWidth = data.length * 70;
  const chartHeight = height - padding * 2;

  const points = data
    .map((val, idx) => {
      const x = padding + (idx / (data.length - 1)) * (chartWidth - padding * 2);
      const y = padding + (1 - (val - min) / range) * chartHeight;
      return `${x},${y}`;
    })
    .join(" ");

  // Create area path
  const firstX = padding;
  const lastX = padding + ((data.length - 1) / (data.length - 1)) * (chartWidth - padding * 2);
  const areaPath = `M ${points.split(" ")[0]} L ${points} L ${lastX},${height - padding} L ${firstX},${height - padding} Z`;

  return (
    <div className="w-full overflow-x-auto">
      <svg width={chartWidth} height={height} viewBox={`0 0 ${chartWidth} ${height}`}>
        <defs>
          <linearGradient id={`lineGrad-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity={0.15} />
            <stop offset="100%" stopColor={color} stopOpacity={0.01} />
          </linearGradient>
        </defs>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((frac, idx) => (
          <line
            key={idx}
            x1={padding}
            y1={padding + frac * chartHeight}
            x2={chartWidth - padding}
            y2={padding + frac * chartHeight}
            stroke="#F1F5F9"
            strokeWidth={1}
          />
        ))}
        {/* Area fill */}
        <path d={areaPath} fill={`url(#lineGrad-${color.replace("#", "")})`} />
        {/* Line */}
        <polyline points={points} fill="none" stroke={color} strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        {/* Dots */}
        {data.map((val, idx) => {
          const x = padding + (idx / (data.length - 1)) * (chartWidth - padding * 2);
          const y = padding + (1 - (val - min) / range) * chartHeight;
          return (
            <g key={idx}>
              <circle cx={x} cy={y} r={4} fill="#fff" stroke={color} strokeWidth={2} />
              <text x={x} y={height - 6} textAnchor="middle" className="text-[10px] fill-[#94A3B8]">
                {labels[idx]}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// Horizontal Progress Bar
interface ProgressBarProps {
  label: string;
  value: number;
  max?: number;
  color?: string;
}

export function ProgressBar({ label, value, max = 100, color = "#0B286D" }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100);
  return (
    <div className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-xs font-medium text-[#334155]">{label}</span>
        <span className="text-xs text-[#94A3B8]">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-[#F1F5F9] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${pct}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────── Recent Activity ─────────────────────── */
interface ActivityItem {
  icon: string;
  title: string;
  time: string;
  type?: "reminder" | "achievement" | "info";
}

export function RecentActivity({ items, title = "Recent Activity" }: { items: ActivityItem[]; title?: string }) {
  return (
    <CardWrapper
      title={title}
      headerRight={
        <button className="text-xs text-[#0B286D] bg-transparent border-none cursor-pointer font-medium hover:underline">
          View All
        </button>
      }
    >
      <div className="flex flex-col">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-3 py-2.5 px-1 ${
              idx < items.length - 1 ? "border-b border-[#F1F5F9]" : ""
            }`}
          >
            <span className="text-xl shrink-0">{item.icon}</span>
            <div className="flex-1">
              <div className="text-xs font-medium text-[#0F172A]">{item.title}</div>
            </div>
            <span className="text-[11px] text-[#94A3B8] whitespace-nowrap">{item.time}</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
