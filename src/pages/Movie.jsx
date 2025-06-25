import { Link } from "react-router";
import { Hero } from "../components/Hero";

const Movie = () => {
  return (
    <>
      <Hero />

      <Link to="/" className="bg-green-600 text-white px-6 py-1 cursor-pointer">
        Back to Home
      </Link>
    </>
  );
};

export { Movie };
