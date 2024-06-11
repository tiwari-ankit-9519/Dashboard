import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const OccurrencesByTopic = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const topicCounts = {};
    data.forEach((d) => {
      if (!topicCounts[d.topic]) topicCounts[d.topic] = 0;
      topicCounts[d.topic] += 1;
    });
    return Object.values(topicCounts);
  }, [data]);
  const topics = useMemo(() => {
    if (!data) return [];
    const topicSet = new Set(data.map((d) => d.topic));
    return Array.from(topicSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Occurrences by Topic</h1>
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

export default OccurrencesByTopic;
