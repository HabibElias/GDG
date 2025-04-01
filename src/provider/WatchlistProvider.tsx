import {
  ActionDispatch,
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from "react";
import watchlistReducer, { watchlistAction } from "../hooks/useWatch";
import Movie from "../model/Movie";

interface watchlistContextType {
  watchlist: Movie[];
  dispatch: ActionDispatch<[action: watchlistAction]>;
}

const watchlistContext = createContext<watchlistContextType>(
  {} as watchlistContextType,
);

export const useWatchlist = () => useContext(watchlistContext);

const WatchlistProvider = ({ children }: { children: ReactNode }) => {
  const [watchlist, dispatch] = useReducer(watchlistReducer, []);
  return (
    <watchlistContext.Provider value={{ watchlist, dispatch }}>
      {children}
    </watchlistContext.Provider>
  );
};

export default WatchlistProvider;
