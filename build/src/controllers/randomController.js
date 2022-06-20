"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
class RandomController {
    randoms(req, res) {
        //@ts-ignore
        let cant = req.query.cant || 10000;
        let passCant = ["" + cant + ""];
        //@ts-ignore
        // const randoms = fork( "randoms.js", [passCant]);
        const randoms = (0, child_process_1.fork)("randoms.js", passCant);
        randoms.on("message", (response) => {
            //@ts-ignore
            res.send(JSON.stringify(response));
        });
    }
}
exports.default = new RandomController();
