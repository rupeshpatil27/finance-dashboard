import { hc } from "hono/client";

const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const client = hc(baseUrl);
