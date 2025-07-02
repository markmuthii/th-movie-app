import { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { getMovies } from "../lib/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch all our movies
  useEffect(() => {
    // getMovies()
    //   .then((data) => {
    //     if (data.success) {
    //       // We have our movies
    //       setMovies(data.movies);
    //     } else {
    //       // We have an error message
    //       setError(data.message);
    //     }
    //   })
    //   .catch((error) => {
    //     // Handle error here
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    const fetchMovies = async () => {
      try {
        const { movies } = await getMovies();

        setMovies(movies);

        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovies();
  }, []);

  // Store the movies in state

  // Render the movies stored in state
  return (
    <>
      {loading ? (
        "Loading Movies..."
      ) : (
        <section className="py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6">Latest Movies</h2>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-black to-transparent z-10" />
              <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-16">
                {movies.map((movie, i) => (
                  <MovieCard key={i} movie={movie} />
                ))}
              </div>
              <button className="scroll-left absolute left-0 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="scroll-right absolute right-0 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export { MovieList };
