// components/ChartExample.tsx
"use client";

import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useEffect, useState } from "react";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "green",
  },
  mobile: {
    label: "Mobile",
    color: "purple",
  },
} satisfies ChartConfig;

export function ChartExample() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const axisColor = isDarkMode ? "#e5e7eb" : "#374151"; // Light gray for dark mode, dark gray for light mode
  const tooltipBgColor = isDarkMode ? "black" : "#ffffff"; // Dark gray for dark mode, white for light mode
  const tooltipTextColor = isDarkMode ? "#e5e7eb" : "#374151"; // Light gray for dark mode, dark gray for light mode
  const cursorColor = isDarkMode
    ? "rgba(229, 231, 235, 0.1)"
    : "rgba(55, 65, 81, 0.1)"; // Light gray for dark mode, dark gray for light mode

  return (
    <div className="p-4 bg-white dark:bg-black rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Monthly Usage Statistics
      </h2>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid stroke={axisColor} />
          <XAxis
            dataKey="month"
            stroke={axisColor}
            tick={{ fill: axisColor }}
          />
          <YAxis stroke={axisColor} tick={{ fill: axisColor }} />
          <Tooltip
            contentStyle={{
              backgroundColor: tooltipBgColor,
              color: tooltipTextColor,
            }}
            itemStyle={{ color: tooltipTextColor }}
            cursor={{ fill: cursorColor }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="desktop"
            stroke={chartConfig.desktop.color}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="mobile"
            stroke={chartConfig.mobile.color}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
