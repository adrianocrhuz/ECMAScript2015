//Introdução a Orientação a Objetos

//Paradigma Procedural
//Chamado de procedimentos (procedural) para manipulação de dados
let a = 10
let b = 7
let operador = 'mult'

function calcular(a, b, operador) {
    if (operador === 'mult') {
        console.log(a * b)
}
}
calcular(a, b, operador)

//Paradigma Orientado a Objetos
//Estruturas de dados com comportamentos
class Calculadora {
    constructor() {
        this.a = 10
        this.b = 7
        this.operador = 'mult'
    }
    calcular() {
        if (this.operador === 'mult') {
            console.log(this.a * this.b)
    }
}
}
let calculadora = new Calculadora()
calculadora.calcular()