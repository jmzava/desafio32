"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const randomController_1 = __importDefault(require("../controllers/randomController"));
const routes = (0, express_1.Router)();
//@ts-ignore
routes.get("/randoms", randomController_1.default.randoms);
exports.default = routes;
