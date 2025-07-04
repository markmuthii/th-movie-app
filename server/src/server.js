// 1. Routing

// 2. Middleware

// Import express
import express from "express";

// Import and configure dotenv so that the environment variables in the .env file can be loaded into the application
import "dotenv/config";

// Import cors
import cors from "cors";

// Import the function to connect to the MongoDB database
import { connectToDatabase } from "./database/config.js";
import { Movie } from "./database/models/movie.js";

// Call the function to connect to the database
connectToDatabase();

// Instantiate express
const app = express();

// Configure cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// Setup routes (root/home/index route)
app.get("/", async (req, res) => {
  // Get all the movies that have been saved in the database
  const movies = await Movie.find();

  res.json({
    success: true,
    movies,
  });
});

// Start the server
app.listen(3005);
