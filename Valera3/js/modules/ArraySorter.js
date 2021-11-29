import { getStr } from "./common.js";
function sorted(func) {
    var arr = getStr("arrSort").split(",");
    alert(arr.sort(func));
};
function minMax() {
    sorted((a, b) => a - b);
};
function maxMin() {
    sorted((a, b) => b - a);
};
function pow2() {
    sorted((a, b) => Math.pow(a, 2) - Math.pow(b, 2));
};
function odd() {
    sorted((a) => {
        if (a % 2 == 0) {
            return 1;
        } else {
            return -1;
        }
    }
    );
}; 

export { minMax, maxMin, pow2, odd }; 