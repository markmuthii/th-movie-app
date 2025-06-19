import moviesArray from "../data/movies.json";

const MovieList = () => {
  // Fetch all our movies

  // Store the movies in state

  // Render the movies stored in state
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Latest Movies</h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-4 w-16 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-black to-transparent z-10" />
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory scrollbar-hide px-16">
            <div className="snap-start flex-none w-36 sm:w-48">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden mb-2">
                <img
                  src="https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_.jpg"
                  alt="Movie poster"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold truncate">Movie Title</h3>
              <p className="text-sm text-gray-400">2023</p>
            </div>
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
  );
};

export { MovieList };
