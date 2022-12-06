import { makeExecutableSchema } from "@graphql-tools/schema";
import { GraphQLSchema } from "graphql";
import { IResolvers } from "@graphql-tools/utils";
import { loadFilesSync } from "@graphql-tools/load-files";
import { type } from "../types/query"
import { resolver } from "../resolvers/query"

export const getSchema = async (): Promise<GraphQLSchema> => {
  const typeDefs = loadFilesSync(
    `${__dirname}
    /src/graphql/types/**/*.ts
  `,
    { recursive: true }
  );
  const resolvers = loadFilesSync<IResolvers>(
    `${__dirname}
    /src/graphql/resolvers/**/*.ts
  `,
    { recursive: true }
  );

  return makeExecutableSchema({
    typeDefs: [type],
    resolvers: [resolver],
  });
};
