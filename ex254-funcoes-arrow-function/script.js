/*
let quadrado = function(x = 5) {
    return x * x
}
document.write(quadrado(3))
*/

/*
let quadrado = (x) => {
    return x * x
}
document.write(quadrado(10))
*/

/*
let quadrado = x => x * x //return implícito

document.write(quadrado(8))
*/

/*
let parOuImpar = function(numero) {
    if (numero % 2 == 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
document.write(parOuImpar(11))
*/
/*
let parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Par"
    } else {
        return "Impar"
    }
}
document.write(parOuImpar(47))
*/
let parOuImpar = numero => numero % 2 === 0 ? "Par" : "Impar"
document.write(parOuImpar(38))