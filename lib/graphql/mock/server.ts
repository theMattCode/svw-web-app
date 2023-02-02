import { setupServer, SetupServerApi } from "msw/node";

function setupGraphQLServer(): SetupServerApi {
  return setupServer();
}

const server: SetupServerApi = setupGraphQLServer();

export default server;
