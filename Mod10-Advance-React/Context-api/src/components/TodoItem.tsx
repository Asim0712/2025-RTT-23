import { useTodos } from '../contexts/useTodo';
import { useTheme } from '../contexts/useTheme';
import type { Props } from '../types';

export const TodoItem = ({ todo }: Props) => {
  const { toggleTodo, deleteTodo, editTodo } = useTodos();
  const { theme } = useTheme();

  return (
    <li
      className={`flex items-center justify-between p-3 rounded ${
        theme === 'light' ? 'bg-gray-100 text-gray-800' : 'bg-gray-700 text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          aria-label="Toggle Complete"
          className="w-6 h-6 min-w-6 min-h-6 rounded-full border-2 border-gray-400 flex items-center justify-center cursor-pointer overflow-hidden bg-white dark:bg-gray-800"
        >
          {todo.completed && (
            <img
              src="/greenCheck.png"
              alt="Completed"
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </button>
        <span
          className={`text-sm ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
        >
          {todo.text}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => editTodo(todo.id, prompt('Edit task:', todo.text) || todo.text)}
          aria-label="Edit"
          className="text-blue-500 hover:text-blue-700"
        >
          ✏️
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          aria-label="Delete"
          className="text-red-500 hover:text-red-700"
        >
          🗑️
        </button>
      </div>
    </li>
  );
};