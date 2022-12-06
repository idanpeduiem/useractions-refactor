import {gql} from "graphql-tag";

export default gql`
    type UserActionResponse {
        message: String!
        result: String
    }
`
