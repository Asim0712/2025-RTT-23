import { useFilter } from '../contexts/useFilter';

export const FilterButtons = () => {
  const { filter, setFilter } = useFilter();
  const filters: ('all' | 'active' | 'completed')[] = ['all', 'active', 'completed'];

  return (
    <div className="flex justify-center gap-4 mt-4">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded ${
            filter === f
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 dark:bg-gray-700 dark:text-white'
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};