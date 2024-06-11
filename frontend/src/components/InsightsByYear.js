import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const InsightsByYear = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const yearCounts = {};
    data.forEach((d) => {
      if (!yearCounts[d.start_year]) yearCounts[d.start_year] = 0;
      yearCounts[d.start_year] += 1;
    });
    return Object.values(yearCounts);
  }, [data]);
  const years = useMemo(() => {
    if (!data) return [];
    const yearSet = new Set(data.map((d) => d.start_year));
    return Array.from(yearSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Count of Insights by Year</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: years }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default InsightsByYear;
