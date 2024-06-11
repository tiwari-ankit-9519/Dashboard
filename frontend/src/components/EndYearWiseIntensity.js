import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const EndYearWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const endYearIntensity = {};
    data.forEach((d) => {
      if (!endYearIntensity[d.end_year]) endYearIntensity[d.end_year] = 0;
      endYearIntensity[d.end_year] += d.intensity;
    });
    return Object.values(endYearIntensity);
  }, [data]);

  const endYears = useMemo(() => {
    if (!data) return [];
    const endYearSet = new Set(data.map((d) => d.end_year));
    return Array.from(endYearSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">End Year Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: endYears }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default EndYearWiseIntensity;
