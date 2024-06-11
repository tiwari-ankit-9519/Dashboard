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
    <div className="p-5 m-5 border border-gray-300 flex flex-col justify-center items-center">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Average Likelihood by Region</h1>
        <FormControl className="w-1/3">
          <InputLabel id="region-select-label">Region</InputLabel>
          <Select
            labelId="region-select-label"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div>
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
              color: "cornflowerblue",
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
  );
};

export default AverageLikelihoodByRegion;
