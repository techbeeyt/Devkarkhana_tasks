export const idealWeight = () => {
    return `
    <div class="navigation">
    <ul class="nav_link_holder">
    <li><a href="/" onclick="route()">Home</a></li>
    <li><i class="fa-solid fa-angle-right"></i></li>
    <li>Ideal Weight Calculator</li>
    </ul>
    </div>   
    <div class="calculator_container">
    <div class="calc_header">IDEAL WEIGHT CALCULATOR</div>
    <div class="calc_body">
    <div class="select">
    <label for="cars">Choose a car:</label>
    <select name="cars" id="cars">
    <option value="volvo">Volvo</option>
    <option value="saab">Saab</option>
    <option value="mercedes">Mercedes</option>
    <option value="audi">Audi</option>
    </select>
    </div>
    </div>
    </div>`;
};