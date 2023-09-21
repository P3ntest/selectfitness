import { publicProcedure, router } from "./trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import express from "express";
import morgan from "morgan";

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    return ["hey", "world"];
  }),
});

const middleware = createExpressMiddleware({
  router: appRouter,
});

const server = express();
server.use(morgan("dev"));
server.use("/trpc", middleware);

server.listen(3000);
