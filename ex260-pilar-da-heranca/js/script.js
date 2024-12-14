class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }
    //metodos
    dormir() {
        console.log('Dormir')
    }
}

class Cachorro extends Animal {
    constructor () {
        super()
        this.orelhas = 'Grandes e caídas'
    }
    //metodos
    correr() {
        console.log('Correr')
    }
    rosnar() {
        console.log('Rosnar')
    }
}
class Passaro extends Animal {
    constructor () {
        super()
        this.pico = 'Curto'
    }
    //Metodos
    voar() {
        console.log('Voar')
    }
}
class Papagaio extends Passaro {
    constructor() {
        super()
        //this.cor = 'Verde'
        //this.tamanho = 20
        //this.bico = 'Médio'
        this.sabeFalar = true
    }
    //metodo
    falar() {
        console.log('Falar')
    }
}
//instanciar
let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

//chamar
//console.log(cachorro)
//console.log(passaro)
/*
cachorro.dormir()
passaro.dormir()
papagaio.falar()
papagaio.dormir()
papagaio.voar()
*/
console.log(cachorro)
console.log(passaro)
console.log(papagaio)
