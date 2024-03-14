import { BarChart } from "@mui/x-charts/BarChart";

export default function SimpleChart() {
  return (
    <BarChart
      yAxis={[
        {
          id: "barCategories",
          data: ["Typescript", "Javascript", "Python", "AI", "React"],
          scaleType: "band",
        },
      ]}
      layout="horizontal"
      margin={{ top: 10, right: 40, bottom: 45, left: 75 }}
      series={[
        {
          color: "rgba(0, 220, 0, 0.35)",
          data: [100, 60, 60, 60, 60],
        },
      ]}
      height={310}

      //bottomAxis={null}
    />
  );
}
