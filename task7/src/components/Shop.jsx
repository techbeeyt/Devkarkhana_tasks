import React from 'react';
import items from '../fakeData/items';
import { add } from '../store/cart';
import { useDispatch } from 'react-redux'
import AddToCartButton from './AddToCartButton';

const Shop = () => {
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(add(item));
    }
    return (
        <>
            <div className="bg bg-blue-50 p-2 border-b border-gray-300">
                <h1 className="text-xl font-bold">All Items</h1>
            </div>
            <div className="">
                {
                    items.map(item =>{
                        return (
                            <div key={item.productID} className="p-4 border-b border-gray-300 flex justify-start items-center">
                                <div className="relative w-28 h-28 rounded-md mr-4 bg-slate-300 overflow-hidden flex-shrink-0">
                                    <div className="absolute text-3xl font-extrabold text-gray-400 p-1 -rotate-45 -translate-y-2">{item.productName}</div>
                                    <div className="absolute top-0 right-0 bg-red-600 px-2 text-white text-sm">-{item.discount}</div>

                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-semibold">{item.productName}</h1>
                                    <div>
                                        <span className="text-gray-500">Price: </span>
                                        <span> ${item.price}</span>
                                    </div>
                                    <AddToCartButton eventClick={addToCart} item={item}/>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );
};

export default Shop;