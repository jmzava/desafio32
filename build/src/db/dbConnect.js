"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectMongo() {
    try {
        // @ts-ignore
        mongoose_1.default.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
    catch (error) {
        console.log(error);
    }
}
exports.connectMongo = connectMongo;
