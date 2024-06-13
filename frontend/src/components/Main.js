import React from "react";
import Header from "./UI/Header";
import AverageLikelihoodByRegion from "./charts/AverageLiklihoodByRegion";
import AverageRelevanceByTopic from "../components/charts/AverageRelevanceByTopic";
import CountryWiseIntensity from "./charts/CountryWiseIntensity";
import CountryWiseOccurrences from "./charts/CountryWiseOccurrences";
import EndYearWiseIntensity from "./charts/EndYearWiseIntensity";
import LikelihoodWiseIntensity from "../components/charts/LikelihoodWiseIntensity";
import PestleWiseIntensity from "../components/charts/PestleWiseIntensity";
import NumberOfInsightsBySource from "../components/charts/NumberOfInsightsBySource";
import InsightsByYear from "../components/charts/InsightsByYear";
import OccurrencesByPestle from "./charts/OccurrenceOfPestalByCategory";
import OccurrencesBySector from "./charts/OccurrencesBySector";
import OccurrencesByTopic from "./charts/OccurrencesByTopics";

export default function Main({ data }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white p-5">
        <h1 className="text-2xl font-bold mb-5">Panze Studio</h1>
        <nav className="space-y-2">
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Parties
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Product Manager
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Sales
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Purchases
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Stock Transfer
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            POS
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Cash & Bank
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Expenses
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Staff Members
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Sales Reports
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Online Orders
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Settings
          </a>
          <a
            href="#average-likelihood-by-region"
            className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700"
          >
            Subscription
          </a>
        </nav>
      </aside>
      <main className="flex-1 p-5">
        <Header />
        <h1 className="text-4xl font-bold text-center mb-10 animate-fade-in">
          Dashboard Overview
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="card">
            <AverageLikelihoodByRegion data={data} />
          </div>
          <div className="card">
            <AverageRelevanceByTopic data={data} />
          </div>
          <div className="card">
            <CountryWiseIntensity data={data} />
          </div>
          <div className="card">
            <CountryWiseOccurrences data={data} />
          </div>
          <div className="card">
            <EndYearWiseIntensity data={data} />
          </div>
          <div className="card">
            <InsightsByYear data={data} />
          </div>
          <div className="card">
            <LikelihoodWiseIntensity data={data} />
          </div>
          <div className="card">
            <NumberOfInsightsBySource data={data} />
          </div>
          <div className="card">
            <OccurrencesByPestle data={data} />
          </div>
          <div className="card">
            <OccurrencesBySector data={data} />
          </div>
          <div className="card">
            <OccurrencesByTopic data={data} />
          </div>
          <div className="card">
            <PestleWiseIntensity data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}
