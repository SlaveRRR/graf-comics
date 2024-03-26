import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComics } from './types';

const initialState: IComics = {
  title: 'Название',
  description: 'Описание',
  banner: '',
  cover: ['/bg-default.svg', '/bg-default.svg', '/bg-default.svg', '/bg-default.svg'],
  focus: [],
  genres: [],
  rating: [],
  tags: [],
  toms: [],
};

const comicsSlice = createSlice({
  name: 'comics',
  initialState: initialState,
  reducers: {
    addTitleDescription(state, action: PayloadAction<Pick<IComics, 'title' | 'description'>>) {
      const { description, title } = action.payload;
      state['description'] = description;
      state['title'] = title;
    },
    addCover(state, action: PayloadAction<string[]>) {
      const { payload } = action;
      state['cover'] = payload;
    },
    addBanner(state, action: PayloadAction<string>) {
        const { payload } = action;
        state['banner'] = payload;
      },
  },
});

export const { actions, reducer } = comicsSlice;
