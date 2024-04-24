//OPERADORES LÓGICOS
/*Para uma pessoa vijar para o exterior:
- precisa ser maior de 18 anos
OU
Acompanhado com os pais
E
ter comprado o bilhete
*/
let idade = 21
let paisPresentes = false
let comprouBilhete = false
const podeviajar = idade >= 18 || paisPresentes && comprouBilhete
console.log(`Pode viajarr: ${podeviajar}`)