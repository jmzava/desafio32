"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const passport_1 = __importDefault(require("passport"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
require("./middlewares/passport");
require("dotenv/config");
const viewRoutes_1 = __importDefault(require("./routes/viewRoutes"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const randomRoutes_1 = __importDefault(require("./routes/randomRoutes"));
const dbConnect_1 = require("./db/dbConnect");
const compression_1 = __importDefault(require("compression"));
require("./models/logs4js");
const logs4js_1 = __importDefault(require("./models/logs4js"));
const logger_1 = require("./middlewares/logger");
const app = (0, express_1.default)();
const logger = logs4js_1.default.getLogger();
(0, dbConnect_1.connectMongo)();
app.use((0, express_session_1.default)({
    store: connect_mongo_1.default.create({
        mongoUrl: process.env.MONGO,
    }),
    secret: String(process.env.SECRET),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: Number(process.env.TIME_COOKIE)
    }
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
app.use((0, compression_1.default)());
app.use(logger_1.myLogger);
app.use('/api/', randomRoutes_1.default);
app.use('/api/auth', authRoutes_1.default);
app.use('/', viewRoutes_1.default);
exports.default = app;
