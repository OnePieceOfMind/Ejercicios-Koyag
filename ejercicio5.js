function contarRepetidos(texto, subtexto) {
    if (!subtexto.length) {
        return 0;
    }

    let resultado = subtexto.replace(/[.*^${}()|[\]\\]/g, '\\$&');
    return (texto.match(new RegExp(resultado, 'gi')) || []).length; //gi es para ignorar casos de mayusculas y minusculas
}

var texto = "Somos Anonymous, somos legión"; // pueden cambiar la frase
var palabra = "somos"; // pueden cambiar la palabra buscar
var cantidad = contarRepetidos(texto, palabra);
console.log('la palabra ' + palabra + ' se repite ' + cantidad + ' veces'); //hay que considerar que hay palabras que con el acento que cambian su siginificado d, Ej: Médico, Medicó