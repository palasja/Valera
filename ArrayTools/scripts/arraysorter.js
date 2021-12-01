
var arrayToolsModule = (function () {
    let arraySortProcessor = {};
    let _getNewIntValue = function (inputString) {
        let valid = false;
        do {
            let inputInt = parseInt(inputString, 10);
            if (!isNaN(inputInt)) {
                valid = true;
                return inputInt;
            }
            else {
                valid = false;
                let message = ("Value is not an integer. Please, enter Integer Value!");
                inputString = prompt(message);
            }
        } while (!valid);
    }
    arraySortProcessor.getArray = function () {
        let message = "Enter the number of elements in the array (Integer Value)"
        let inputString = prompt(message);
        debugger;
        let arrayLength = _getNewIntValue(inputString);
        let inputArray = [];

        for (let n = 0; n < arrayLength; n++) {
            inputString = prompt(`Enter array element ${n + 1} of ${arrayLength}`)
            inputArray.push(_getNewIntValue(inputString));
        }
        return inputArray;
    };

    arraySortProcessor.insertSort = function (array) {
        let newArray = Object.assign([], array)
        let len = newArray.length;
        for (let i = 0; i < len; i++) {
            let el = newArray[i];
            let j;
            for (j = i - 1; j >= 0 && newArray[j] > el; j--) {
                newArray[j + 1] = newArray[j];
            }
            newArray[j + 1] = el;
        }
        return newArray;
    };

    arraySortProcessor.bubbleSort = function (array) {
        let newArray = Object.assign([], array)
        let len = newArray.length;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len - i - 1; j++) {
                if (newArray[j] > newArray[j + 1]) {
                    let temp = newArray[j];
                    newArray[j] = newArray[j + 1];
                    newArray[j + 1] = temp;
                }
            }
        }
        return newArray;
    };

    arraySortProcessor.selectionSort = function (array) {
        let newArray = Object.assign([], array)
        let len = newArray.length;
        for (let i = 0; i < len; i++) {
            let min = i;
            for (let j = i + 1; j < len; j++) {
                if (newArray[j] < newArray[min]) {
                    min = j;
                }
            }
            if (min != i) {
                let tmp = newArray[i];
                newArray[i] = newArray[min];
                newArray[min] = tmp;
            }
        }
        return newArray;
    };

    arraySortProcessor.numericSort = function (array) {
        let newArray = Object.assign([], array)
        return newArray.sort(function (a, b) { return a - b; });
    };

    arraySortProcessor.randomSort = function (array) {
        let newArray = Object.assign([], array)
        return newArray.sort(function (a, b) { return 0.5 - Math.random() });
    };

    return arraySortProcessor;
}());

module.exports = arrayToolsModule;