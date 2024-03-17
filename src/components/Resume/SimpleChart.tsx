import { BarChart } from "@mui/x-charts/BarChart";

export default function SimpleChart() {
  return (
    <BarChart
      yAxis={[
        {
          id: "barCategories",
          scaleType: "band",
          data: ["Typescript", "Javascript", "Python", "AI", "React"],
          categoryGapRatio: 0.5,

          tickLabelStyle: {
            fill: "rgba(0, 225, 2, 0.8)",
            fontSize: 13,
          },
        },
      ]}
      layout="horizontal"
      margin={{ top: 10, right: 40, bottom: 45, left: 75 }}
      series={[
        {
          color: "rgba(0, 220, 0, 0.35)",
          data: [95, 95, 80, 85, 90],
        },
      ]}
      height={310}
    />
  );
}
