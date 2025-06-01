/* eslint-disable no-undef */
import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}.local`});

export const { 
    PORT, NODE_ENV, 
    DB_URI, 
    JWT_SECRET, JWT_EXPIRES_IN,
    DB_DATABASE,
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_TOKEN, QSTASH_URL,
    QSTASH_CURRENT_SIGNING_KEY, QSTASH_NEXT_SIGNING_KEY,
    SERVER_URL,
    EMAIL_HOST, EMAIL_PORT, EMAIL_USER, EMAIL_PASSWORD, EMAIL_TO,
} = process.env;