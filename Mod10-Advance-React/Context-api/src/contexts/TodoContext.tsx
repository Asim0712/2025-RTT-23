import { createContext } from 'react';
import type { Todo, AppProvidersProps, TodoContextType, Action } from '../types';
import { useLocalStorage } from '../hooks/useLocalStorage';


const TodoContext = createContext<TodoContextType | undefined>(undefined);

function todoReducer(todos: Todo[], action: Action): Todo[] {
  switch (action.type) {
    case 'ADD':
      return [...todos, { id: Date.now(), text: action.text || '', completed: false }];
    case 'TOGGLE':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case 'DELETE':
      return todos.filter(todo => todo.id !== action.id);
    case 'EDIT':
      return todos.map(todo =>
        todo.id === action.id ? { ...todo, text: action.newText || '' } : todo
      );
    case 'CLEAR_COMPLETED':
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
}

export const TodoProvider = ({ children }: AppProvidersProps) => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('tasknest.todos', []);

  const dispatch = (action: Action) => {
    const updated = todoReducer(todos, action);
    setTodos(updated);
  };

  const addTodo = (text: string) => dispatch({ type: 'ADD', text });
  const toggleTodo = (id: number) => dispatch({ type: 'TOGGLE', id });
  const deleteTodo = (id: number) => dispatch({ type: 'DELETE', id });
  const editTodo = (id: number, newText: string) => dispatch({ type: 'EDIT', id, newText });
  const clearCompleted = () => dispatch({ type: 'CLEAR_COMPLETED' });

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo, editTodo, clearCompleted }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext };