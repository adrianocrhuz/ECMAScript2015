class Animal {
    constructor(cor, tamanho, peso){
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }
    //metodo
    dormir() {
        console.log('Dormir')
    }
}
class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }
    //metodo
    voar() {
        console.log('Voar')
    }
}
class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }
    //metodo
    falar() {
        console.log('Falar')
    }
}
//let animal = new Animal()
//let passaro = new Passaro()
let papagaio = new Papagaio(true, 'Verde', 25, 350)
let papagaio2 = new Papagaio(false, 'amarelo',10, 80)

//chamar
console.log(papagaio)
console.log(papagaio2)