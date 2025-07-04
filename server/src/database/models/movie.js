// This file defines the Movie model schema for MongoDB using Mongoose
import { Schema, model } from "mongoose";

// Define the schema for a Movie document
const movieSchema = new Schema({
  // URL or path to the movie's image/poster
  image: {
    type: String,
    required: true,
  },
  // Title of the movie
  title: {
    type: String,
    required: true,
  },
  // Release year of the movie
  year: {
    type: String,
    required: true,
  },
  // Short description or overview of the movie
  overview: {
    type: String,
    required: true,
  },
});

// Create the Movie model from the schema
const Movie = model("Movie", movieSchema);

// Export the Movie model to be used elsewhere in the application
export { Movie };
