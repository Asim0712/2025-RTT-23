import { useState } from 'react';
import  type { Task, TaskStatus } from './types';
import TaskList from './components/TaskList/TaskList';
import TaskFilter from './components/TaskFilter/TaskFilter';


const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Complete project proposal',
    description: 'Write and submit the project proposal document',
    status: 'completed',
    priority: 'high',
    dueDate: '2023-06-01',
  },
  {
    id: '2',
    title: 'Implement user authentication',
    description: 'Set up JWT authentication for the application',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2023-06-15',
  },
  {
    id: '3',
    title: 'Design database schema',
    description: 'Create ER diagrams and schema for the database',
    status: 'pending',
    priority: 'medium',
    dueDate: '2023-06-10',
  },
  {
    id: '4',
    title: 'Write unit tests',
    description: 'Create unit tests for core functionality',
    status: 'pending',
    priority: 'low',
    dueDate: '2023-06-20',
  },
];

const App = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }>({});

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const handleFilterChange = (newFilters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => {
    setFilters(newFilters);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filters.status && task.status !== filters.status) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    return true;
  });

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Task Manager</h1>
      <TaskFilter onFilterChange={handleFilterChange} />
      <TaskList
        tasks={filteredTasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default App;