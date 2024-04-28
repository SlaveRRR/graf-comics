import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { reducer as comicsReducer } from './comics/comics.slice';
import { reducer as userReducer } from './user/user.slice';
import { reducer as articleReducer } from './article/article.slice';
import { api } from './api';

const reducers = combineReducers({
  comics: comicsReducer,
  article: articleReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (middleware) => middleware().concat(api.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
