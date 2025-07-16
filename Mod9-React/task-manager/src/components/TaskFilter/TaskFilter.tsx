import type { TaskFilterProps } from '../types';

const TaskFilter = ({ onFilterChange }: TaskFilterProps) => {
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      [name]: value || undefined,
    });
  };

  return (
    <div className="flex gap-4 mb-6 p-4 bg-gray-50 rounded">
      <div>
        <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
          Status
        </label>
        <select
          id="status"
          name="status"
          onChange={handleFilterChange}
          className="border rounded px-3 py-2 w-40"
        >
          <option value="">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div>
        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          onChange={handleFilterChange}
          className="border rounded px-3 py-2 w-40"
        >
          <option value="">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
};

export default TaskFilter;