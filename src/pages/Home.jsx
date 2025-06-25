import { Link, useNavigate } from "react-router";
import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      console.log("Not logged in");

      navigate("/login");
    }
  }, []);

  return (
    <>
      <Hero />

      <Link to="/movie">Go to Single Movie page</Link>

      <MovieList />
    </>
  );
};

export { Home };
