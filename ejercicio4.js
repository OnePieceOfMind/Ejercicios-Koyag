function aplanar(arr) {
    return [].concat(...arr);
}
console.log(aplanar([
    [1, 2],
    [
        [3, 4]
    ],
    [5]
]));