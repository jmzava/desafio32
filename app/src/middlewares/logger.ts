import { Request, Response, NextFunction } from 'express'
import '../models/logs4js'
import log4js from '../models/logs4js';

const logWarm = log4js.getLogger("fileWarn")
const logConsole = log4js.getLogger()

export const myLogger = (req: Request, res: Response, next: NextFunction) => {
    logWarm.warn("Recurso inexistente " + + req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
  };

export const myLogger2 = (req: Request, res: Response, next: NextFunction) => {
    logConsole.info("Recurso  exitoso " + req.protocol + '://' + req.get('host') + req.originalUrl);
    next();
  };