import {gql} from "graphql-tag";
import { DocumentNode } from "graphql"

export const type: DocumentNode = gql`
    type Query {
        root: String    
    }
`
