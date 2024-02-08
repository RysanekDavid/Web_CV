import React, { PureComponent } from "react";
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

const data = [
  {
    name: "Typescript",
    value: 90,
  },
  {
    name: "Javascript",
    value: 100,
  },
  {
    name: "Python",
    value: 60,
  },
  {
    name: "AI",
    value: 80,
  },
  {
    name: "React",
    value: 100,
  },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          backgroundColor: "#000000",
          color: "#EAEAEA",
          paddingTop: "1px",
          paddingBottom: "1px",
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius: "12px",
        }}
      >
        <p className="desc">{`${label}`}</p>
        <p className="desc">
          {`Percentage: ${(payload[0].value / 100) * 100}%`}
        </p>
      </div>
    );
  }

  return null;
};

export default function SkillsChart() {
  return (
    <ResponsiveContainer width="95%" height="70%">
      <BarChart
        layout="vertical"
        data={data}
        margin={{ top: 0, right: 30, left: 40, bottom: 10 }}
        style={{
          fontFamily: "Fira Code",
          fontSize: "0.9rem",
        }}
      >
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Tooltip cursor={false} content={CustomTooltip} />
        <Bar dataKey="value" fill="#032206" barSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
}
