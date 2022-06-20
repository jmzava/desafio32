"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = __importDefault(require("../services/faker"));
const os_1 = __importDefault(require("os"));
class ViewsController {
    constructor() {
        ViewsController.listProd = (0, faker_1.default)();
    }
    productsView(req, res) {
        //@ts-ignore
        const nombre = req.session.passport.user.email;
        res.render('index', {
            nombre: nombre,
            listproducts: ViewsController.listProd
        });
    }
    login(req, res) {
        res.render('login/login');
    }
    loginError(req, res) {
        //@ts-ignore
        res.render('login/loginError', { msg: req.session.messages[req.session.messages.length - 1] });
    }
    signupOk(req, res) {
        //@ts-ignore
        res.render('login/signupOk');
    }
    signupError(req, res) {
        //@ts-ignore
        res.render('login/signupError', { msg: req.session.messages[req.session.messages.length - 1] });
    }
    logout(req, res) {
        //@ts-ignore
        const nombre = req.session.passport.user.email;
        req.session.destroy(function (err) {
            res.render('login/logout', { nombre: nombre });
        });
    }
    info(req, res) {
        res.send({
            args: process.argv.slice(2).join(" - "),
            OSName: process.platform,
            nodeVersion: process.version,
            usageOfMemory: process.memoryUsage(),
            execPath: process.execPath,
            PID: process.pid,
            folder: process.cwd(),
            CPUs: os_1.default.cpus().length,
        });
    }
}
ViewsController.listProd = [];
exports.default = new ViewsController();
