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

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  return 0;
}
