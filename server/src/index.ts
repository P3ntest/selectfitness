import { config } from "dotenv";
config();
import "./db";

import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import morgan from "morgan";
import { appRouter } from "./router";

export { appRouter };

const middleware = createExpressMiddleware({
  router: appRouter,
});

const server = express();
server.use(morgan("dev"));
server.use("/trpc", middleware);

server.listen(3000);
