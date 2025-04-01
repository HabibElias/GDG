import { Clock, Trash } from "lucide-react";
import { useMemo, useState } from "react";
import Movie from "../model/Movie";
import { useWatchlist } from "../provider/WatchlistProvider";

interface Prop {
  movie: Movie;
  watchListed?: boolean;
}

const MovieCard = ({ movie: m, watchListed }: Prop) => {
  const [isMore, setIsMore] = useState<boolean>(false);
  const handleMore = () => setIsMore(!isMore);

  const { watchlist, dispatch } = useWatchlist();

  const isInWatchlist = useMemo(() => {
    return Boolean(watchlist.find((movie) => movie.id === m.id));
  }, [watchlist]);

  const handleWatchlist = () => {
    isInWatchlist
      ? dispatch({ type: "REMOVE", payload: { id: m.id } })
      : dispatch({ type: "ADD", payload: { movie: m } });
  };

  if (!watchListed)
    return (
      <div className="relative z-10 flex w-100 flex-col overflow-clip p-3 font-[poppins] ring-1 shadow-[10px_10px_20px_-10px] shadow-[#ffffff57] ring-[#ffffff57] duration-200 hover:z-20 hover:scale-101">
        <div
          className="absolute top-0 left-0 -z-10 h-[100%] w-[100%] opacity-50 blur-[2px]"
          style={{
            background: `${
              m.poster_path
                ? `url(https://image.tmdb.org/t/p/w500${m.backdrop_path})`
                : "url(src/assets/placeholder.webp)"
            }`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="overflow-clip">
          <img
            src={
              m.poster_path
                ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
                : "src/assets/placeholder.webp"
            }
            className={`mx-auto aspect-auto w-[70%] flex-2 cursor-pointer bg-[url(src/assets/placeholder.webp)] bg-no-repeat duration-200 hover:scale-110`}
          />
        </div>
        <div className="my-3 flex-1 text-center text-xl font-bold tracking-tight">
          {m.original_title}
        </div>
        <div className="flex-1 text-center text-xs">
          <p className="opacity-80">
            {!isMore ? m.overview.slice(0, 200) + "..." : m.overview}
          </p>
          <button onClick={handleMore} className="cursor-pointer opacity-100">
            {isMore ? "less" : "more"}
          </button>

          <div className="grid place-content-center">
            <button
              onClick={handleWatchlist}
              className="mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-linear-45 from-yellow-400 to-yellow-200 px-3 py-2 text-xs text-black duration-100 ease-in hover:scale-103 active:scale-101"
            >
              {!isInWatchlist ? (
                <>
                  <Clock />
                  Add to watchlist
                </>
              ) : (
                <>
                  <Trash />
                  Remove from watchlist
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  else {
    return (
      <div className="relative z-10 flex w-100 flex-col overflow-clip p-3 font-[poppins] ring-1 shadow-[10px_10px_20px_-10px] shadow-[#ffffff57] ring-[#ffffff57] duration-200 hover:z-20 hover:scale-101">
        <div
          className="absolute top-0 left-0 -z-10 h-[100%] w-[100%] opacity-40"
          style={{
            background: `${
              m.poster_path
                ? `url(https://image.tmdb.org/t/p/w500${m.backdrop_path})`
                : "url(src/assets/placeholder.webp)"
            }`,
            filter: "blur(5px)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="overflow-clip">
          <img
            src={
              m.poster_path
                ? `https://image.tmdb.org/t/p/w500${m.backdrop_path}`
                : "src/assets/placeholder.webp"
            }
            className={`mx-auto aspect-auto w-[70%] flex-2 cursor-pointer bg-[url(src/assets/placeholder.webp)] bg-no-repeat duration-200 hover:scale-110`}
          />
        </div>
        <div className="my-3 flex-1 text-center text-xl font-bold tracking-tight">
          {m.original_title}
        </div>
        <div className="flex-1 text-center text-xs">
          <p className="opacity-80">
            {!isMore ? m.overview.slice(0, 200) + "..." : m.overview}
          </p>
          <button onClick={handleMore} className="cursor-pointer opacity-100">
            {isMore ? "less" : "more"}
          </button>

          <div className="grid place-content-center">
            <button
              onClick={handleWatchlist}
              className="mt-4 flex cursor-pointer items-center gap-2 rounded-full bg-linear-45 from-yellow-400 to-yellow-200 px-3 py-2 text-xs text-black duration-100 ease-in hover:scale-103 active:scale-101"
            >
              {!isInWatchlist ? (
                <>
                  <Clock />
                  Add to watchlist
                </>
              ) : (
                <>
                  <Trash />
                  Remove from watchlist
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
};

export default MovieCard;
