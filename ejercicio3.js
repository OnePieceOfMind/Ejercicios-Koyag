const valores = ['hola', undefined, 'como', 'estas', 0, null, 'tu', false, '?'];
const array = valores;

function eliminarValores(array) {

    return valores.filter(el => el);; // filter filtra los elementos tipo string e ignora los boolean y undefined
}

console.log(eliminarValores(valores));