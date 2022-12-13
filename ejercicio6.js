const palabra = "reconocer"; // se puede cambiar la palabra"

function palindormo(string) {

    const reversa = string.split("").reverse().join("");

    return reversa === string ? "Es Palindromo" : "No es palindromo";
}
if (palabra == "") {
    console.log("Debe haber una palabra");
} else {
    console.log(palindormo(palabra));
}