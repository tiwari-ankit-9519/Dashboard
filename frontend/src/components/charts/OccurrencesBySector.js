import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const sectorColors = {
  Energy: "#9D4EDD",
  Economic: "#FF6700",
  Organization: "#00A8E8",
  Manufacturing: "#A3E635",
};

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

  const barColors = sectors.map((sector) => sectorColors[sector] || "#6366F1");

  return (
    <div className="p-5 m-5 border border-gray-300 flex flex-col justify-center items-center bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-5">Occurrences by Sector</h1>
      <div className="w-full max-w-3xl">
        <BarChart
          xAxis={[{ scaleType: "band", data: sectors }]}
          series={[{ data: newData, color: barColors }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default OccurrencesBySector;
