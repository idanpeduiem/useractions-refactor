import { getSchema } from "./graphql/schema/schema";
import { createYoga } from 'graphql-yoga'
import { createServer } from 'node:http'
import logger from "./logger/logger";

(async () => {
  const yoga = createYoga({
    schema: getSchema(),
    context: async ({request: req, params}) => {
      logger.info(`Got UserAction: ${params.operationName}`);
      return {};
    }
  })

  const server = createServer(yoga);

  await server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql')
  })
})()
