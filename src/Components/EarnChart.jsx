import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { baseUrl } from "../App";

// const data = [
//   {
//     name: "Page A",
//     uv: 400,
//     pv: 240,
//     amt: 240,
//   },
//   {
//     name: "Page B",
//     uv: 300,
//     pv: 139,
//     amt: 220,
//   },
//   {
//     name: "Page C",
//     uv: 200,
//     pv: 980,
//     amt: 220,
//   },
//   {
//     name: "Page D",
//     uv: 278,
//     pv: 390,
//     amt: 200,
//   },
//   {
//     name: "Page E",
//     uv: 189,
//     pv: 480,
//     amt: 211,
//   },
//   {
//     name: "Page F",
//     uv: 239,
//     pv: 380,
//     amt: 250,
//   },
//   {
//     name: "Page G",
//     uv: 349,
//     pv: 430,
//     amt: 210,
//   },
// ];

export default function EarnChart({data}) {
  

  console.log(data)
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
