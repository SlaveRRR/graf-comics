import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IComics, IFilter, Status } from './types';
import { v4 as uuidv4 } from 'uuid';
import { IChapter } from '@/components/Chapter/types';

const defaultImages = ['/bg-default.svg', '/bg-default.svg', '/bg-default.svg', '/bg-default.svg'];
const initialState: IComics = {
  title: 'Название',
  description: 'Описание',
  banner: '',
  authorName: 'Автор',
  cover: defaultImages,
  focus: [],
  genres: [],
  rating: [],
  tags: [],
  status: Status.WORK,
  toms: [
    {
      title: 'Том 0',
      tomId: uuidv4(),
      chapters: [
        {
          chapterId: uuidv4(),
          title: 'Глава 0',
          images: defaultImages,
          likes: 0,
          timeCode: '00.00.00',
          isRidden: false,
        },
      ],
    },
  ],
};

const comicsSlice = createSlice({
  name: 'comics',
  initialState: initialState,
  reducers: {
    addTitleDescription(state, action: PayloadAction<Pick<IComics, 'title' | 'description' | 'authorName'>>) {
      const { description, title, authorName } = action.payload;
      state['description'] = description;
      state['title'] = title;
      state['authorName'] = authorName;
    },
    addCover(state, action: PayloadAction<string[]>) {
      const { payload } = action;
      state['cover'] = payload;
    },
    addBanner(state, action: PayloadAction<string>) {
      const { payload } = action;
      state['banner'] = payload;
    },
    // switch active element
    toggleFilters(state, action: PayloadAction<IFilter>) {
      const {
        payload: { type, element },
      } = action;
      console.log(action.payload);

      const arr = state[type];
      const ind = arr.findIndex((e) => e.text === element.text);
      ind !== -1 ? arr.splice(ind, 1) : arr.unshift(element);
    },
    addTom(state) {
      state['toms'].push({
        title: 'Том 0',
        tomId: uuidv4(),
        chapters: [
          { title: 'Глава 0', images: [], chapterId: uuidv4(), likes: 0, timeCode: '00.00.00', isRidden: false },
        ],
      });
    },
    removeTom(state) {
      state['toms'].pop();
    },
    saveTomName(state, action: PayloadAction<{ tomId: string; tomName: string }>) {
      const { payload } = action;
      const tom = state.toms.find((el) => el.tomId === payload.tomId);
      tom.title = payload.tomName;
    },
    addChapter(state, action: PayloadAction<{ tomId: string }>) {
      const { payload } = action;
      const tom = state.toms.find((el) => el.tomId === payload.tomId);
      tom.chapters.push({
        title: 'Глава 0',
        images: defaultImages,
        chapterId: uuidv4(),
        likes: 0,
        timeCode: '00.00.00',
        isRidden: false,
      });
    },
    removeChapter(state, action: PayloadAction<{ tomId: string; chapter: IChapter }>) {
      const { payload } = action;
      const tom = state.toms.find((el) => el.tomId === payload.tomId);
      tom.chapters = tom.chapters.filter((el) => el.chapterId !== payload.chapter.chapterId);
    },
    saveChapterName(state, action: PayloadAction<{ chapterId: string; chapterName: string; tomId: string }>) {
      const { payload } = action;
      const tom = state.toms.find((el) => el.tomId === payload.tomId);
      const chapter = tom.chapters.find((el) => el.chapterId === payload.chapterId);
      chapter.title = payload.chapterName;
    },
    saveChapterImages(state, action: PayloadAction<{ chapterId: string; images: string[]; tomId: string }>) {
      const { payload } = action;
      const tom = state.toms.find((el) => el.tomId === payload.tomId);
      const chapter = tom.chapters.find((el) => el.chapterId === payload.chapterId);
      chapter.images = payload.images;
    },
  },
});

export const { actions, reducer } = comicsSlice;
