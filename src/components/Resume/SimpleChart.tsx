import { BarChart } from "@mui/x-charts/BarChart";

export default function SimpleChart() {
  return (
    <BarChart
      yAxis={[
        {
          id: "barCategories",
          scaleType: "band",
          data: ["HTML & CSS", "Javascript", "Python", "AI", "Java"],
          // @ts-ignore
          categoryGapRatio: 0.5,
          tickLabelStyle: {
            fill: "rgba(0, 225, 2, 0.8)",
            fontSize: 13,
          },
        },
      ]}
      layout="horizontal"
      margin={{ top: 10, right: 40, bottom: 45, left: 90 }}
      series={[
        {
          color: "rgba(0, 220, 0, 0.35)",
          data: [95, 95, 88, 85, 80],
        },
      ]}
      height={310}
    />
  );
}
