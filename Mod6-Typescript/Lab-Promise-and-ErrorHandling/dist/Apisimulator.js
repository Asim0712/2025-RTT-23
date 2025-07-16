"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSalesReport = exports.fetchProductReviews = exports.fetchProductCatalog = void 0;
const Error_1 = require("./Error");
const fetchProductCatalog = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { id: 1, name: "Laptop", price: 1200 },
                    { id: 2, name: "Headphones", price: 200 },
                ]);
            }
            else {
                reject(new Error_1.NetworkError("Failed to fetch product catalog"));
            }
        }, 1000);
    });
};
exports.fetchProductCatalog = fetchProductCatalog;
const fetchProductReviews = (productId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve([
                    { rating: 5, comment: "Excellent product!" },
                    { rating: 4, comment: "Very good, but could be cheaper." },
                ]);
            }
            else {
                reject(new Error_1.DataError(`Failed to fetch reviews for product ID ${productId}`));
            }
        }, 1500);
    });
};
exports.fetchProductReviews = fetchProductReviews;
const fetchSalesReport = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve({ totalSales: 32000, unitsSold: 150, averagePrice: 213.33 });
            }
            else {
                reject(new Error_1.NetworkError("Failed to fetch sales report"));
            }
        }, 1000);
    });
};
exports.fetchSalesReport = fetchSalesReport;
