import log4js from "log4js";


log4js.configure({
  appenders: { 
        errorFile: { type: "file", filename: "./build/src/logs/error.log" },
        warnFile: { type: "file", filename: "./build/src/logs/warn.log" },
        infoFile: { type: "console"},
        logError:{
            type: "logLevelFilter",
            appender: "errorFile",
            level: "error",
        },
        logWarn:{
            type: "logLevelFilter",
            appender: "warnFile",
            level: "warn",
        },
        logInfo:{
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

export default log4js