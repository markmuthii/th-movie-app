import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
});

const Movie = model("Movie", movieSchema);

export { Movie };
