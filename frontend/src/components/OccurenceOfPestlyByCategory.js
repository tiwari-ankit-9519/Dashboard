import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const OccurrencesByPestle = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const pestleCounts = {};
    data.forEach((d) => {
      if (!pestleCounts[d.pestle]) pestleCounts[d.pestle] = 0;
      pestleCounts[d.pestle] += 1;
    });
    return Object.values(pestleCounts);
  }, [data]);
  const pestleCategories = useMemo(() => {
    if (!data) return [];
    const pestleSet = new Set(data.map((d) => d.pestle));
    return Array.from(pestleSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Occurrences by Pestle Category
      </h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: pestleCategories }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default OccurrencesByPestle;
