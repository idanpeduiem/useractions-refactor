import {configProd} from "./config.prod";
import {configDev} from "./config.dev";

export interface ConfigType {
    server: {
        port: number,
    },
    fetcherSettings: {
        host: string,
        port: number,
    },
    loggerSettings: {
        appName: string,
        host: string,
        port: number,
        level: string,
        logToConsole: boolean,
    },
}

const nodeEnv = process.env.NODE_ENV || 'dev';
const settings = nodeEnv.includes('prod')? configProd: configDev;

export default settings;
