import { useTodos } from '../contexts/useTodo';
import { useFilter } from '../contexts/useFilter';
import { TodoItem } from './TodoItem';
import { FilterButtons } from './FilterButtons';
import { useTheme } from '../contexts/useTheme';

export const TodoList = () => {
  const { todos, clearCompleted } = useTodos();
  const { filter } = useFilter();
  const { theme } = useTheme();

  const filteredTodos = todos.filter(todo =>
    filter === 'all' ? true : filter === 'active' ? !todo.completed : todo.completed
  );

  const incompleteCount = todos.filter(todo => !todo.completed).length;
  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <FilterButtons />
      </div>

      <div>
        {filteredTodos.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks found.</p>
        ) : (
          <ul className="space-y-2">
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </div>

      <div
        className={`flex justify-between items-center text-sm ${
          theme === 'light' ? 'text-gray-700' : 'text-gray-300'
        }`}
      >
        <span>
          <strong>{incompleteCount}</strong> {incompleteCount === 1 ? 'item' : 'items'} left
        </span>
        {completedCount > 0 && (
          <button
            onClick={clearCompleted}
            className="text-blue-500 hover:underline"
          >
            Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  );
};