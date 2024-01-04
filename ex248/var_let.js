// 3 escopo: global, função e bloco
/*
var serie = 'Friends'

function x() {
    var serie ='Game Of Thrones'
    console.log('Função: ' + serie)

    if(true) {
        console.log('Bloco dentro da função: ' + serie)
    }
}
x()
if(true) {
    console.log('Global: ' + serie)
}
*/
/*
function x() {
    console.log('Dentro da funçãp ' + serie)

    if(true) {
    }
}


if(true) {
    var serie = "The walking Deed"
    //chamar a funcao
    x()
    console.log(serie)
}
console.log(serie)
*/
/*
function x() {
    if(true) {
        var serie = 'The walking Deed'
    }
}
//chamar funcao
x()

if(true) {
    console.log(serie)
}
console.log(serie)
*/

//usando let
/*
//escobo de bloco
if(true) {
    let serie = 'Friends'
    console.log(serie)
}
*/
//acessar a variavel fora do escopo de bloco
if(true) {
    let serie = 'Friends'  
}
console.log(serie)