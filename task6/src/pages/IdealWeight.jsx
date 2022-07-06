import React, { useState } from 'react';

const IdealWeight = () => {
    const [height, setHeight] = useState(170);
    const [unit, setUnit] = useState({height: 'm', weight: 'kg'});
    const [result, setResult] = useState(23);

    let temp_height, temp_weight;
    const calculate = () => {
        convert();
        let idealWeight = temp_weight / (temp_height*temp_height);
        setResult(idealWeight.toFixed(2));
    }
    const convert = () => {
        if(unit.height === 'm'){
            temp_height = height * 100;
        }
        if(unit.height === 'cm'){
            temp_height = height;
        }
        if(unit.height === 'ft'){
            temp_height = height * 30.48;
        }
        
    }
    const changeUnit = (e) => {
        let temp = unit;
        temp[e.target.name] = e.target.value;
        setUnit(temp);
    }
    return (
        <div className="mx-8 mt-8 pb-8 lg:mx-52 shadow-md rounded-md">
            <div className="bg-neutral-700 p-4 m-0">
                <h1 className="text-lg font-semibold text-gray-100">Ideal Weight Calculator</h1>
            </div>
            <div className="py-4 lg:px-6 flex flex-col lg:flex-row gap-y-20 lg:gap-4 justify-center items-center lg:justify-between lg:items-start lg:border m-2 lg:m-10">
                <div className="flex flex-col justify-center items-start gap-5 w-full lg:w-1/2">
                    <div className="flex gap-5 justify-start items-center">Gender:
                        <select onChange={(e) => changeUnit(e)} name="weight" className="p-2 bg-green-100 rounded-md w-52 flex-grow">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    
                    <div className="flex gap-5 justify-start items-center">Height 
                        <select onChange={(e) => changeUnit(e)} name="height" className="bg-slate-100 p-2 rounded-md">
                            <option value="m">m</option>
                            <option value="cm">cm</option>
                            <option value="ft">ft</option>
                        </select>
                    </div>
                    <input onChange={(e) => setHeight(e.target.value)} type="text" className="border border-neutral-500 p-2 rounded-md w-full" value={height} placeholder="Height" />
                    <button onClick={calculate} className="p-4 rounded-sm w-full bg-neutral-700 text-white font-semibold hover:bg-neutral-600 transition-all ease-in">Calculate</button>
                </div>
                <div className="w-full lg:w-1/2 mx-4 border shadow-sm bg-slate-100 h-full">
                    <div className="bg-slate-600 p-4 rounded-sm text-white font-semibold">Result</div>
                    <div className="p-4">
                        <p className="text-lg font-semibold mb-4">BMI = {result}</p>
                        <table className="border border-slate-800 w-full">
                            <tr>
                                <th>Range</th>
                                <th>Verdict</th>
                            </tr>

                            <tr>
                                <td>less than 18</td>
                                <td>Underweight</td>
                            </tr>
                            <tr>
                                <td>{`18 to 24.6`}</td>
                                <td>Normal</td>
                            </tr>
                            <tr>
                                <td>{`< 18`}</td>
                                <td>Underweight</td>
                            </tr>
                            <tr>
                                <td>{`< 18`}</td>
                                <td>Underweight</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IdealWeight;