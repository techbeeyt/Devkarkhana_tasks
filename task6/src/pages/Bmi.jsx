import React, { useState } from 'react';

const Bmi = () => {
    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(1.61);
    const [unit, setUnit] = useState({height: 'm', weight: 'kg'});
    const [result, setResult] = useState(23.15);

    let temp_height, temp_weight;
    const calculate = () => {
        convert();
        let bmi = temp_weight / (temp_height*temp_height);
        setResult(bmi.toFixed(2));
    }
    const convert = () => {
        if(unit.height === 'm'){
            temp_height = height;
        }
        if(unit.height === 'cm'){
            temp_height = height / 100;
        }
        if(unit.height === 'ft'){
            temp_height = height * 0.3048;
        }
        if(unit.weight === 'pound'){
            temp_weight = weight * 0.453592;
        }
        if(unit.weight === 'kg'){
            temp_weight = weight;
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
                <h1 className="text-lg font-semibold text-gray-100">BMI Calculator</h1>
            </div>
            <div className="py-4 lg:px-6 flex flex-col lg:flex-row gap-y-20 lg:gap-4 justify-center items-center lg:justify-between lg:items-start lg:border m-2 lg:m-10">
                <div className="flex flex-col justify-center items-start gap-5 w-full lg:w-1/2">
                    <div className="flex gap-5 justify-start items-center">Weight 
                        <select onChange={(e) => changeUnit(e)} name="weight" className="bg bg-slate-100 p-2 rounded-md">
                            <option value="kg">kg</option>
                            <option value="pound">pound</option>
                        </select>
                    </div>
                    <input onChange={(e) => setWeight(e.target.value)} type="text" className="border border-neutral-500 p-2 rounded-md w-full flex-grow" value={weight} placeholder="Weight" />
                    <div className="flex gap-5 justify-start items-center">Height 
                        <select onChange={(e) => changeUnit(e)} name="height" className="bg-slate-100 p-2 rounded-md">
                            <option value="m">m</option>
                            <option value="cm">cm</option>
                            <option value="ft">ft</option>
                        </select>
                    </div>
                    <input onChange={(e) => setHeight(e.target.value)} type="text" className="border border-neutral-500 p-2 rounded-md w-full" value={height} placeholder="Height" />
                    <button onClick={calculate} className="p-4 rounded-sm w-full bg-neutral-700 text-white font-semibold hover:bg-neutral-600 transition-all ease-in">Calculate</button>

                    <p className="text-gray-500">
                        The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration. Use the "Metric Units" tab for the International System of Units or the "Other Units" tab to convert units into either US or metric units. Note that the calculator also computes the Ponderal Index in addition to BMI, both of which are discussed below in detail.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 mx-4 border shadow-sm bg-slate-100 h-full">
                    <div className="bg-slate-600 p-4 rounded-sm text-white font-semibold">Result</div>
                    <div className="p-4">
                        <p className="text-lg font-semibold mb-4">BMI = {result}</p>
                        <table className="border border-slate-800 w-full">
                           <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Range</th>
                                </tr>
                           </thead>

                            <tbody>
                                <tr>
                                    <td>Severe Thinness</td>
                                    <td>{`< 16`}</td>
                                </tr>
                                <tr>
                                    <td>Moderate Thinness</td>
                                    <td>16-17</td>
                                </tr>
                                <tr>
                                    <td>Mild Thinness</td>
                                    <td>17-18.5</td>
                                </tr>
                                <tr>
                                    <td>Normal</td>
                                    <td>18.5-25</td>
                                </tr>
                                <tr>
                                    <td>Overweight</td>
                                    <td>25-30</td>
                                </tr>
                                <tr>
                                    <td>Obese Class I</td>
                                    <td>30-35</td>
                                </tr>
                                <tr>
                                    <td>Obese Class II</td>
                                    <td>35-40</td>
                                </tr>
                                <tr>
                                    <td>Obese Class III</td>
                                    <td>{'> 40'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bmi;