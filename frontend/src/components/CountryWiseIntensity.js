import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const CountryWiseIntensity = ({ data }) => {
  const newData = useMemo(
    () => (data ? data.map((d) => d.intensity) : []),
    [data]
  );
  const country = useMemo(
    () => (data ? data.map((d) => d.country) : []),
    [data]
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Country Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: country }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default CountryWiseIntensity;
