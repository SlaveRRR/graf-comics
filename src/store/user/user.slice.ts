import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const defaultBookMarks = ['Читаю', 'В планах', 'Прочитано', 'Брошено'];
const initialState = {
  bookmarks: defaultBookMarks,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    addBookMark(state, action: PayloadAction<string>) {
      state['bookmarks'].push(action.payload);
    },
    removeBookMark(state, action: PayloadAction<string>) {
      state['bookmarks'] = state['bookmarks'].filter((el) => el !== action.payload);
    },
  },
});

export const { actions, reducer } = userSlice;
