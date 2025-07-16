
import type { TaskItemProps } from "../types";
import type { TaskStatus } from "../types";


const TaskItem = ({ task, onStatusChange, onDelete }: TaskItemProps) => {
  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onStatusChange(task.id, e.target.value as TaskStatus);
  };

  const getPriorityColor = () => {
    switch (task.priority) {
      case 'high': return 'bg-red-100 border-red-500';
      case 'medium': return 'bg-yellow-100 border-yellow-500';
      case 'low': return 'bg-green-100 border-green-500';
      default: return 'bg-gray-100 border-gray-500';
    }
  };

  const getStatusColor = () => {
    switch (task.status) {
      case 'completed': return 'text-green-600';
      case 'in-progress': return 'text-blue-600';
      case 'pending': return 'text-orange-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className={`p-4 mb-4 border-l-4 rounded shadow-sm ${getPriorityColor()}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold text-lg">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
          <div className="mt-2 flex items-center gap-4">
            <span className={`text-sm font-semibold ${getStatusColor()}`}>
              {task.status.replace('-', ' ')}
            </span>
            <span className="text-sm text-gray-500">
              Due: {new Date(task.dueDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <select
            value={task.status}
            onChange={handleStatusChange}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
          <button
            onClick={() => onDelete(task.id)}
            className="bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;