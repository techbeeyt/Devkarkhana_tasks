import React from 'react';
import Header from './components/Header';
import {Routes, Route } from 'react-router-dom';
import Shop from './components/Shop';
import Cart from './components/Cart';

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
};

export default App;