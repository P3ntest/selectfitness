import { db } from "./db";
import { publicProcedure, router } from "./trpc";

export const appRouter = router({
  userList: publicProcedure.query(async () => {
    return await db.query.users.findMany();
  }),
});
