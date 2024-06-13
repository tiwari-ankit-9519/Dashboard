import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const pestleColors = {
  Political: "#EF4444",
  Economic: "#F59E0B",
  Organization: "#10B981",
  Industries: "#22D3EE",
};

const OccurrencesByPestle = ({ data }) => {
  const newData = useMemo(() => {
    if (!data) return [];
    const pestleCounts = {};
    data.forEach((d) => {
      if (!pestleCounts[d.pestle]) pestleCounts[d.pestle] = 0;
      pestleCounts[d.pestle] += 1;
    });
    return Object.values(pestleCounts);
  }, [data]);

  const pestleCategories = useMemo(() => {
    if (!data) return [];
    const pestleSet = new Set(data.map((d) => d.pestle));
    return Array.from(pestleSet);
  }, [data]);

  const chartData = {
    labels: pestleCategories,
    datasets: [
      {
        label: "Occurrences",
        data: newData,
        backgroundColor: pestleCategories.map(
          (category) => pestleColors[category] || "#6366F1"
        ), // Default to indigo if not specified
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Occurrences by Pestle Category",
      },
    },
  };

  return (
    <div className="p-5 m-5 flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-5">
        Occurrences by Pestle Category
      </h1>
      <div className="w-full max-w-3xl">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
};

export default OccurrencesByPestle;
