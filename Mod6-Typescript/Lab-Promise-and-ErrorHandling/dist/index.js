"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Apisimulator_1 = require("./Apisimulator");
const RetryPromise_1 = require("./RetryPromise");
const Error_1 = require("./Error");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Starting e-commerce dashboard data fetch...");
        try {
            const products = yield (0, RetryPromise_1.retryPromise)(() => (0, Apisimulator_1.fetchProductCatalog)(), 3, 1000);
            console.log("Product Catalog:");
            console.table(products);
            for (const product of products) {
                try {
                    const reviews = yield (0, RetryPromise_1.retryPromise)(() => (0, Apisimulator_1.fetchProductReviews)(product.id), 3, 1000);
                    console.log(`Reviews for ${product.name}:`);
                    console.table(reviews);
                }
                catch (error) {
                    handleError(error);
                }
            }
            try {
                const report = yield (0, RetryPromise_1.retryPromise)(() => (0, Apisimulator_1.fetchSalesReport)(), 3, 1000);
                console.log("Sales Report:");
                console.table(report);
            }
            catch (error) {
                handleError(error);
            }
        }
        catch (error) {
            handleError(error);
        }
        finally {
            console.log("Finished attempting all API calls.");
        }
    });
}
function handleError(error) {
    if (error instanceof Error_1.NetworkError) {
        console.error(`[Network Error]: ${error.message}`);
    }
    else if (error instanceof Error_1.DataError) {
        console.error(`[Data Error]: ${error.message}`);
    }
    else {
        console.error(`[Unknown Error]: ${error}`);
    }
}
main();
