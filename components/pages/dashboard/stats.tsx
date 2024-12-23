import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PiChatTeardropFill } from "react-icons/pi";
import { FaArrowTrendDown, FaArrowTrendUp, FaTag } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { PiCoinFill, PiCoinsFill, PiPiggyBankFill } from "react-icons/pi";
import { ReactNode } from "react";

interface Stats {
  title: string;
  value: string | number;
  change: number;
  changeType: "increase" | "decrease";
  icon: ReactNode;
}

const stats: Stats[] = [
  {
    title: "Consultations",
    value: "24",
    change: 15,
    changeType: "increase",
    icon: <PiChatTeardropFill className="text-disabledText" />
  },
  {
    title: "Orders Placed",
    value: "12",
    change: 15,
    changeType: "decrease",
    icon: <FaTag className="text-disabledText" />
  },
  {
    title: "Conversion",
    value: "50%",
    change: 15,
    changeType: "decrease",
    icon: <FaCheck className="text-disabledText" />
  },
  {
    title: "Total Sales Value",
    value: "$2,400",
    change: 15,
    changeType: "increase",
    icon: <PiCoinsFill className="text-disabledText" />
  },
  {
    title: "Avg Order Value",
    value: "$240",
    change: 15,
    changeType: "increase",
    icon: <PiCoinFill className="text-disabledText" />
  },
  {
    title: "Commission Paid",
    value: "$240",
    change: 15,
    changeType: "increase",
    icon: <PiPiggyBankFill className="text-disabledText" />
  }
];

export function Stats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 py-3">
      {stats.map((stat) => (
        <Card key={stat.title} className="rounded-[20px] shadow-md">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium flex items-center gap-2">
              {stat.icon}
              <span className="font-semibold text-xs uppercase tracking-widest text-labelText">
                {stat.title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="gap-2 flex flex-col">
            <div className="text-3xl font-medium">{stat.value}</div>
            <p
              className={cn(
                "flex items-center text-xs",
                stat.changeType === "increase"
                  ? "text-greenText"
                  : "text-redText"
              )}
            >
              {stat.changeType === "increase" ? (
                <FaArrowTrendUp className="mr-1" size={16} />
              ) : (
                <FaArrowTrendDown className="mr-1" size={16} />
              )}
              {stat.change}%{" "}
              <span className="text-labelText ml-1">{stat.changeType}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
