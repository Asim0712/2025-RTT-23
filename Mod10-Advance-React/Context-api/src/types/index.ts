export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export type Filter = 'all' | 'active' | 'completed';

export type Theme = 'light' | 'dark';

export interface TodoItemProps {
  todo: Todo;
}

export interface AppProvidersProps {
  children: React.ReactNode;
}

export interface FilterContextProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  editTodo: (id: number, newText: string) => void;
  clearCompleted: () => void;
}

export type Action = {
  type: string;
  text?: string;
  id?: number;
  newText?: string;
};

export interface Props {
  todo: Todo;
}