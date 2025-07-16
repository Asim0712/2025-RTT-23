import { NetworkError, DataError } from "./Error";

export const fetchProductCatalog = (): Promise<{ id: number; name: string; price: number }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { id: 1, name: "Laptop", price: 1200 },
          { id: 2, name: "Headphones", price: 200 },
        ]);
      } else {
        reject(new NetworkError("Failed to fetch product catalog"));
      }
    }, 1000);
  });
};

export const fetchProductReviews = (productId: number): Promise<{ rating: number; comment: string }[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve([
          { rating: 5, comment: "Excellent product!" },
          { rating: 4, comment: "Very good, but could be cheaper." },
        ]);
      } else {
        reject(new DataError(`Failed to fetch reviews for product ID ${productId}`));
      }
    }, 1500);
  });
};

export const fetchSalesReport = (): Promise<{ totalSales: number; unitsSold: number; averagePrice: number }> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.8) {
        resolve({ totalSales: 32000, unitsSold: 150, averagePrice: 213.33 });
      } else {
        reject(new NetworkError("Failed to fetch sales report"));
      }
    }, 1000);
  });
};