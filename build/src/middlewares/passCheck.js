"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.passCheck = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const passCheck = (passwordToCheck, dbPassword) => {
    return bcrypt_1.default.compareSync(passwordToCheck, dbPassword);
};
exports.passCheck = passCheck;
