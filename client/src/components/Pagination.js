import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../redux/todoSlice';

function Pagination({ totalPages }) {
  const currentPage = useSelector((state) => state.todos.currentPage);
  const dispatch = useDispatch();

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <div className="flex justify-center space-x-2 mt-8">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          disabled={page === currentPage}
          className={`px-3 py-1 rounded ${
            page === currentPage
              ? 'bg-blue-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;