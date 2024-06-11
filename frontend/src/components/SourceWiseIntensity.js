import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const SourceWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const sourceIntensity = {};
    data.forEach((d) => {
      if (!sourceIntensity[d.source]) sourceIntensity[d.source] = 0;
      sourceIntensity[d.source] += d.intensity;
    });
    return Object.values(sourceIntensity);
  }, [data]);
  const sources = useMemo(() => {
    if (!data) return [];
    const sourceSet = new Set(data.map((d) => d.source));
    return Array.from(sourceSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Source Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: sources }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default SourceWiseIntensity;
