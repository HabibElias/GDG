import MovieCard from "../components/MovieCard";
import { useWatchlist } from "../provider/WatchlistProvider";

const Watchlist = () => {
  const { watchlist } = useWatchlist();

  if (watchlist.length !== 0)
    return (
      <div className="grid grid-cols-1 place-items-center gap-x-3 gap-y-15 md:grid-cols-2 xl:grid-cols-3">
        {watchlist.map((m) => (
          <MovieCard movie={m} watchListed={true} key={m.id} />
        ))}
      </div>
    );
  else
    return (
      <div className="grid h-80 grid-cols-1 place-items-center font-[poppins] font-bold tracking-tighter">
        No Watch listed Movie
      </div>
    );
};

export default Watchlist;
