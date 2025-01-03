import { Redis } from "@upstash/redis";

export const revalidate = 0;

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_URL,
    token: process.env.UPSTASH_REDIS_TOKEN
});

export {redis};