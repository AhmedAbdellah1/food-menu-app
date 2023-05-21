import React from 'react'
import { categories } from '../data/data.js';

const Category = () => {
    // console.log(categories);
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-4xl font-bold text-center text-orange-600'>Top Rated Menu Items</h1>
            {/* categories  */}
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-6' >
                {categories.map((category) => {
                    return (
                        <div key={category.id} className='bg-gray-100 rounded-lg p-4 flex  justify-between items-center'>
                            <h2 className='font-bold sm:text-xl'>{category.name}</h2>
                            <img src={category.image} alt={category.name} className='w-20' />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Category;