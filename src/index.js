// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (matrix && matrix.length > 0) {
        matrix.forEach((e, i) => result.push(...(i % 2 == 0 ? e : e.reverse())));
    }
    return result;
}