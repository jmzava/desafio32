"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myLogger2 = exports.myLogger = void 0;
require("../models/logs4js");
const logs4js_1 = __importDefault(require("../models/logs4js"));
const logWarm = logs4js_1.default.getLogger("fileWarn");
const logConsole = logs4js_1.default.getLogger();
const myLogger = (req, res, next) => {
    logWarm.warn("Recurso inexistente " + +req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
};
exports.myLogger = myLogger;
const myLogger2 = (req, res, next) => {
    logConsole.info("Recurso  exitoso " + req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
};
exports.myLogger2 = myLogger2;
