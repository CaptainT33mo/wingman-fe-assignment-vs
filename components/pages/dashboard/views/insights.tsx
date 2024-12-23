"use client";

import Spinner from "@/components/loaders/spinner";
import InsightsCharts from "../components/insights-charts";
import useFetchData from "@/hooks/use-fetch-data";
import { InsightResponse } from "@/types";

export default function Insights() {
  const { data, isSuccess } = useFetchData<InsightResponse>({
    url: "/insights",
    queryKey: ["insights"]
  });

  return isSuccess ? (
    <InsightsCharts weeklyData={data.insights} />
  ) : (
    <Spinner />
  );
}
