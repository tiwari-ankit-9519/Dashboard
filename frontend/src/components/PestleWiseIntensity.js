import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const PestleWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const pestleIntensity = {};
    data.forEach((d) => {
      if (!pestleIntensity[d.pestle]) pestleIntensity[d.pestle] = 0;
      pestleIntensity[d.pestle] += d.intensity;
    });
    return Object.values(pestleIntensity);
  }, [data]);

  const pestleCategories = useMemo(() => {
    if (!data) return [];
    const pestleSet = new Set(data.map((d) => d.pestle));
    return Array.from(pestleSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Pestle Wise Intensity</h1>
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

export default PestleWiseIntensity;
