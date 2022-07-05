import React from 'react';
import { useSelector } from 'react-redux';

const AddToCartButton = ({eventClick, item}) => {
    const carts = useSelector(state => state.cart.carts);
    const added = carts.some(c => c.productID === item.productID);
    const clickHandle = (e) => {
        const span = e.target.children;
        span[0].classList.replace('w-0', "w-full");
        span[1].innerHTML = `Added to cart`;
        span[1].classList.add('text-blue-800');
        eventClick(item);
    }
    return (
        <>
            {
                added ? 
                (
                    <button className="relative px-5 py-2 rounded-md bg-blue-200  text-blue-800 group overflow-hidden w-36">
                        <span className="absolute w-0 transition-all ease-out duration-300 h-full bg-blue-100 left-0 top-0 pointer-events-none"></span>
                        <span className="relative transition-all ease-out duration-300 pointer-events-none">Added to cart</span>
                    </button>
                )
                : (
                    <button className="relative px-5 py-2 rounded-md bg-blue-600  text-white group overflow-hidden w-36" onClick={clickHandle}>
                        <span className="absolute w-0 transition-all ease-out duration-300 h-full bg-blue-100 left-0 top-0 pointer-events-none"></span>
                        <span className="relative transition-all ease-out duration-300 pointer-events-none">Add to cart</span>
                    </button>
                )
            }
        </>
    );
};

export default AddToCartButton;