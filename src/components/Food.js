import React, { useState, useMemo } from 'react'
import { data } from '../data/data.js';

const Food = ({ searchQuery }) => {

    const [foods, setFoods] = useState(data);

    //Filter Type burgers, pizza, salads, chicken ,etc
    const filterType = (category) => {

        setFoods(data.filter((item) => { return item.category === category; }));

    };


    //Filter by price
    const filterPrice = (price) => {
        setFoods(data.filter((item) => { return item.price === price; }));
    };

    // search by name
    const filteredFoods = useMemo(() => {
        if (searchQuery) {
            return foods.filter((item) =>
                item.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        } else {
            return foods;
        }
    }, [searchQuery, foods]);

    return (
        // container
        <div className='max-w-[1640px] m-auto px-4 py-12'>

            <h1 className='text-4xl font-bold text-center text-orange-600'>Top Rated Menu Items</h1>

            {/* Filter Row */}
            <div className='flex flex-col justify-between lg:flex-row'>

                {/* Filter type */}
                <div className='mb-2 lg:mb-0'>
                    <p className='font-bold text-gray-700'>Filter Type</p>
                    <div className='mt-1 sm:flex sm:flex-wrap sm:justify-between'>
                        <button onClick={() => setFoods(data)} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'      >All</button>
                        <button onClick={() => filterType('burger')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white' >Pizza</button>
                        <button onClick={() => filterType('salad')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white' >Salads</button>
                        <button onClick={() => filterType('chicken')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                    </div>
                </div>

                {/* Filter price  */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice('$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                        <button onClick={() => filterPrice('$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='m-1 text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
                    </div>
                </div>

            </div>

            {/* Display foods */}
            <div className="grid grid-cols-1 gap-6 pt-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredFoods.length > 0 ? (
                    filteredFoods.map((item) => (
                        <div key={item.id} className='duration-300 border rounded-lg shadow-lg hover:scale-105' >
                            <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                            <div className='flex justify-between px-2 py-4'>
                                <p className='font-bold'>{item.name}</p>
                                <p> <span className='p-1 text-white bg-orange-500 rounded-full'>{item.price}</span></p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className='bg-gray-100 rounded-lg mt-4 py-10 px-4 w-[500px] font-bold'>
                        <p className=''>There Is No Food With This Name, Please Try Again</p>
                    </div>
                )}

            </div>
        </div>
    )
}
export default Food
