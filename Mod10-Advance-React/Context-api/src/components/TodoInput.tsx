import { useState } from 'react';
import { useTodos } from '../contexts/useTodo';
import { useTheme } from '../contexts/useTheme';

export const TodoInput = () => {
  const [text, setText] = useState('');
  const { addTodo } = useTodos();
  const { theme } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim());
    setText('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center justify-between p-2 rounded border ${
        theme === 'light' ? 'bg-white text-gray-800 border-gray-300' : 'bg-gray-700 text-white border-gray-600'
      }`}
    >
      <input
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
        className={`flex-1 bg-transparent outline-none ${
          theme === 'light' ? 'placeholder-gray-500' : 'placeholder-gray-400'
        }`}
      />
      <button
        type="submit"
        className="ml-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"
      >
        Add Task
      </button>
    </form>
  );
};