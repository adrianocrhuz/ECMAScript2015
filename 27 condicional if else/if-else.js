let idade = 17
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar}`)

if(!comprouBilhete) {
    console.log("Não Comprou o bilhete")
} else {
    if (idade >= 18) {
        console.log("É maio de idade, pode viajar")
    } else {
        console.log("opa!! É menor de idade")
    }
}

let n1 = 6
let n2 = 8
let media = (n1 + n2) / 2
console.log(`Media: ${media}`)

if (n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else if (media < 7) {
    console.log("Reprovado. Mas pode recuperar.")
} else {
    console.log("Aprovado")
}
console.log("Saiu do bloco if")