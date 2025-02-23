'use client';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';

interface Context {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext({} as Context);

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage();

  const [theme, setTheme] = useState<Theme>(() => {
    const result = getItem('theme');
    return (result as Context).theme;
  });

  useEffect(() => {
    console.log(theme);
    document.documentElement.dataset.theme = theme;
    setItem('theme', { theme });
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
