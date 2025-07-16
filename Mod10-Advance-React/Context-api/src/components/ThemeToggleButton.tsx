import { useTheme } from '../contexts/useTheme';

export const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      onClick={toggleTheme}
      className={`absolute top-4 right-4 px-3 py-1 rounded text-sm transition-colors ${
        theme === 'light'
          ? 'bg-gray-700 text-white'
          : 'bg-[#fbbf24] text-gray-800'
      }`}
    >
      {theme === 'light' ? '🌙 Switch to Dark' : '☀️ Switch to Light'}
    </button>
  );
};