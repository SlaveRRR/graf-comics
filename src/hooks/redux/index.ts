'use client';
import { useMemo } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { bindActionCreators } from '@reduxjs/toolkit';
import { actions as comicsActions } from '@/store/comics/comics.slice';
import { actions as userActions } from '@/store/user/user.slice';
const rootActions = {
  ...comicsActions,
  ...userActions,
};

export const useAppDispatch = () => useDispatch<AppDispatch>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActions = () => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
};
