import { $ } from '../../script.js';

export const bmi = () => {
    return `
    <div id="bmi">
    <div class="navigation">
    <ul class="nav_link_holder">
    <li><a href="/" onclick="route()">Home</a></li>
    <li><i class="fa-solid fa-angle-right"></i></li>
    <li>BMI Calculator</li>
    </ul>
    </div>
    <h2 class="select_header">BMI Calculator</h2>
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
                    <label>Gender</label> <div class="sel_gender"><input type="radio" name="gender" value="male" checked /> Male  
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
                <h2 class="bmi_result" id="bmi_result_val"> BMI: 23.0 kg/m<sup>2</sup></h2>
                <span id="bmi_result_verdict"> Normal </span>
            </div>
            <div class="center">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="300px" height="163px" viewBox="0 0 300 163"><g transform="translate(18,18)" style="font-family:arial,helvetica,sans-serif;font-size: 12px;"><defs><marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7"/></marker><path id="curvetxt1" d="M-4 140 A140 140, 0, 0, 1, 284 140" style="fill: none;"/><path id="curvetxt2" d="M33 43.6 A140 140, 0, 0, 1, 280 140" style="fill: #none;"/><path id="curvetxt3" d="M95 3 A140 140, 0, 0, 1, 284 140" style="fill: #none;"/><path id="curvetxt4" d="M235.4 33 A140 140, 0, 0, 1, 284 140" style="fill: #none;"/></defs><path d="M0 140 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#bc2020"/><path d="M6.9 96.7 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#d38888"/><path d="M12.1 83.1 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#ffe400"/><path d="M22.6 63.8 A140 140, 0, 0, 1, 96.7 6.9 L140 140 Z" fill="#008137"/><path d="M96.7 6.9 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#ffe400"/><path d="M169.1 3.1 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#d38888"/><path d="M233.7 36 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#bc2020"/><path d="M273.1 96.7 A140 140, 0, 0, 1, 280 140 L140 140 Z" fill="#8a0101"/><path d="M45 140 A90 90, 0, 0, 1, 230 140 Z" fill="rgb(241, 241, 241)"/><circle cx="140" cy="140" r="5" fill="#666"/><g style="paint-order: stroke;stroke: #fff;stroke-width: 2px;"><text x="25" y="111" transform="rotate(-72, 25, 111)">16</text><text x="30" y="96" transform="rotate(-66, 30, 96)">17</text><text x="35" y="83" transform="rotate(-57, 35, 83)">18.5</text><text x="97" y="29" transform="rotate(-18, 97, 29)">25</text><text x="157" y="20" transform="rotate(12, 157, 20)">30</text><text x="214" y="45" transform="rotate(42, 214, 45)">35</text><text x="252" y="95" transform="rotate(72, 252, 95)">40</text></g><g style="font-size: 14px;"><text><textPath xlink:href="#curvetxt1">Underweight</textPath></text><text><textPath xlink:href="#curvetxt2">Normal</textPath></text><text><textPath xlink:href="#curvetxt3">Overweight</textPath></text><text><textPath xlink:href="#curvetxt4">Obesity</textPath></text></g><line x1="140" y1="140" x2="65" y2="140" stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 140 140" to="60 140 140" dur="1s" fill="freeze" repeatCount="1"/></line><text x="67" y="120" style="font-size: 30px;font-weight:bold;color:#000;">BMI Meter</text></g></svg>
            </div>
            </div>
    </div>
    </div>`;

}


export const bmiDOM = () => {
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
    $("#bmi_result_verdict").style.color = "green";
    const calcBtn = $("#calculate");
    calcBtn.addEventListener("click", () => {
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

        let BMI = weight / (heightM * heightM);

        if (BMI) {
            $("#bmi_result_val").innerHTML = `BMI: ${BMI.toPrecision(
          3
        )} kg/m<sup>2</sup>`;
        }
        if (BMI.toPrecision(3) < 18.5) {
            $("#bmi_result_verdict").innerText = `Underweight`;
            $("#bmi_result_verdict").style.color = "red";
            $("line").setAttribute("x2", 90);
            $("line").setAttribute("y2", 195);
        }

        if (BMI.toPrecision(3) >= 18.5 && BMI.toPrecision(3) < 25) {
            $("#bmi_result_verdict").innerText = `Normal`;
            $("#bmi_result_verdict").style.color = "green";
            $("line").setAttribute("x2", 65);
            $("line").setAttribute("y2", 140);
        }

        if (BMI.toPrecision(3) >= 25 && BMI.toPrecision(3) < 40) {
            $("#bmi_result_verdict").innerText = `Overweight`;
            $("#bmi_result_verdict").style.color = "red";
        }
        if (BMI.toPrecision(3) >= 25 && BMI.toPrecision(3) < 30) {
            $("line").setAttribute("x2", 75);
            $("line").setAttribute("y2", 106);
        }
        if (BMI.toPrecision(3) >= 30 && BMI.toPrecision(3) < 35) {
            $("line").setAttribute("x2", 100);
            $("line").setAttribute("y2", 82);
        }
        if (BMI.toPrecision(3) >= 35 && BMI.toPrecision(3) < 40) {
            $("line").setAttribute("x2", 140);
            $("line").setAttribute("y2", 70);
        }
        if (BMI.toPrecision(3) >= 40) {
            $("#bmi_result_verdict").innerText = `Obesity`;
            $("#bmi_result_verdict").style.color = "red";
            $("line").setAttribute("x2", 170);
            $("line").setAttribute("y2", 74);
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