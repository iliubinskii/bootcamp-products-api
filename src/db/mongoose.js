import mongoose from "mongoose";
import { MONGO_URI } from "../config/index.js";
import logger from "../logger.js";

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    logger.info("Connected to the database");
  } catch (error) {
    logger.info(error);
  }
};
