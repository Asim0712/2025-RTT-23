import { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodos must be used within TodoProvider');
  return context;
};