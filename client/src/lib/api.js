export async function getMovies() {
  const url = "http://localhost:3000/movies";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const movies = await response.json();

    return {
      success: true,
      movies: movies,
    };
  } catch (error) {
    console.error(error.message);

    return {
      success: false,
      message: error.message,
    };
  }
}
