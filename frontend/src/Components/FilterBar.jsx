import React, { useContext } from 'react'
import { DealsContext } from '../context/DealsContext'

const FilterBar = () => {

    const {filterOptions, handleFilter , activeFilter,} = useContext(DealsContext);


  return (
    <section className="mb-8 p-2 bg-white rounded-xl shadow-sm sticky top-[100px] z-30">
        <div className="flex justify-center items-center space-x-2 sm:space-x-4">
            {filterOptions.map(store => (
                <button
                    key={store}
                    onClick={() => handleFilter(store)}
                    className={`px-3 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-bold rounded-lg transition-all duration-300
                        ${activeFilter === store ? 'bg-indigo-600 text-white shadow-md' : 'text-gray-600 hover:bg-gray-200'}`}
                >
                    {store.charAt(0).toUpperCase() + store.slice(1)}
                </button>
            ))}
        </div>
    </section>

  )
}

export default FilterBar
