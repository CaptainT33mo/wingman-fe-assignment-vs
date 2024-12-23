import useFetchData from "@/hooks/use-fetch-data";
import OrdersTable from "../components/orders";
import { ProductResponse } from "@/types";
import Spinner from "@/components/loaders/spinner";

export default function Orders() {
  const { data, isSuccess } = useFetchData<ProductResponse>({
    url: "/orders",
    queryKey: ["orders"]
  });

  return isSuccess ? <OrdersTable products={data.orders} /> : <Spinner />;
}
