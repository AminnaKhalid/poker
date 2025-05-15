"use client";

import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";

const Pagination = () => {
  return (
    <div className="py-6 px-4 sm:px-6 bg-white border-t border-gray-200 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap text-sm">
        {/* Page info - Static */}
        <div className="text-gray-600">
          Showing <span className="font-medium">1</span> to{" "}
          <span className="font-medium">7</span> of{" "}
          <span className="font-medium">153</span> results
        </div>

        {/* Page controls - Static */}
        <div className="flex items-center flex-wrap gap-1">
          <button
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button className="w-8 h-8 text-xs rounded-md bg-black text-white">
            1
          </button>
          <button className="w-8 h-8 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
            2
          </button>
          <button className="w-8 h-8 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
            3
          </button>
          <span className="px-2">...</span>
          <button className="w-8 h-8 text-xs rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100">
            10
          </button>

          <button
            className="p-2 rounded-md border border-gray-300 hover:bg-gray-50"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Items per page - Static */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Show</span>
          <div className="relative">
            <select
              className="appearance-none pl-3 pr-8 py-1.5 border border-gray-300 rounded-md bg-white text-sm cursor-pointer"
              defaultValue="10"
            >
              <option value="10">10 entries</option>
              <option value="20">20 entries</option>
              <option value="50">50 entries</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
