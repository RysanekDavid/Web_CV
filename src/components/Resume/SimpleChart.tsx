import { BarChart, barElementClasses } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";

export default function SimpleChart() {
  return (
    <BarChart
      yAxis={[
        {
          id: "barCategories",
          scaleType: "band",
          data: ["HTML & CSS", "Javascript", "Python", "AI", "Java"],
          categoryGapRatio: 0.3,
          tickLabelStyle: {
            fill: "rgba(189, 189, 189, 0.8)",
            fontSize: 13,
          },
        },
      ]}
      xAxis={[
        {
          scaleType: "linear",

          tickLabelStyle: {
            fill: "rgba(189, 189, 189, 0.8)",
            fontSize: 13,
          },
        },
      ]}
      layout="horizontal"
      margin={{ top: 10, right: 40, bottom: 45, left: 90 }}
      series={[
        {
          color: "rgba(189, 189, 189, 0.85)",
          data: [100, 100, 85, 100, 70],
        },
      ]}
      height={310}
      sx={() => ({
        [`.${barElementClasses.root}`]: {
          "& rect": {
            fill: "rgba(189, 189, 189, 0.35)",
          },
        },
        [`.${axisClasses.root}`]: {
          [`.${axisClasses.tick}, .${axisClasses.line}`]: {
            stroke: "rgba(189, 189, 189, 0.8)",
            strokeWidth: 2,
          },
          [`.${axisClasses.tickLabel}`]: {
            fill: "rgba(189, 189, 189, 0.8)",
          },
        },
      })}
    />
  );
}
