import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const StartYearWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const startYearIntensity = {};
    data.forEach((d) => {
      if (!startYearIntensity[d.start_year])
        startYearIntensity[d.start_year] = 0;
      startYearIntensity[d.start_year] += d.intensity;
    });
    return Object.values(startYearIntensity);
  }, [data]);
  const startYears = useMemo(() => {
    if (!data) return [];
    const startYearSet = new Set(data.map((d) => d.start_year));
    return Array.from(startYearSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Start Year Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: startYears }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default StartYearWiseIntensity;
