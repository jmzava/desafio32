"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app_1 = __importDefault(require("./src/app"));
const minimist_1 = __importDefault(require("minimist"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
require("./src/models/logs4js");
const logs4js_1 = __importDefault(require("./src/models/logs4js"));
const logError = logs4js_1.default.getLogger("fileError");
const args = (0, minimist_1.default)(process.argv.slice(2));
//
const numCPU = os_1.default.cpus().length;
app_1.default.set('views', __dirname + '/public/views');
app_1.default.set('view engine', 'ejs');
app_1.default.use(express_1.default.static(__dirname + '/public'));
const PORT = args.port || process.env.PORT || 8080;
const serverMode = args.mode || 'FORK';
if (serverMode == "CLUSTER") {
    if (cluster_1.default.isPrimary) {
        console.log(`I am a master ${process.pid}`);
        for (let i = 0; i < numCPU; i++) {
            cluster_1.default.fork();
        }
        cluster_1.default.on("listening", (worker, address) => {
            console.log(`${worker.process.pid} es listening in port ${address.port}`);
        });
    }
    else {
        app_1.default
            .listen(PORT, () => console.log(`http://localhost:${PORT} mode ${serverMode}`))
            .on('error', err => logError.error("Error al levantar el servidor " + err));
    }
}
else {
    app_1.default
        .listen(PORT, () => console.log(`http://localhost:${PORT} mode ${serverMode}`))
        .on('error', err => logError.error("Error al levantar el servidor " + err));
}
