"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("@faker-js/faker"));
function generateRandomProds() {
    const listProd = [];
    for (let index = 0; index < 5; index++) {
        const prod = {
            id: index + 1,
            title: faker_1.default.commerce.productName(),
            price: faker_1.default.commerce.price(),
            url: faker_1.default.image.imageUrl()
        };
        listProd.push(prod);
    }
    return listProd;
}
exports.default = generateRandomProds;
