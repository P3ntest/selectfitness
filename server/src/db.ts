import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";
import * as schema from "./schema";

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL as string, { max: 1 });
export const db = drizzle(queryClient, {
  schema,
});

migrate(db, { migrationsFolder: "drizzle" });

console.log(process.env.DATABASE_URL!);
