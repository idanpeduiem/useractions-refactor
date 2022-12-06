import { ApolloServer } from "@apollo/server";
import express from "express";
import http from "http";
import { getSchema } from "./graphql/schema/schema";
import {ApolloServerPluginDrainHttpServer} from "@apollo/server/plugin/drainHttpServer";
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import {json} from 'body-parser';
import settings from "./config/settings";
import logger from "./logger/logger";

(async () => {

  const app = express();
  const httpServer = http.createServer(app);
  const schema = await getSchema();

  const server = new ApolloServer<{}>({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({httpServer})]
  });

  await server.start();

  app.use(
      cors(),
      json(),
      expressMiddleware(server, {
        context: async ({req}) => {
          logger.info(`Got UserAction: ${req.body.operationName}`);
          logger.info(`req: ${req}`);
          return {};
        }
      }),
  );

  await new Promise((resolve) => {
    resolve(httpServer.listen({ port: settings.server.port }))
  });

  console.log(`🚀 Server ready at http://localhost:4000`);
})();


