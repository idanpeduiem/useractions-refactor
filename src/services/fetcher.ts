import {UserActionResponse} from "../graphql";
import logger from "../logger/logger";

class Fetcher {

    async executeUserAction(): Promise<UserActionResponse> {
        logger.info("userAction");
        return new Promise(resolve => resolve)
    }
}

export default new Fetcher();
