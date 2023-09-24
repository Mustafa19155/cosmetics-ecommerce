"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const TopProducts = ({ data, colors }) => {
  return (
    <PieChart width={240} height={240}>
      <Pie
        dataKey="sales"
        isAnimationActive={false}
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} stroke="none" fill={colors[index]} />
        ))}
      </Pie>
      {/* <Tooltip /> */}
    </PieChart>
  );
};

export default TopProducts;
