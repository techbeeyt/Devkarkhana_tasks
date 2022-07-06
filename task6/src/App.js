import React, { useEffect, useState } from 'react';
import logo from './assets/images/logo.png';
import {Routes, Route, Link} from 'react-router-dom'
import Bmi from './pages/Bmi';
import Bmr from './pages/Bmr';
import IdealWeight from './pages/IdealWeight';

const App = () => {
  const [menuShow, setMenuShow] = useState(true);
  const handleNav = (e) => {
    const menu = document.querySelector("#navigation_links");
    if(menuShow){
      menu.classList.remove('translate-x-96');
    }else{
      menu.classList.add('translate-x-96');
    }
    setMenuShow(!menuShow);
  }
  return (
    <>
      <div className="p-4 bg-slate-100 border-b flex justify-end items-center">
        <Link to="/"  className="mr-auto">
          <img src={logo} alt="logo"/>
        </Link>
        <div className="shadow-lg lg:shadow-none absolute lg:relative translate-x-96 translate-y-40 bg-white lg:bg-transparent lg:translate-x-0 lg:translate-y-0" id="navigation_links">
          <ul>
            <li className="lg:inline-block m-4 cursor-pointer"><Link to="/">BMI</Link></li>
            <li className="lg:inline-block m-4"><Link to="/bmr-calculator">BMR</Link></li>
            <li className="lg:inline-block m-4"><Link to="/ideal-weight-calculator">Ideal Weight</Link></li>
            <li className="lg:inline-block m-4"><Link to="/bmr-calculator">Calories</Link></li>
          </ul>
        </div>
        <div onClick={(e) => handleNav(e)} className="lg:hidden">
          Menu
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Bmi /> } />
        <Route path="/index.html" element={<Bmi /> } />
        <Route path="/bmi-calculator" element={<Bmi /> } />
        <Route path="/bmr-calculator" element={<Bmr /> } />
        <Route path="/ideal-weight-calculator" element={<IdealWeight /> } />
        <Route path="/calorie-calculator" element={<Bmr /> } />
      </Routes>
    </>
  );
};

export default App;
