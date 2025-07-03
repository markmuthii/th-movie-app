import { Link, useParams } from "react-router";
import { Hero } from "../components/Hero";
import { useEffect, useState } from "react";
import { getMovies } from "../lib/api";

const Movie = () => {
  const { movieID } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const { movies } = await getMovies();

        setMovie(movies.find((movie) => movie.id == movieID));

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovie();
  }, []);

  // const movie = moviesArray.find((movie) => movie.id == movieID);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <Hero title={movie.title} overview={movie.overview} />
      )}

      <Link to="/" className="bg-green-600 text-white px-6 py-1 cursor-pointer">
        Back to Home
      </Link>
    </>
  );
};

export { Movie };
