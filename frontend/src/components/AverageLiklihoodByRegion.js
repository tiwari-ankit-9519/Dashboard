import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const AverageLikelihoodByRegion = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const regionLikelihood = {};
    const regionCounts = {};
    data.forEach((d) => {
      if (!regionLikelihood[d.region]) {
        regionLikelihood[d.region] = 0;
        regionCounts[d.region] = 0;
      }
      regionLikelihood[d.region] += d.likelihood;
      regionCounts[d.region] += 1;
    });
    const avgLikelihood = {};
    Object.keys(regionLikelihood).forEach((region) => {
      avgLikelihood[region] = regionLikelihood[region] / regionCounts[region];
    });
    return Object.values(avgLikelihood);
  }, [data]);
  const regions = useMemo(() => {
    if (!data) return [];
    const regionSet = new Set(data.map((d) => d.region));
    return Array.from(regionSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Average Likelihood by Region</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: regions }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default AverageLikelihoodByRegion;
