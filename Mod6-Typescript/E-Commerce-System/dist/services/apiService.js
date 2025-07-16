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
exports.fetchProduct = fetchProduct;
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://dummyjson.com/product');
            const data = yield response.json();
            console.log(data);
            return data.products.map((product) => new product(product.id, product.title, product.price, product.category, product.description, product.discountpercentage));
        }
        catch (error) {
            console.log(error);
            return [];
        }
    });
}
// fetchProduct()
