import React, { useMemo, useState } from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const CountryWiseIntensity = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState("All");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const filteredData = useMemo(() => {
    if (!data) return [];
    if (selectedCountry === "All") return data;
    return data.filter((d) => d.country === selectedCountry);
  }, [selectedCountry, data]);

  const newData = useMemo(() => {
    if (!filteredData) return [];
    return filteredData.map((d) => d.intensity);
  }, [filteredData]);

  const countries = useMemo(() => {
    if (!data) return [];
    const countrySet = new Set(data.map((d) => d.country));
    return ["All", ...Array.from(countrySet)];
  }, [data]);

  return (
    <div className="p-5 m-5  flex flex-col justify-center items-start">
      <div className="w-full flex justify-between items-center mb-5">
        <h1 className="text-3xl font-bold">Country Wise Intensity</h1>
        <FormControl className="w-1/3">
          <InputLabel id="country-select-label">Country</InputLabel>
          <Select
            labelId="country-select-label"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {countries.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <div className="w-full flex justify-center">
        <SparkLineChart
          data={newData}
          width={600}
          height={300}
          className="animate-fade-in"
          title="Country Wise Intensity"
        />
      </div>
    </div>
  );
};

export default CountryWiseIntensity;
