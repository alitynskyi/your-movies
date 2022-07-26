import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { movieAPI } from "../services/movieService";
// import movieReducer from "./movies/movieSlice";

const rootReducer = combineReducers({
  [movieAPI.reducerPath]: movieAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlewere) =>
      getDefaultMiddlewere().concat(movieAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
