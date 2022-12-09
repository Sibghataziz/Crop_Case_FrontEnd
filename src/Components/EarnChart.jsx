import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { baseUrl } from "../App";


export default function EarnChart({data}) {
  return (
    <BarChart
      width={272}
      height={177}
      data={data}
      barCategoryGap="27%"
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis
        dataKey="name"
        style={{
          fontSize: "12px",
          color: "#F9F9F9",
          fontWeight: "bold",
        }}
      />
      <YAxis
        style={{
          fontSize: "12px",
          color: "#F9F9F9",
          fontWeight: "bold",
        }}
      />
      <Tooltip />
      <Bar dataKey="pre" fill="#00D1FF" radius={[10, 10, 0, 0]} />
      <Bar dataKey="post" fill="#0038FF" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}
