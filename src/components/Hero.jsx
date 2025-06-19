const Hero = () => {
  return (
    <section className="relative h-[85vh] mt-16">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/random/1920x1080/?movie')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
        <div className="text-white max-w-2xl">
          <h2 className="text-5xl font-bold mb-4">Featured Title</h2>
          <p className="text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
            Watch Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export { Hero };
