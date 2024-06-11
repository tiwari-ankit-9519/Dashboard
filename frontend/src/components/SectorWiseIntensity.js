import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const SectorWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const sectorIntensity = {};
    data.forEach((d) => {
      if (!sectorIntensity[d.sector]) sectorIntensity[d.sector] = 0;
      sectorIntensity[d.sector] += d.intensity;
    });
    return Object.values(sectorIntensity);
  }, [data]);
  const sectors = useMemo(() => {
    if (!data) return [];
    const sectorSet = new Set(data.map((d) => d.sector));
    return Array.from(sectorSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Sector Wise Intensity</h1>
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

export default SectorWiseIntensity;
