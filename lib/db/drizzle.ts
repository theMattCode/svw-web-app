import { neon, neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import { drizzle as createDrizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

neonConfig.webSocketConstructor = ws;

// Enable to work in edge environments
neonConfig.poolQueryViaFetch = true;

const client = neon(process.env.DATABASE_URL ?? "");
export const drizzle = createDrizzle({ client, schema });
