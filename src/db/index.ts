import { drizzle, type PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { advocateData } from "./seed/advocates";

let db: PostgresJsDatabase | null = null;

const getDb = () => {
  if (db) return db as any;
  if (!process.env.DATABASE_URL) {
    console.error("DATABASE_URL is not set - using in-memory mock DB");
    // Minimal mock compatible with routes
    return {
      select: () => ({
        from: () => advocateData,
      }),
      insert: () => ({
        values: () => ({
          returning: async () => advocateData,
        }),
      }),
    } as any;
  }
  const client = postgres(process.env.DATABASE_URL);
  db = drizzle(client);
  return db;
};

export default getDb();
