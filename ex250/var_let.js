//Template String
//escopos: global, função e bloco

let serie = 'Friends'

{
    let serie = 'The walking Dead'
    console.log('Dentro do Bloco ' + serie)
}
console.log('Fora do Bloco ' + serie)

let nome = 'Sophia'
console.log(`Olá Sophia, papai te ama muito...`)

console.log(`7 + 7 = ${7 + 7}`)

//funcao

function calcular(x, y) {
    return x * y
}
console.log(`A multiplicação de 8 * 8 é: ${calcular(8,8)}`)

//calcular a media

let n1 = 7
let n2 = 5
let n3 = 3

function media() {
    return (n1 + n2) / 2
}
console.log(`A média é: ${media(7,5)}`)