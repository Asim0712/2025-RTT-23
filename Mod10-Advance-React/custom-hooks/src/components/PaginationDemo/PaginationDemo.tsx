import { useState } from "react";
import { usePagination } from "../../hooks/usePagination";

export function PaginationDemo() {
  const totalItems = 123;
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const items = [];

  for (let i = 1; i <= totalItems; i++) {
    items.push("Item " + i);
  }

  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage
  } = usePagination(totalItems, itemsPerPage);

  const currentItems = items.slice(startIndex, endIndex + 1);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  function handleItemsPerPageChange(event: React.ChangeEvent<HTMLSelectElement>) {
  setItemsPerPage(Number(event.target.value));
  setPage(1);
  }

  return (
    <div className="p-4 max-w-3xl mx-auto border rounded">
      <h2 className="text-xl font-bold text-center mb-4">Pagination Demo</h2>

      <div className="flex justify-between items-center mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="font-medium">Items per page:</span>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border rounded px-2 py-1"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="italic">
          Total Items: <span className="font-medium not-italic">{totalItems}</span>
        </div>
      </div>

      <ul className="mb-4 space-y-1 px-2">
        {currentItems.map(function (item, index) {
          return (
            <li key={index} className="border p-2 rounded">
              {index + startIndex + 1}. {item}
            </li>
          );
        })}
      </ul>

      <div className="flex items-center justify-center gap-6 mb-4">
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={prevPage}
          disabled={!canPrevPage}
        >
          Previous
        </button>

        <div className="flex items-center gap-2">
          <span>Page</span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={currentPage}
            onChange={function (event) {
              const value = Number(event.target.value);
              if (value >= 1 && value <= totalPages) {
                setPage(value);
              }
            }}
            className="w-16 border rounded text-center"
          />
          <span>of {totalPages}</span>
        </div>

        <button
          className="px-3 py-1 bg-blue-500 text-white rounded disabled:opacity-50"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>

      <div className="text-center mb-4">
        Showing items {startIndex + 1} - {endIndex + 1} (Total on this page:{" "}
        {itemsOnCurrentPage})
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap justify-center gap-2">
          {pageNumbers.map(function (number) {
            return (
              <button
                key={number}
                onClick={function () {
                  setPage(number);
                }}
                className={
                  number === currentPage
                    ? "px-3 py-1 bg-blue-500 text-white rounded"
                    : "px-3 py-1 bg-gray-100 rounded hover:bg-gray-200"
                }
              >
                {number}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}