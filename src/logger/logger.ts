import {createBluetorchLogger} from "bluetorch-logger";
import settings from "../config/settings";

const {appName,
    host,
    port,
    level,
    logToConsole} = settings.loggerSettings;

const logger = createBluetorchLogger({
    appName,
    host,
    port,
    level: 'info',
    logToConsole,
    onSendError: (err) => console.log(`failed to connect splunk with err: ${err}`)
})

export default logger;
