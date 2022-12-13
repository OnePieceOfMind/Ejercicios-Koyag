const valores = ['hola', undefined, 'como', 'estas', 0, null, 'tu', false, '?'];
const array = valores;

function eliminarValores(array) {

    return valores.filter(el => el);;
}

console.log(eliminarValores(valores));