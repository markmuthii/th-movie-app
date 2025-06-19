import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";
import { Navbar } from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <MovieList />
    </>
  );
};

export { Home };
