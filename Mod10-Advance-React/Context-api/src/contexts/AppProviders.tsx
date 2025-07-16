import { TodoProvider } from './TodoContext';
import { FilterProvider } from './FilterContext';
import { ThemeProvider } from './ThemeContext';
import type { AppProvidersProps } from '../types';

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ThemeProvider>
    <TodoProvider>
      <FilterProvider>{children}</FilterProvider>
    </TodoProvider>
  </ThemeProvider>
);