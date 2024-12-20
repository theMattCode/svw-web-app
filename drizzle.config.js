import { defineConfig } from "drizzle-kit";
import { config } from "dotenv";

config({ path: [".env", ".env.local", ".env.development"] });

export default defineConfig({
  schema: "./lib/db/schema",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
});
