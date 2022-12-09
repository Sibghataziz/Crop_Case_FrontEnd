import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";


export default function LineChart({ Yaxis, width, height, data }) {
 
  return (
    <AreaChart
      width={width}
      height={height}
      data={data}
      margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
    >
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8} />
          <stop offset="95%" stopColor="#000AFF" stopOpacity={0} />
        </linearGradient>
      </defs>
      <XAxis
        axisLine={false}
        tickLine={false}
        dataKey="name"
        style={{
          fontSize: "10px",
          color: "#F9F9F9",
          fontWeight: "bold",
        }}
      />
      {Yaxis && (
        <YAxis
          axisLine={false}
          tickLine={false}
          dataKey= "income"
          style={{
            fontSize: "12px",
            color: "#F9F9F9",
            fontWeight: "bold",
          }}
        />
      )}
      <Tooltip />
      <Area
        type="monotone"
        dataKey="income"
        stroke="#000AFF"
        fillOpacity={1}
        fill="url(#colorUv)"
        strokeWidth={4}
      />
    </AreaChart>
  );
}
