export const calorie = () => {
    return `<div id="calorie">
    <div class="navigation">
    <ul class="nav_link_holder">
    <li><a href="/" onclick="route()">Home</a></li>
    <li><i class="fa-solid fa-angle-right"></i></li>
    <li>BMR Calculator</li>
    </ul>
    </div>
    <h2 class="select_header">BMR Calculator</h2>
    <div class="calculator_container">
    <div class="calc_header"><i class="fa-solid fa-square-caret-down"></i><span>Modify the values and click the Calculate button to use</span></div>
    <div class="calc_body">
        <div class="values">
            <div class="select_unit">
            <div class="unit selected" id="us_unit_btn">US Units</div>
            <div class="unit" id="matric_unit_btn">Metric Units</div>
            </div>
            <div class="value">
                <div class="input_container">
                    <label htmlFor="age">Age</label> <div class="val_input"><input name="age" type="number" id="age" value="25"/> <span class="unit_name">years</span></div>
                </div>
                <div class="input_container">
                    <label>Gender</label> <div class="sel_gender"><input type="radio" name="gender" value="male"/> Male  
                    <input type="radio" name="gender" value="female" /> Female</div>
                </div>
                <div class="input_container">
                <label htmlFor="height">Height</label> 
                <div class="height_us">
                    <div class="val_input">
                        <input name="height_ft" type="text" id="height_ft" value="5"/><span class="unit_name">ft</span>
                    </div>
                    <div class="val_input">
                        <input name="height_inch" type="text" id="height_inch" value="10"/><span class="unit_name">inches</span>
                    </div>
                </div> 
                    <div class="height_mt d-hidden">
                        <div class="val_input"><input name="height_m" type="text" id="height_m" value="1.77"/><span class="unit_name">m</span></div>
                    </div>
                </div>
                <div class="input_container">
                <label htmlFor="weight">Weight</label> <div class="val_input"><input type="text" id="weight" value="160.5"/><span class="unit_name" id="weight_unit">pounds</span></div>
                </div>
                <div class="button_container">
                    <button class="calculate" id="calculate">Calculate <i class="fa-solid fa-circle-arrow-right"></i></button> <button class="cancel" id="clear">Clear</button>
                </div>
            </div>
        </div>

            <div class="result">
            <div class="result_header">Result</div>
            <div class="result_text">
                <p class="bmr_result" id="bmr_result_val">BMR : 1700.00 calories/day</p>
            </div>
            <div class="center">
            </div>
            </div>
    </div>
    </div>`;
};


export const bmrDOM = () => {
    const btn = $("#us_unit_btn");
    const btn2 = $("#matric_unit_btn");
    let isUsMethod = 1;
    btn.addEventListener("click", () => {
        isUsMethod = 1;
        btn.classList.add("selected");
        btn2.classList.remove("selected");
        $(".height_mt").classList.add("d-hidden");
        $(".height_us").classList.remove("d-hidden");
        $("#weight_unit").innerText = "pounds";
        $("#weight").value *= 2.205;
    });
    btn2.addEventListener("click", () => {
        isUsMethod = 0;
        btn2.classList.add("selected");
        btn.classList.remove("selected");
        $(".height_mt").classList.remove("d-hidden");
        $(".height_us").classList.add("d-hidden");
        $("#weight_unit").innerText = "kg";
        $("#weight").value = ($("#weight").value / 2.205).toPrecision(3);
    });
    const calcBtn = $("#calculate");
    calcBtn.addEventListener("click", () => {
        const gender = $('[name="gender"]');
        const gender_value = gender.forEach(item => {
            if (item.checked) {
                return item;
            }
        })
        console.log(gender_value);
        const age = $("#age").value;
        let heightFT = $("#height_ft").value;
        heightFT *= 1;
        let heightINCH = $("#height_inch").value;
        heightINCH /= 12;
        let heightM;
        let weight = $("#weight").value;
        weight *= 1;
        if (isUsMethod) {
            heightM = (heightFT + heightINCH) / 3.281;
            weight /= 2.205;
        } else {
            heightM = $("#height_m").value;
        }

        let BMI = 88.362 + 13.397 * weight + 4.799 * heightM * 100 - 5.677 * age;

        if (BMI) {
            $("#bmr_result_val").innerHTML = `BMR: ${BMI.toFixed(2)} calories/day<sup>2</sup>`;
        }
    });
    const clrBtn = $("#clear");
    clrBtn.addEventListener("click", () => {
        $("#age").value = "";
        $("#height_ft").value = "";
        $("#height_inch").value = "";
        $("#height_m").value = "";
        $("#weight").value = "";
    });
}