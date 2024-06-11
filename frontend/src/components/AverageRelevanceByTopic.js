import React, { useMemo } from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const AverageRelevanceByTopic = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const topicRelevance = {};
    const topicCounts = {};
    data.forEach((d) => {
      if (!topicRelevance[d.topic]) {
        topicRelevance[d.topic] = 0;
        topicCounts[d.topic] = 0;
      }
      topicRelevance[d.topic] += d.relevance;
      topicCounts[d.topic] += 1;
    });
    const avgRelevance = {};
    Object.keys(topicRelevance).forEach((topic) => {
      avgRelevance[topic] = topicRelevance[topic] / topicCounts[topic];
    });
    return Object.values(avgRelevance);
  }, [data]);
  const topics = useMemo(() => {
    if (!data) return [];
    const topicSet = new Set(data.map((d) => d.topic));
    return Array.from(topicSet);
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Average Relevance by Topic</h1>
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

export default AverageRelevanceByTopic;
