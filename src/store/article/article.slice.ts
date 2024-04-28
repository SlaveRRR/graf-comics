import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IArticle } from './types';

const initialState: IArticle = {
  title: 'Название',
  description: 'Описание',
  cover: '',
  fileName: 'Файл не выбран',
  authorName: 'Автор авторович',
  article: '',
  htmlFromFile: '',
};

const articleSlice = createSlice({
  name: 'article',
  initialState: initialState,
  reducers: {
    addTitleDescriptionArticle(state, action: PayloadAction<Pick<IArticle, 'title' | 'description'>>) {
      const { description, title } = action.payload;
      state['description'] = description;
      state['title'] = title;
    },
    addCoverArticle(state, action: PayloadAction<string>) {
      const { payload } = action;
      state['cover'] = payload;
    },
    addHtmlFromFile(state, action: PayloadAction<string>) {
      const { payload } = action;
      state['htmlFromFile'] = payload;
    },
    addFileName(state, action: PayloadAction<string>) {
      const { payload } = action;
      state['fileName'] = payload;
    },
    clearFile(state) {
      state.fileName = 'Файл не выбран';
      state.htmlFromFile = '';
    },
    addArticle(state, action: PayloadAction<string>) {
      const { payload } = action;
      state['article'] = payload;
    },
  },
});

export const { actions, reducer } = articleSlice;
