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
import CodeIcon from "@mui/icons-material/Code";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPython } from "@fortawesome/free-brands-svg-icons";

const PythonIcon = () => <FontAwesomeIcon icon={faPython} />;

const data = [
  {
    name: "Typescript",
    value: 90,
    icon: <PythonIcon />,
  },
  {
    name: "Javascript",
    value: 100,
    icon: <CodeIcon />,
  },
  {
    name: "Python",
    value: 60,
    icon: <CodeIcon />,
  },
  {
    name: "AI",
    value: 80,
    icon: <CodeIcon />,
  },
  {
    name: "React",
    value: 100,
    icon: <CodeIcon />,
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
        <p className="desc">{`Mastery: ${(payload[0].value / 100) * 100}%`}</p>
      </div>
    );
  }

  return null;
};

const CustomYAxisTick = ({ payload, x, y }) => {
  const IconToRender = payload.value.icon;

  return (
    <g transform={`translate(${x},${y - 10})`}>
      {IconToRender}
      <text x={30} y={0} dy={6} textAnchor="start" fill="#666">
        {payload.value.name}
      </text>
    </g>
  );
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
        <YAxis dataKey="name" type="category" tick={<CustomYAxisTick />} />
        <Tooltip cursor={false} content={CustomTooltip} />

        <Bar dataKey="value" fill="#032206" barSize={28} />
      </BarChart>
    </ResponsiveContainer>
  );
}
