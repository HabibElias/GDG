import GenreList from "../components/GenreList";
import MovieCard from "../components/MovieCard";
import useMovies from "../hooks/useMovies";
import useTrending from "../hooks/useTrending";

const MoviesPage = () => {
  const { movies, isLoading, error } = useMovies();
  const { movies: trending, isLoading: trendingIsLoading } = useTrending();

  if (error) return;

  if (isLoading)
    return (
      <div className="flex h-[80vh] w-[100%] items-center justify-center">
        <div className="size-10 animate-ping rounded-full bg-blue-500"></div>
      </div>
    );

  if (trendingIsLoading)
    return (
      <div className="flex h-[80vh] w-[100%] items-center justify-center">
        <div className="size-10 animate-ping rounded-full bg-blue-500"></div>
      </div>
    );

  return (
    <div>
      <GenreList />
      <div className="my-12 font-[poppins] opacity-45">Popular Movies</div>
      <div className="w-[100%] overflow-x-scroll overflow-y-visible px-5">
        <div className="relative inline-flex gap-5 py-4">
          {movies.map((m) => (
            <MovieCard movie={m} key={m.id} />
          ))}
        </div>
      </div>
      <div className="my-12 font-[poppins] opacity-45">Trending Movies</div>
      <div className="grid grid-cols-1 place-items-center gap-x-3 gap-y-15 md:grid-cols-2 xl:grid-cols-3">
        {trending.map((m) => (
          <MovieCard movie={m} key={m.id} />
        ))}
      </div>
      <div>
        {
          // a long footer here
        }
      </div>
    </div>
  );
};

export default MoviesPage;
