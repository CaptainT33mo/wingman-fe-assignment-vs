"use client";

import Spinner from "@/components/loaders/spinner";
import OrdersTable from "@/components/pages/dashboard/components/orders";
import useFetchData from "@/hooks/use-fetch-data";
import { ProductResponse } from "@/types";

export default function Sales() {
  const { data, isSuccess } = useFetchData<ProductResponse>({
    url: "/orders",
    queryKey: ["orders"]
  });

  return (
    <div className="flex-1 space-y-4 p-8 mt-9 pt-6 rounded-xl mx-6 shadow-[0px_0px_0px_1px_#0000000F]">
      {isSuccess ? (
        <OrdersTable products={data.orders} title="Sales" />
      ) : (
        <Spinner />
      )}
    </div>
  );
}
