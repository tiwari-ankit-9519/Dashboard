import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const RelevanceWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const relevanceIntensity = {};
    data.forEach((d) => {
      if (!relevanceIntensity[d.relevance]) relevanceIntensity[d.relevance] = 0;
      relevanceIntensity[d.relevance] += d.intensity;
    });
    return Object.values(relevanceIntensity);
  }, [data]);
  const relevances = useMemo(() => {
    if (!data) return [];
    const relevanceSet = new Set(data.map((d) => d.relevance));
    return Array.from(relevanceSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Relevance Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: relevances }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default RelevanceWiseIntensity;
