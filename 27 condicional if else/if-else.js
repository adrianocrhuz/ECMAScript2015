let idade = 21
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar}`)

if(comprouBilhete) {
    console.log("Sim. Comprou o bilhete")
} else {
    console.log("Não. Não comprou o bilhete")
}