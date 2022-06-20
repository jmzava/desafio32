import { fork } from "child_process";

class RandomController{
    
    randoms(req:Request, res:Response) {
        //@ts-ignore
        let cant = req.query.cant || 10000;

        let passCant = ["" + cant + ""]


        //@ts-ignore
        // const randoms = fork( "randoms.js", [passCant]);
        const randoms = fork( "randoms.js", passCant);
        randoms.on("message", (response) => {
            //@ts-ignore
            res.send(JSON.stringify(response));
    })
}
}

export default new RandomController()