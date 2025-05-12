"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const Pagination = ({
  totalItems = 153,
  itemsPerPageOptions = [8, 16, 40, 80],
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page
  };

  const handleDropdownChange = (e) => {
    handlePageChange(Number(e.target.value));
  };

  const getPageButtons = () => {
    const visible = [];
    const maxVisible = 6;

    for (let i = 1; i <= Math.min(maxVisible, totalPages); i++) {
      visible.push(i);
    }

    return visible;
  };

  const getDropdownPages = () => {
    const pages = [];
    for (let i = 7; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="py-6 px-4 sm:px-6 bg-white border-t border-gray-200 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap text-sm">
        {/* Page info */}
        <div className="text-gray-600">
          Showing <span className="font-medium">{startItem}</span> to{" "}
          <span className="font-medium">{endItem}</span> of{" "}
          <span className="font-medium">{totalItems}</span> results
        </div>

        {/* Page controls */}
        <div className="flex items-center flex-wrap gap-1">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {getPageButtons().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-8 h-8 text-xs rounded-md ${
                currentPage === page
                  ? "bg-black text-white"
                  : "border border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          {totalPages > 6 && (
            <div className="relative">
              <select
                value={currentPage > 6 ? currentPage : ""}
                onChange={handleDropdownChange}
                className="appearance-none pl-2 pr-6 py-1.5 border border-gray-300 rounded-md text-sm bg-white cursor-pointer"
              >
                <option value="">More</option>
                {getDropdownPages().map((page) => (
                  <option key={page} value={page}>
                    {page}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          )}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 disabled:opacity-50"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Items per page */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Rows per page:</span>
          <div className="relative">
            <select
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
              className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 bg-white text-sm cursor-pointer"
            >
              {itemsPerPageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
