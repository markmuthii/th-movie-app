const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Moovee
        </h1>
        <div className="relative w-full max-w-xl mx-4">
          <input
            type="search"
            placeholder="Search movies & shows..."
            className="w-full px-4 py-2 rounded-full bg-gray-800 text-white focus:ring-2 focus:ring-purple-600 focus:outline-none"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
