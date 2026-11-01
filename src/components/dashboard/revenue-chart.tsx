"use client";

import * as React from "react";
import type { RevenueDataPoint } from "@/types/dashboard";

interface RevenueChartProps {
  data: RevenueDataPoint[];
  totalFormatted: string;
}

export function RevenueChart({ data, totalFormatted }: RevenueChartProps) {
  const [hoveredPoint, setHoveredPoint] = React.useState<RevenueDataPoint | null>(
    null
  );

  // SVG Chart Geometry
  const width = 500;
  const height = 230;
  const padding = { top: 20, right: 30, bottom: 35, left: 45 };

  const maxY = 1250;
  const maxX = 45;

  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;

  const getX = (val: number) => padding.left + (val / maxX) * chartWidth;
  const getY = (val: number) =>
    padding.top + chartHeight - (val / maxY) * chartHeight;

  // Generate SVG path string with smooth bezier curves
  const points = data.map((d) => ({ x: getX(d.day), y: getY(d.revenue), ...d }));
  const pathD = points.reduce((acc, point, i, arr) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = arr[i - 1];
    const cpX = (prev.x + point.x) / 2;
    return `${acc} C ${cpX} ${prev.y}, ${cpX} ${point.y}, ${point.x} ${point.y}`;
  }, "");

  // Gradient area path
  const areaD = `${pathD} L ${points[points.length - 1].x} ${
    padding.top + chartHeight
  } L ${points[0].x} ${padding.top + chartHeight} Z`;

  const yTicks = [0, 250, 500, 750, 1000, 1250];
  const xTicks = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45];

  return (
    <div className="bg-white rounded-3xl p-6 lg:p-7 border border-[#E3EDF6] shadow-sm flex flex-col justify-between h-[397px]">
      {/* Card Header */}
      <div>
        <p className="text-base font-semibold text-[#68819D]">Doanh thu tháng</p>
        <p className="text-3xl font-extrabold text-[#253F5B] tracking-tight mt-1">
          {totalFormatted}
        </p>
      </div>

      {/* SVG Line Chart */}
      <div className="relative w-full h-[260px] flex items-center justify-center">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible select-none"
        >
          <defs>
            {/* Area Gradient */}
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5C84BE" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#5C84BE" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Horizontal Grid lines and Y labels */}
          {yTicks.map((val) => {
            const y = getY(val);
            return (
              <g key={`y-${val}`}>
                <line
                  x1={padding.left}
                  y1={y}
                  x2={width - padding.right}
                  y2={y}
                  stroke="#EBF2F8"
                  strokeWidth="1.2"
                  strokeDasharray={val === 0 ? "none" : "3 3"}
                />
                <text
                  x={padding.left - 8}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[11px] fill-[#8EA3BC] font-medium"
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Vertical Grid lines and X labels */}
          {xTicks.map((day) => {
            const x = getX(day);
            return (
              <g key={`x-${day}`}>
                <line
                  x1={x}
                  y1={padding.top}
                  x2={x}
                  y2={padding.top + chartHeight}
                  stroke="#F0F5FA"
                  strokeWidth="1"
                />
                <text
                  x={x}
                  y={padding.top + chartHeight + 18}
                  textAnchor="middle"
                  className="text-[11px] fill-[#8EA3BC] font-medium"
                >
                  {day}
                </text>
              </g>
            );
          })}

          {/* Area Fill */}
          <path d={areaD} fill="url(#revenueGradient)" />

          {/* Primary Curve Line */}
          <path
            d={pathD}
            fill="none"
            stroke="#5C84BE"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Data Points */}
          {points.map((pt) => {
            const isHovered = hoveredPoint?.day === pt.day;
            return (
              <g
                key={pt.day}
                onMouseEnter={() => setHoveredPoint(pt)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="cursor-pointer"
              >
                <circle
                  cx={pt.x}
                  cy={pt.y}
                  r={isHovered ? 6 : 4}
                  className="fill-white stroke-[#5C84BE] transition-all"
                  strokeWidth={isHovered ? 3.5 : 2.5}
                />
              </g>
            );
          })}
        </svg>

        {/* Hover Tooltip */}
        {hoveredPoint && (
          <div className="absolute top-2 right-4 bg-[#253F5B] text-white text-xs px-3 py-1.5 rounded-xl shadow-lg pointer-events-none transition-all">
            Ngày {hoveredPoint.day}:{" "}
            <span className="font-bold text-[#8EC2FF]">
              {hoveredPoint.revenue} triệu
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
