import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import type { Theme, AppProvidersProps, ThemeContextType } from '../types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: AppProvidersProps) => {
  const [theme, setTheme] = useLocalStorage<Theme>('tasknest.theme', 'light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };