import { appRouter } from "./../../../server/src/index";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<typeof appRouter>();
