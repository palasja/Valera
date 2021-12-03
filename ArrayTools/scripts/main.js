
const arrayToolsModule = require('./arraysorter.js');
const arrayValueProcessor = require('./arrayprocessor.js');

    var array = arrayToolsModule.getArray();

    alert ("Input array is: " + array);
    
    var array2 = arrayToolsModule.insertSort(array);
    alert (`Input array is: ${array}; \n Output array Insert Sort method: ${array2}`);
    
    array2 = arrayToolsModule.bubbleSort(array);
    alert (`Input array is: ${array}; \n Output array Bubble Sort method: ${array2}`);
    
    array2 = arrayToolsModule.selectionSort(array);
    alert (`Input array is: ${array}; \n Output array Selection Sort method: ${array2}`);
    
    array2 = arrayToolsModule.numericSort(array);
    alert (`Input array is: ${array}; \n Output array Numeric Sort method: ${array2}`);
    
    array2 = arrayToolsModule.randomSort(array);
    alert (`Input array is: ${array}; \n Output array Random Sort method: ${array2}`);
    
    var sum = arrayValueProcessor.getSlowMaxSubSum(array);
    alert (`Input array is: ${array}; \n Sum Slow method = ${sum}`);

    var sum2 = arrayValueProcessor.getFastMaxSubSum(array);
    alert (`Input array is: ${array}; \n Sum Fast method = ${sum2}`);

    var max = arrayValueProcessor.searchMaxValue(array);
    alert (`Input array is: ${array}; \n Max value = ${max}`);

    var min = arrayValueProcessor.searchMinValue(array);
    alert (`Input array is: ${array}; \n Min value = ${min}`);

    var median = arrayValueProcessor.searchMedianValue(array);
    alert (`Input array is: ${array}; \n Min value = ${median}`);

    var arraySeq = prompt("Input array like this: 1, 3, 7, 4, 6, 7, 8, 1, 2, 5, 7, 8, 90, 1").split(",")
    var maxSequence = arrayValueProcessor.selectionTaskMaxSequence(arraySeq)
    alert (`Input array is: ${arraySeq}; \n max sequence = ${maxSequence}`);



