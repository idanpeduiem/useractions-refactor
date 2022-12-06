import {ConfigType} from "./settings";

export const configDev: ConfigType = {
    server: {
        port: 4000
    },
    fetcherSettings: {
        host: "localhost",
        port: 3000
    },
    loggerSettings: {
        appName: "bluetorch-useractions",
        host: "splunk-host",
        port: 1234,
        level: "info",
        logToConsole: true,
    }
}
