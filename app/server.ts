import 'dotenv/config'
import express from 'express'
import app from './src/app'
import minimist from "minimist";

import cluster from 'cluster'
import os from 'os'

import './src/models/logs4js'
import log4js from './src/models/logs4js';

const logError = log4js.getLogger("fileError")

const args = minimist(process.argv.slice(2));
//

const numCPU = os.cpus().length


app.set('views', __dirname + '/public/views')
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

declare module 'express-session' {
    interface SessionData {
        nombreUsuario:string
    }
}



const PORT =  args.port || process.env.PORT || 8080


const serverMode = args.mode || 'FORK'


if(serverMode=="CLUSTER"){
    if (cluster.isPrimary) {
        console.log(`I am a master ${process.pid}`);
        for (let i = 0; i < numCPU; i++) {
        cluster.fork();
        }
        cluster.on("listening", (worker, address) => {
        console.log(`${worker.process.pid} es listening in port ${address.port}`);
        });
    } else {
        app
            .listen(PORT, () => console.log(`http://localhost:${PORT} mode ${serverMode}`))
            .on('error', err => logError.error("Error al levantar el servidor " + err))
        }
}else{
    app
    .listen(PORT, () => console.log(`http://localhost:${PORT} mode ${serverMode}`))
    .on('error', err => logError.error("Error al levantar el servidor " + err))

}


    