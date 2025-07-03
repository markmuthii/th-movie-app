import { Link } from "react-router";

const MovieCard = ({ movie }) => {
  console.log(movie);

  return (
    <div className="snap-start flex-none w-36 sm:w-48">
      <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
        <img
          src={movie.image}
          alt="Movie poster"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="font-semibold truncate">{movie.title}</h3>
      <p className="text-sm text-gray-400">{movie.year}</p>

      <Link to={`/movie/${movie.id}`}>View Details</Link>
    </div>
  );
};

export { MovieCard };
