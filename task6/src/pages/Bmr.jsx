import React, {useState} from 'react';

const Bmr = () => {
    const [weight, setWeight] = useState(60);
    const [height, setHeight] = useState(1.75);
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState(25);
    const [unit, setUnit] = useState({height: 'm', weight: 'kg'});
    const [result, setResult] = useState(1590.08);

    let temp_height, temp_weight;

    const calculate = () => {
        convert();
        let bmr;
        if(gender === 'male') {
            bmr = 88.362 + (13.397 * temp_weight) + (4.799 * temp_height) - (5.677 * age);
        }
        if(gender === 'female') {
            bmr = 447.593 + (9.247 * temp_weight) + (3.098 * temp_height) - (4.330 * age);
        }
        setResult(bmr.toFixed(2));
    }
    const convert = () => {
        if(unit.height === 'm'){
            temp_height = height * 100;
        }
        if(unit.height === 'cm'){
            temp_height = height;
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

    const changeGender = (e) => {
        setGender(e.target.value);
    }
    return (
        <>
        <div className="mx-8 mt-8 pb-8 lg:mx-52 shadow-md rounded-md">
            <div className="bg-neutral-700 p-4 m-0">
                <h1 className="text-lg font-semibold text-gray-100">BMR Calculator</h1>
            </div>
            <div className="text-sm mx-4 lg:mx-10 whitespace-normal mt-2 text-gray-500 mb-2 lg:mt-6">
                The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).
            </div>
            <div className="py-4 lg:px-6 flex flex-col lg:flex-row gap-y-20 lg:gap-4 justify-center items-center lg:justify-between lg:items-start lg:border m-2 lg:mx-10">
                <div className="flex flex-col justify-center items-start gap-5 w-full lg:w-1/2">
                <div className="flex gap-5 justify-start items-center">Age 
                    <input onChange={(e) => setAge(e.target.value)} type="text" className="border border-neutral-500 p-2 rounded-md w-full flex-grow" value={age} placeholder="Age" />
                    <select onChange={(e) => changeGender(e)} name="weight" className="bg bg-slate-100 p-2 rounded-md">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
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
                </div>
                <div className="w-full lg:w-1/2 mx-4 border shadow-sm bg-slate-100 h-full">
                    <div className="bg-slate-600 p-4 rounded-sm text-white font-semibold">Result</div>
                    <div className="p-4">
                        <p className="text-lg font-semibold mb-4"><span className="font-normal">BMR</span> = {result}  <i className="font-normal">calories/day</i></p>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="mx-10 lg:mx-52 my-10">
            <div>
                <h1 className="text-xl font-bold mt-4">Formulas for calculating BMR:</h1>
                <h1 className="text-lg font-bold mt-4">Mifflin-St Jeor Equation:</h1>
                <p>
                    For men: BMR = 10W + 6.25H - 5A + 5 <br />
                    For women: BMR = 10W + 6.25H - 5A - 161 <br />
                </p>
                <h1 className="text-lg font-bold mt-4">Revised Harris-Benedict Equation:</h1>
                For men:
                BMR = 13.397W + 4.799H - 5.677A + 88.362 <br />
                For women:
                BMR = 9.247W + 3.098H - 4.330A + 447.593 <br />
                <h1 className="text-lg font-bold mt-4">Katch-McArdle Formula:</h1>
                BMR = 370 + 21.6(1 - F)W<br />
                where:<br />
                W is body weight in kg<br />
                H is body height in cm<br />
                A is age<br />
                F is body fat in percentage<br />
            </div>

            <div>
                <p>
                    <h1 className="text-lg font-bold mt-4">BMR Variables</h1>
                    <b>Muscle Mass</b> - Aerobic exercises, such as running or cycling, have no effect on BMR. However, anaerobic exercises, such as weight-lifting, indirectly lead to a higher BMR because they build muscle mass, increasing resting energy consumption. The more muscle mass in the physical composition of an individual, the higher the BMR required to sustain their body at a certain level. <br />
                    <b>Age</b> - The more elderly and limber an individual, the lower their BMR, or the lower the minimum caloric intake required to sustain the functioning of their organs at a certain level. <br />
                    <b>Genetics</b> - Hereditary traits passed down from ancestors influence BMR. <br />
                    <b>Weather</b> - Cold environments raise BMR because of the energy required to create a homeostatic body temperature. Likewise, too much external heat can raise BMR as the body expends energy to cool off internal organs. BMR increases approximately 7% for every increase of 1.36 degrees Fahrenheit in the body's internal temperature. <br />
                    <b>Diet</b> - Small, routinely dispersed meals increase BMR. On the other hand, starvation can reduce BMR by as much as 30%. Similar to a phone that goes into power-saving mode during the last 5% of its battery, a human body will make sacrifices such as energy levels, moods, upkeep of bodily physique, and brain functions in order to more efficiently utilize what little caloric energy is being used to sustain it. <br />
                    <b>Pregnancy</b> - Ensuring the livelihood of a separate fetus internally increases BMR. This is why pregnant women tend to eat more than usual. Also, menopause can increase or decrease BMR depending on hormonal changes.<br />
                    <b> Suppliments </b> - Certain supplements or drugs raise BMR, mostly to fuel weight loss. Caffeine is a common one.<br />
                </p>
                <p>
                    <h1 className="text-lg font-bold mt-4">BMR Tests</h1>
                    Online BMR tests with rigid formulas are not the most accurate method of determining an individual's BMR. It is better to consult a certified specialist or measure BMR through a calorimetry device. These handheld devices are available in many health and fitness clubs, doctor offices, and weight-loss clinics.
                </p>
                <p>
                    <h1 className="text-lg font-bold mt-4">Resting Metabolic Rate</h1>
                    While the two are used interchangeably, there is a key difference in their definitions. Resting metabolic rate, or RMR for short, is the rate at which the body burns energy in a relaxed, but not fully inactive state. It is also sometimes defined as resting energy expenditure, or REE. BMR measurements must meet total physiological equilibrium while RMR conditions of measurement can be altered and defined by contextual limitations.
                </p>
                <p>
                    <h1 className="text-lg font-bold mt-4">Modern Wisdom</h1>
                    A 2005 meta-analysis study on BMR* showed that when controlling all factors of metabolic rate, there is still a 26% unknown variance between people. Essentially, an average person eating an average diet will likely have expected BMR values, but there are factors that are still not understood that determines BMR precisely.
                </p>
            </div>
        </div>
        </>
    );
};

export default Bmr;