"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processData = processData;
const lodash_1 = __importDefault(require("lodash"));
function processData(data) {
    let result = [];
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        if (!item.id) {
            throw new Error('Data item is missing an id');
        }
        let processedItem = {
            id: item.id,
            name: item.name || 'Unknown',
            price: item.price || 0,
            discountedPrice: item.discountedPrice || item.price || 0,
        };
        result.push(processedItem);
    }
    return lodash_1.default.orderBy(result, ['discountedPrice'], ['asc']);
}
