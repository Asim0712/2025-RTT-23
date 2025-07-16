"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const handleError = (error) => {
    console.log("=".repeat(40));
    console.log("❌ Error occurred while fetching data.");
    console.log(error);
    console.log("=".repeat(40));
};
exports.handleError = handleError;
