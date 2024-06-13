import React, { useMemo, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const AverageLikelihoodByRegion = ({ data }) => {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedRegion === "All") return data;
    return data.filter((d) => d.region === selectedRegion);
  }, [selectedRegion, data]);

  const newData = useMemo(() => {
    if (!filteredData) return [];
    const regionLikelihood = {};
    const regionCounts = {};
    filteredData.forEach((d) => {
      if (!regionLikelihood[d.region]) {
        regionLikelihood[d.region] = 0;
        regionCounts[d.region] = 0;
      }
      regionLikelihood[d.region] += d.likelihood;
      regionCounts[d.region] += 1;
    });
    const avgLikelihood = {};
    Object.keys(regionLikelihood).forEach((region) => {
      avgLikelihood[region] = regionLikelihood[region] / regionCounts[region];
    });
    return Object.values(avgLikelihood);
  }, [filteredData]);

  const regions = useMemo(() => {
    if (!data) return [];
    const regionSet = new Set(data.map((d) => d.region));
    return ["All", ...Array.from(regionSet)];
  }, [data]);

  const displayedRegions = useMemo(() => {
    if (!data) return [];
    if (selectedRegion === "All")
      return Array.from(new Set(data.map((d) => d.region)));
    return [selectedRegion];
  }, [selectedRegion, data]);

  return (
    <div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-0 text-center md:text-left">
          Average Likelihood by Region
        </h2>
        <FormControl className="w-full md:w-1/3">
          <InputLabel id="region-select-label">Region</InputLabel>
          <Select
            labelId="region-select-label"
            value={selectedRegion}
            onChange={handleRegionChange}
            className="bg-white"
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="w-full overflow-x-auto">
        <div className="w-full min-w-[600px]">
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: displayedRegions,
                label: "Region",
              },
            ]}
            yAxis={[{ label: "Likelihood" }]}
            series={[
              {
                data: newData,
                color: "#6366f1",
              },
            ]}
            width={600}
            height={300}
            className="animate-fade-in"
            borderRadius={15}
            tooltip={{
              enabled: true,
              formatter: (tooltip) => {
                return `${tooltip.value.toFixed(2)}`;
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AverageLikelihoodByRegion;
