let idade = 27
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode vijar: ${podeViajar}`)
/*
let mgsMaiorIdade = ""
if (idade >= 18) {
    mgsMaiorIdade = "É maior de idade"
} else {
    mgsMaiorIdade = "É menor de 18 anos"
}
*/

let mgsMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos"

if (!comprouBilhete) {
    console.log("Não comprou o bilhete")
} else {
    console.log(mgsMaiorIdade)
}