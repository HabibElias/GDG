import Movie from "../model/Movie";

interface AddWatchlist {
  type: "ADD";
  payload: {
    movie: Movie;
  };
}

interface RemoveWatchlist {
  type: "REMOVE";
  payload: {
    id: number;
  };
}

export type watchlistAction = AddWatchlist | RemoveWatchlist;

const watchlistReducer = (state: Movie[], action: watchlistAction) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload.movie];

    case "REMOVE":
      return state.filter((m) => m.id !== action.payload.id);

    default:
      return state;
  }
};

export default watchlistReducer;
