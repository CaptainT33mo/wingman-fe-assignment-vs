"use client";

import { Stats } from "@/components/pages/dashboard/stats";
import Insights from "@/components/pages/dashboard/views/insights";
import Orders from "@/components/pages/dashboard/views/orders";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const SELECT_OPTIONS = [
  {
    label: "7 days",
    value: "7"
  },
  {
    label: "14 days",
    value: "14"
  },
  {
    label: "30 days",
    value: "30"
  },
  {
    label: "90 days",
    value: "90"
  }
];

export default function Home() {
  return (
    <>
      <div className="flex-1 space-y-4 p-8 mt-9 pt-6 rounded-xl mx-6 shadow-[0px_0px_0px_1px_#0000000F]">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-medium tracking-[-2%]">At a glance</h2>
          <Select>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder={SELECT_OPTIONS[0].label} />
            </SelectTrigger>
            <SelectContent>
              {SELECT_OPTIONS.map((item) => (
                <SelectItem value={item.value} key={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Stats />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-7 px-0 border-none shadow-none">
            <CardHeader className="px-0">
              <CardTitle className="text-3xl font-medium tracking-[-2%]">
                Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="px-0">
              <Insights />
            </CardContent>
          </Card>
        </div>
        <Orders />
      </div>
    </>
  );
}
