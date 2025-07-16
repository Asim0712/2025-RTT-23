import { createContext, useState } from 'react';
import type { Filter, AppProvidersProps } from '../types';
import type { FilterContextProps } from "../types"

const FilterContext = createContext<FilterContextProps>({
  filter: 'all',
  setFilter: () => {},
});

export const FilterProvider = ({ children }: AppProvidersProps) => {
  const [filter, setFilter] = useState<Filter>('all');

  return (
    <FilterContext.Provider value={{ filter, setFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterContext };