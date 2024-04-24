/*
let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = idade >= 18 || (paisPresentes && comprouBilhete)
// a logica
//const podeViajar = idade >= 18 false
//const podeViajar = true || false
console.log(`Pode viajar: ${podeViajar}`)
// o && tem preferencia na execucao
// usando parantes, pode mudar a ordem
*/
//Precedencia
let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar}`)

//media
n1 = 6
n2 = 8
let media =  (n1 + n2) / 2
console.log(`A média é: ${media}`)

console.log((3 * 2) ** 2) // ** ao quadrado
