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
exports.retryPromise = retryPromise;
function retryPromise(fn_1) {
    return __awaiter(this, arguments, void 0, function* (fn, attempts = 3, delay = 1000) {
        try {
            return yield fn();
        }
        catch (err) {
            if (attempts <= 1)
                throw err;
            yield new Promise((resolve) => setTimeout(resolve, delay));
            return yield retryPromise(fn, attempts - 1, delay);
        }
    });
}
