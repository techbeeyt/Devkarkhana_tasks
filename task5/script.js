import { bmiDOM } from "./js/pages/bmi.js";
import { bmrDOM } from "./js/pages/bmr.js";

export const $ = (val) => {
    const values = document.querySelectorAll(val);
    if (values.length > 1) {
        return values;
    } else if (values.length == 1) {
        return values[0];
    }
};

export const DOMupdate = () => {
    if ($("#bmi")) {
        bmiDOM();
    }

    if ($("#bmr")) {
        bmrDOM();
    };
};