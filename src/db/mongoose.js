import mongoose from 'mongoose';
import { MONGO_URI } from '../config/index.js';

export const connect = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('connected to the database');
  } catch (error) {
    console.log(error);
  }
};
