import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGOURL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error in DB Connection", err);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;