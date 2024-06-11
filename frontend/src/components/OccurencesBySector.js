import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const OccurrencesBySector = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const sectorCounts = {};
    data.forEach((d) => {
      if (!sectorCounts[d.sector]) sectorCounts[d.sector] = 0;
      sectorCounts[d.sector] += 1;
    });
    return Object.values(sectorCounts);
  }, [data]);
  const sectors = useMemo(() => {
    if (!data) return [];
    const sectorSet = new Set(data.map((d) => d.sector));
    return Array.from(sectorSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Occurrences by Sector</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: sectors }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default OccurrencesBySector;
