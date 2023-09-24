"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomShape = (props) => {
  const currentMonth = moment(Date.now()).format("MMMM");

  const { x, y, width, height, month } = props;

  return (
    <g>
      <rect
        x={x - 5}
        y={y - 8}
        width={width + 10}
        height={height + 13}
        rx={20}
        ry={20}
        fill={
          currentMonth.toLowerCase() == month.toLowerCase()
            ? "#F5F7FB"
            : "white"
        }
      />
      <rect
        x={x + 11}
        y={y}
        width={8}
        rx={8}
        ry={8}
        height={height - 90}
        fill={
          currentMonth.toLowerCase() == month.toLowerCase()
            ? "#FDCC0D"
            : "#D11260"
        }
      />
      <rect
        x={x + 13}
        y={y + height - 90}
        width={2}
        height={60}
        className="fill-[#CDD1DE]"
      />
      <text
        x={x + width / 2}
        y={y + height - 5} // Adjust this value for the position of the x-axis label
        textAnchor="middle"
        fill="#000" // Text color
      >
        {month.split("").slice(0, 3).join("")}
      </text>
    </g>
  );
};

const YTick = (props) => {
  const { x, y, payload } = props;

  return (
    <text x={x - 50} y={y + 20}>
      ${payload.value}
    </text>
  );
};

const YearlyReport = ({ data }) => {
  const [screenWidth, setscreenWidth] = useState(0);

  useEffect(() => {
    setscreenWidth(window.screen.width);
    const handleResize = () => {
      setscreenWidth(window.screen.width);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BarChart width={screenWidth / 1.3} height={400} data={data}>
      {/* <XAxis dataKey="month" tickLine={false} axisLine={false} /> */}
      <YAxis
        allowDecimals={false}
        tickLine={false}
        axisLine={false}
        color={"white"}
        fill={"white"}
        tick={<YTick />}
      />

      <Bar
        dataKey="sales"
        radius={15}
        // background={{
        //   fill: "rgba(202, 200, 200, 0.2)",
        //   radius: 15,
        // }}
        barSize={screenWidth / 50}
        shape={<CustomShape />}
      >
        {/* {data.map((entry, index) => (
          <Cell key={`cell-1`} fill={`#D11260`} width={10} />
        ))} */}
      </Bar>
    </BarChart>
  );
};

export default YearlyReport;
