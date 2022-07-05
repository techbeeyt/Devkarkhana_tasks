import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {remove} from '../store/cart';

const Cart = () => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.cart.carts);
    let totalPrice = 0;
    carts.forEach(c => totalPrice += parseInt(c.price, 10));
    return (
        <>
            <div className="bg bg-blue-50 p-2 border-b border-gray-300">
                <h1 className="text-xl font-bold">Items in Cart</h1>
            </div>
            <div>
                {
                    carts.map(item =>{
                        return (
                            <div key={item.productID} className="p-4 border-b border-gray-300 flex justify-start items-center">
                                <div className="relative w-20 h-20 rounded-md mr-4 bg-slate-300 overflow-hidden flex-shrink-0">
                                    <div className="absolute text-3xl font-extrabold text-gray-400 p-1 -rotate-45 -translate-y-2">{item.productName}</div>
                                    <div className="absolute top-0 right-0 bg-red-600 px-2 text-white text-sm">-{item.discount}</div>

                                </div>
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-semibold">{item.productName}</h1>
                                    <div>
                                        <span className="text-gray-500">Price: </span>
                                        <span className="font-semibold">${item.price}</span>
                                    </div>
                                    <button className="bg-red-600 text-white rounded-md w-28 py-1" onClick={() => dispatch(remove(item.productID))}>Remove</button>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            {
                carts.length === 0 ? (
                    <div className="w-full h-60 flex justify-center items-center">
                        <span className="text-gray-700">Cart is empty</span>
                    </div>
                ) : (
                    <div className="px-10 py-4 bg-blue-200 flex justify-between items-center sticky bottom-0 z-10">
                        <h2 className="font-semibold text-gray-700">Total: ${totalPrice}</h2>
                        <button className="bg-blue-500 px-4 py-1 rounded-md text-blue-50">
                            Go to payment
                        </button>
                    </div>
            )
            }
        </>
    );
};

export default Cart;