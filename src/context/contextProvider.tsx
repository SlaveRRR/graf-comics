'use client';
import { FilterItem } from '@/types/filter.type';
import React, { FC, useMemo, useState } from 'react';

interface IContext {
  activeLoader: boolean;
  setActiveLoader: React.Dispatch<React.SetStateAction<boolean>>;

  activeBurger: boolean;
  setActiveBurger: React.Dispatch<React.SetStateAction<boolean>>;

  activeAvatar: boolean;
  setActiveAvatar: React.Dispatch<React.SetStateAction<boolean>>;

  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;

  activeFilters: FilterItem[];
  setFilters: React.Dispatch<React.SetStateAction<FilterItem[]>>;

  visibleMenu: boolean;
  setVisibleMenu: React.Dispatch<React.SetStateAction<boolean>>;

  toggleFilters: ({ text, colorClass }) => void;

  activeBookMarks: boolean;
  setActiveBookMarks: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ctx = React.createContext<IContext>({} as IContext);

type Props = {
  children: React.ReactNode;
};
const ContextProvider: FC<Props> = ({ children }) => {
  // loader сайта
  const [activeLoader, setActiveLoader] = useState<boolean>(false);

  // burger меню
  const [activeBurger, setActiveBurger] = useState<boolean>(false);

  // модалка авторизации/регистрации
  const [activeModal, setActiveModal] = useState<boolean>(false);

  // правое боковое меню под телефоны
  const [activeAvatar, setActiveAvatar] = useState<boolean>(false);

  // примененные фильтры
  const [activeFilters, setFilters] = useState<FilterItem[]>([]);

  // видимость меню в режиме чтения
  const [visibleMenu, setVisibleMenu] = useState<boolean>(true);

  // меню закладок
  const [activeBookMarks, setActiveBookMarks] = useState<boolean>(false);

  const toggleFilters = (val: any) => {
    const ind = activeFilters.findIndex((e) => e.text === val.text);
    ind === -1 ? setFilters((prev) => [val, ...prev]) : setFilters((prev) => prev.filter((el) => el.text !== val.text));
  };

  const obj = useMemo(
    () => ({
      activeLoader,
      setActiveLoader,
      activeBurger,
      setActiveBurger,
      activeModal,
      setActiveModal,
      activeAvatar,
      setActiveAvatar,
      activeFilters,
      setFilters,
      visibleMenu,
      setVisibleMenu,
      toggleFilters,
      activeBookMarks,
      setActiveBookMarks,
    }),
    [activeLoader, activeBurger, activeModal, activeAvatar, activeFilters, visibleMenu, activeBookMarks]
  );
  return <ctx.Provider value={obj}>{children}</ctx.Provider>;
};

export default ContextProvider;
