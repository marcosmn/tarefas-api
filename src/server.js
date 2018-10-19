import Hapi from "hapi";
import knex from "./config/knew";

import { root, tasks } from "./routes";

const server = new Hapi.Server({
  port: process.env.PORT || 8000
});

const init = async () => {
  server.route([root, tasks]);

  // server.start();
  await server.start();
  console.log("Server is running");
};

init();
