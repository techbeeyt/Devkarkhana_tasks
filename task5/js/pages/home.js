export const home = () => {
    return `
    <div class="navigation">
            <ul class="nav_link_holder">
                <li>Home</li>
                <li><i class="fa-solid fa-angle-right"></i></li>
            </ul>
        </div>
        <h2 class="select_header">Fitness Related Calculator</h2>
<ul class="select_calculator">
    <li><a href="/bmi-calculator" onclick="route()">BMI Calculator</a></li>
    <li><a href="/calorie-calculator" onclick="route()">Calorie Calculator</a></li>
    <li><a href="/bmr-calculator" onclick="route()">BMR Calculator</a></li>
    <li><a href="/ideal-weight-calculator" onclick="route()">Ideal Weight Calculator</a></li>
</ul>`;
};