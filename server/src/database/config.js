// This file configures the MongoDB connection using Mongoose
import mongoose from "mongoose";

// Asynchronously connects to the MongoDB database using the MONGO_URL environment variable
export const connectToDatabase = async () => {
  try {
    // Attempt to connect to the database
    await mongoose.connect(process.env.MONGO_URL);

    // Log success message if connection is established
    console.log("Connected to the database");
  } catch (error) {
    // Log any connection errors and exit the process
    console.log(error);
    process.exit(1);
  }
};
