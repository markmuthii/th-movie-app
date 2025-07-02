import { Link, useNavigate } from "react-router";
import { Hero } from "../components/Hero";
import { MovieList } from "../components/MovieList";
import { Navbar } from "../components/Navbar";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      console.log("Not logged in");

      navigate("/login");
    }
  }, []);

  return (
    <>
      <Hero />

      <MovieList />
    </>
  );
};

export { Home };
