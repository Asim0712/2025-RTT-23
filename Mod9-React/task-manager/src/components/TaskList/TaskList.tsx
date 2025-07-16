import type { TaskListProps } from '../types';
import TaskItem from '../TaskItem/TaskItem';

const TaskList = ({ tasks, onStatusChange, onDelete }: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No tasks found. Add some tasks to get started!
      </div>
    );
  }

  return (
    <div className="divide-y">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={onStatusChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;