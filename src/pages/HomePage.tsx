const HomePage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-5 text-center font-[poppins]">
      <h1 className="mb-4 text-3xl text-gray-800 dark:text-white">Welcome to MovieList</h1>
      <p className="mb-8 max-w-xl text-lg text-gray-600 dark:text-gray-500">
        Discover your favorite movies, explore genres, and stay updated with the
        latest releases!
      </p>
      <button className="cursor-pointer rounded bg-linear-45 from-yellow-400 to-yellow-200 px-5 py-2 text-black transition duration-300 hover:scale-103 active:scale-101">
        Explore Now
      </button>
    </div>
  );
};

export default HomePage;
