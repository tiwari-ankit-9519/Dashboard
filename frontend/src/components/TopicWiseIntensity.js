import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const TopicWiseIntensity = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const topicIntensity = {};
    data.forEach((d) => {
      if (!topicIntensity[d.topic]) topicIntensity[d.topic] = 0;
      topicIntensity[d.topic] += d.intensity;
    });
    return Object.values(topicIntensity);
  }, [data]);
  const topics = useMemo(() => {
    if (!data) return [];
    const topicSet = new Set(data.map((d) => d.topic));
    return Array.from(topicSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Topic Wise Intensity</h1>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
        <BarChart
          xAxis={[{ scaleType: "band", data: topics }]}
          series={[{ data: newData }]}
          width={500}
          height={300}
          className="animate-fade-in"
        />
      </div>
    </div>
  );
};

export default TopicWiseIntensity;
