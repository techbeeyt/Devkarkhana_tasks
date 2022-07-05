import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {AiOutlineShoppingCart} from 'react-icons/ai';

const Header = () => {
    const carts = useSelector((state) => state.cart.carts);
    return (
        <div className="sticky z-10 top-0 bg-slate-200 text-gray-800 px-10 py-4 flex justify-end items-center border-b border-slate-300">
            <Link className="logo" to="/">
                <h1 className="text-3xl font-bold">E-commerce</h1>
            </Link>
            <div>
                <div className="relative">
                    <Link to="/cart"><AiOutlineShoppingCart size="25px"/></Link>
                    {
                        carts.length > 0 ? <span className="absolute -top-2 -right-2 w-4 h-4 flex justify-center items-center rounded bg-blue-500 text-white text-sm">{carts.length}</span> : null
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;