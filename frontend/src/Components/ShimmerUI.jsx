import React from 'react'

const ShimmerUI = () => {
  return (
     <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="animate-pulse flex flex-col h-full">
            <div className="bg-gray-200 h-56 w-full"></div>
            <div className="p-4 flex-grow flex flex-col">
                <div className="bg-gray-200 h-6 w-1/3 rounded"></div>
                <div className="bg-gray-200 h-8 w-3/4 mt-2 rounded"></div>
                <div className="flex items-center mt-2 space-x-2">
                    <div className="bg-gray-200 h-8 w-1/2 rounded"></div>
                    <div className="bg-gray-200 h-6 w-1/3 rounded"></div>
                </div>
                <div className="bg-gray-300 h-12 w-full rounded-lg mt-4"></div>
            </div>
        </div>
    </div>
  )
}

export default ShimmerUI
