export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface WeeklyData {
  day: string;
  incoming: number;
  answered: number;
  experts: number;
}

export type ProductResponse = {
  orders: Product[];
};

export type InsightResponse = {
  insights: WeeklyData[];
};

export type ApiErrorResponse = {
  message: string;
};
