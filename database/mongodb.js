/* eslint-disable no-undef */
import mongoose from "mongoose";
import { DB_URI, NODE_ENV, DB_DATABASE } from "../config/env.js";

// Validate required variables
if (!DB_URI || !DB_DATABASE) {
  throw new Error(
    'Please define both DB_URI and DB_DATABASE environment variables inside .env<development/production>.local'
  );
}

// DB Connection
const dbConnection = async () => {
  try {
    const uri = `${DB_URI}/${DB_DATABASE}`;

    await mongoose.connect(uri, {
      dbName: DB_DATABASE, // explicitly specify the DB name as a fallback
    });

    console.log(`Connected to MongoDB: ${DB_DATABASE} in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default dbConnection;
