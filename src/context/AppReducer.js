export default (state, action) => {
    switch (action.type) {
      case "ADD_MOVIE_TO_WATCHLIST":
        return {
          ...state,
          watchlist: [action.payload, ...state.watchlist],
        };
      case "REMOVE_MOVIE_FROM_WATCHLIST":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => {
              return movie.id !== action.payload;
            }
          ),
        };
      case "ADD_MOVIE_TO_FAVORITES":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (movie) => movie.id !== action.payload.id
          ),
          favorites: [action.payload, ...state.favorites],
        };
      case "MOVE_TO_WATCHLIST":
        return {
          ...state,
          favorites: state.favorites.filter(
            (movie) => movie.id !== action.payload.id
          ),
          watchlist: [action.payload, ...state.watchlist],
        };
      case "REMOVE_FROM_FAVORITES":
        return {
          ...state,
          favorites: state.favorites.filter((movie) => movie.id !== action.payload),
        };
      default:
        return state;
    }
  };
  