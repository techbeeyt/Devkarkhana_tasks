import { home } from "/js/pages/home.js";
import { bmi } from "/js/pages/bmi.js";
import { bmr } from "/js/pages/bmr.js";
import { calorie } from "/js/pages/calorie.js";
import { idealWeight } from "/js/pages/ideal_weight.js";
import { DOMupdate } from "../script.js";
const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const routes = {
    "/": home(),
    "/index.html": home(),
    "/Devkarkhana_tasks/task5": home(),
    "/bmi-calculator": bmi(),
    "/bmr-calculator": bmr(),
    "/calorie-calculator": calorie(),
    "/ideal-weight-calculator": idealWeight(),
};

const handleLocation = async() => {
    const path = window.location.pathname;
    const partsOfPaths = path.split("/");
    let folder = `/${partsOfPaths[1]}`;
    const page = routes[folder] || routes[404];
    document.getElementById("root").innerHTML = page;
    DOMupdate();
};

window.onpopstate = handleLocation;
window.route = route;
handleLocation();
DOMupdate();