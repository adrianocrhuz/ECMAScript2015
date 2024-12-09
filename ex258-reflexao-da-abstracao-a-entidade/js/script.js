/*Abstração*/
//Um software de marcenaria
//cadeira e sofá

//paradigma procedural
//cadeira
/*
let qtde_pernas = 4
let giratoria = false
let cor = 'azul'

//array de cadeiras
let cadeiras = Array()
cadeiras[0] = Array()
cadeiras[0]['qtde-pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde-pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

console.log(cadeiras)

function girar_cadeira(indice) {
    if(cadeiras[indice] ['giratoria'] === true) {
        console.log('A cadeira é giratória')
    } else {
        console.log('A cadeira não é giratória')
    }
}
function adicionar_cadeiras(qtde_pernas, giratoria, cor) {
    let cadeira = Array()
    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor

    //push do escopo global
    cadeiras.push(cadeira)
}
adicionar_cadeiras(3, false, 'verde')
console.log(cadeiras)
girar_cadeira(0)
*/


//paradigma de orientação de objetos
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }
    //método
    girarCadeira() {
        if(this.giratoria === true) {
            console.log('A cadeira é giratória')
    } else {
        console.log('A cadeira não é giratória')
    }
}
}
//criar objeto
//let cadeira = new Cadeira(4, false, 'azul')
//let cadeira1 = new Cadeira(1, true, 'vermelha')

//criar array cadeiras
let cadeiras = Array()
cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))
console.log(cadeiras)

//console.log(cadeira)
//cadeira.girarCadeira()
//cadeira1.girarCadeira()