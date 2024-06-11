import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const CountryWiseOccurrences = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const countryCounts = {};
    data.forEach((d) => {
      if (!countryCounts[d.country]) countryCounts[d.country] = 0;
      countryCounts[d.country] += 1;
    });
    return Object.values(countryCounts);
  }, [data]);
  const countries = useMemo(() => {
    if (!data) return [];
    const countrySet = new Set(data.map((d) => d.country));
    return Array.from(countrySet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Country Wise Occurrences</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: countries }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default CountryWiseOccurrences;
