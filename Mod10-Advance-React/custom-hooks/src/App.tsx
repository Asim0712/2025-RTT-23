import { DebounceSearch } from "./components/DebounceSearch/DebounceSearch";
import { PaginationDemo } from "./components/PaginationDemo/PaginationDemo";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-10">
      <DebounceSearch />
      <PaginationDemo />
    </div>
  );
}

export default App;