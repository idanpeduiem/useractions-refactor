import {UserActionResponse} from "../index";
import fetcher from "../../services/fetcher";

export default {
    Mutation: {
        createTrackUserAction: async (): Promise<UserActionResponse> => {
            return fetcher.executeUserAction()
        }
    }
}
