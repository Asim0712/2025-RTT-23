import { useState, useEffect, type ChangeEvent } from "react";
import { useDebounce } from "../../hooks/useDebounce";

export function DebounceSearch() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    if (debouncedQuery.length > 0) {
      console.log("Searching for:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Debounce Search</h2>

      <div className="border rounded p-4">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-center bg-blue-900 text-white px-2 py-1 rounded">
            Debounce Search Demo
          </h3>
        </div>

        <p className="mb-2">
          <span className="font-semibold">Debounce Delay (ms):</span>{" "}
          <span>500</span>
        </p>

        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Type to search..."
          className="w-full border p-2 rounded mb-4"
        />

        <p className="font-bold mb-1">Current Input:</p>
        <p className="italic mb-3">
          Debounced Value (after 500ms): <span className="not-italic">{debouncedQuery}</span>
        </p>

        <p className="font-semibold">Simulated Search Results:</p>
        <p>
          {debouncedQuery.length === 0
            ? "Type to see results."
            : "Searching for: " + debouncedQuery}
        </p>
      </div>
    </div>
  );
}