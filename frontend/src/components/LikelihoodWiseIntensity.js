import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const LikelihoodWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const likelihoodIntensity = {};
    data.forEach((d) => {
      if (!likelihoodIntensity[d.likelihood])
        likelihoodIntensity[d.likelihood] = 0;
      likelihoodIntensity[d.likelihood] += d.intensity;
    });
    return Object.values(likelihoodIntensity);
  }, [data]);

  const likelihoods = useMemo(() => {
    if (!data) return [];
    const likelihoodSet = new Set(data.map((d) => d.likelihood));
    return Array.from(likelihoodSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Likelihood Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: likelihoods }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default LikelihoodWiseIntensity;
