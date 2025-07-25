import React from 'react'

const Pagination = ({currentPage, totalPages, onPageChange}) => {
  return (
    <div className='flex items-center justify-center space-x-4 my-8'>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className='px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'>Previous</button>
        <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className='px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'>Next</button>
    </div>
  )
}

export default Pagination
