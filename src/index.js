exports.min = function min(array) {
    var min = 0;
    if (!array) return min;
    if (!array.length) return min;
    min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) min = array[i];
    }
    return min;
};

exports.max = function max(array) {
    var max = 0;
    if (!array) return max;
    if (!array.length) return max;
    max = array[0];
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    return max;
};

exports.avg = function avg(array) {
    var avg = 0;
    if (!array) return avg;
    if (!array.length) return avg;
    for (let i = 0; i < array.length; i++) {
        avg += array[i];
    }
    return avg / array.length ;
};
