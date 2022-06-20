"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = __importDefault(require("log4js"));
log4js_1.default.configure({
    appenders: {
        errorFile: { type: "file", filename: "./build/src/logs/error.log" },
        warnFile: { type: "file", filename: "./build/src/logs/warn.log" },
        infoFile: { type: "console" },
        logError: {
            type: "logLevelFilter",
            appender: "errorFile",
            level: "error",
        },
        logWarn: {
            type: "logLevelFilter",
            appender: "warnFile",
            level: "warn",
        },
        logInfo: {
            type: "logLevelFilter",
            appender: "infoFile",
            level: "info",
        },
    },
    categories: {
        default: {
            appenders: ["logInfo"],
            level: "all",
        },
        fileError: {
            appenders: ["logError"],
            level: "all",
        },
        fileWarn: {
            appenders: ["logWarn"],
            level: "all",
        },
    },
});
exports.default = log4js_1.default;
