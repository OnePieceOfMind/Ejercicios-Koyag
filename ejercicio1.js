function multiplicador(valor1, valor2) {
    var resultado = 0;
    for (var i = 1; i <= valor1; i++)
        resultado = resultado + valor2;
    return resultado;
}

console.log(
    multiplicador(4, 8), //se pueden cambiar los valores
);