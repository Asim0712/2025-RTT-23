import { fetchProductCatalog, fetchProductReviews, fetchSalesReport } from "./Apisimulator";
import { retryPromise } from "./RetryPromise";
import { NetworkError, DataError } from "./Error";

async function main() {
  console.log("Starting e-commerce dashboard data fetch...");

  try {
    const products = await retryPromise(() => fetchProductCatalog(), 3, 1000);
    console.log("Product Catalog:");
    console.table(products);

    for (const product of products) {
      try {
        const reviews = await retryPromise(() => fetchProductReviews(product.id), 3, 1000);
        console.log(`Reviews for ${product.name}:`);
        console.table(reviews);
      } catch (error) {
        handleError(error);
      }
    }

    try {
      const report = await retryPromise(() => fetchSalesReport(), 3, 1000);
      console.log("Sales Report:");
      console.table(report);
    } catch (error) {
      handleError(error);
    }
  } catch (error) {
    handleError(error);
  } finally {
    console.log("Finished attempting all API calls.");
  }
}

function handleError(error: unknown) {
  if (error instanceof NetworkError) {
    console.error(`[Network Error]: ${error.message}`);
  } else if (error instanceof DataError) {
    console.error(`[Data Error]: ${error.message}`);
  } else {
    console.error(`[Unknown Error]: ${error}`);
  }
}

main();