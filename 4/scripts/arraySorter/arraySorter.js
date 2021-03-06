class arraySorter {
    constructor(inputArr){
        this.arr = inputArr;
    }

    sort = function(sortedType){
        switch (sortedType) {
            case ("minMax"):
                this.arr.sort((a, b) => a - b);
                break;
            case ('maxMin'):
                this.arr.sort((a, b) => b - a);
                break;
            case ('pow2'):
                this.arr.sort((a, b) => Math.pow(a, 2) - Math.pow(b, 2));
                break;
            default:
                this.arr.sort((a) => {
                    if (a % 2 == 0) {
                        return 1;
                    } else {
                        return -1;
                    }
                });
                break;
        }
    }
}

module.exports = arraySorter;
