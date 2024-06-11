import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryWiseIntensity from "./components/CountryWiseIntensity";
import EndYearWiseIntensity from "./components/EndYearWiseIntensity";
import LikelihoodWiseIntensity from "./components/LikelihoodWiseIntensity";
import PestleWiseIntensity from "./components/PestleWiseIntensity";
import RegionWiseIntensity from "./components/RegionWiseIntensity";
import RelevanceWiseIntensity from "./components/RelevanceWiseIntensity";
import SectorWiseIntensity from "./components/SectorWiseIntensity";
import SourceWiseIntensity from "./components/SourceWiseIntensity";
import StartYearWiseIntensity from "./components/StartYearWiseIntensity";
import TopicWiseIntensity from "./components/TopicWiseIntensity";
import CountryWiseOccurrences from "./components/CountryWiseOccurences";
import AverageRelevanceByTopic from "./components/AverageRelevanceByTopic";
import NumberOfInsightsBySource from "./components/NumberOfInsightsBySource";
import AverageLikelihoodByRegion from "./components/AverageLiklihoodByRegion";
import InsightsByYear from "./components/InsightsByYear";
import OccurrencesByPestle from "./components/OccurenceOfPestlyByCategory";
import OccurrencesBySector from "./components/OccurencesBySector";
import OccurrencesByTopic from "./components/OccurencesByTopics";

const App = () => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <CountryWiseIntensity data={data} />
      <EndYearWiseIntensity data={data} />
      <LikelihoodWiseIntensity data={data} />
      <PestleWiseIntensity data={data} />
      <RegionWiseIntensity data={data} />
      <RelevanceWiseIntensity data={data} />
      <SectorWiseIntensity data={data} />
      <SourceWiseIntensity data={data} />
      <StartYearWiseIntensity data={data} />
      <TopicWiseIntensity data={data} />
      <CountryWiseOccurrences data={data} />
      <AverageRelevanceByTopic data={data} />
      <NumberOfInsightsBySource data={data} />
      <AverageLikelihoodByRegion data={data} />
      <InsightsByYear data={data} />
      <OccurrencesByPestle data={data} />
      <OccurrencesBySector data={data} />
      <OccurrencesByTopic data={data} />
    </div>
  );
};

export default App;
