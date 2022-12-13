function aplanar(arr) {
    return [].concat(...arr);
}
console.log(aplanar([
    [1, 2],
    [
        [3, 4]
    ],
    [5]
])); //se que se podia hacer con la funcion flat(), pero quise medir mis habilidades