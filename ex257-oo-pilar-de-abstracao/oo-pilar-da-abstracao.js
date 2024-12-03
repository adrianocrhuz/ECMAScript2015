//Paradigma de Orientação a Objetos

/*
Abstração
Entidade
Identidade
Caracteristicas
Ações
*/ 
/*
Entidade:  Identidade:        Caracteristicas:                                   Açoes:
Carro       x = new Carro()   marca, modelo, cor, qtdePortas                      Ligar, acelerar, freiar, desligar
Sonho       z = new Sonho()   tipo, historia, gostaria_sonhar_denovo, qtdePortas   exibirHistorico 

*/

//modelo do objeto
class ContaBancaria {
    /* Atributos*/
    //agencia
    //numeroConta
    //saldo
    //limite
    constructor() {
        this.agencia = 1234;
        this.numeroConta = 123456789;
        this.saldo = 1600;
        this.limite = 2000;
    }
    /*Métodos*/
    //depositar
    //sacar
    //consultarSaldo
    depositar(valorDeposito) {
        this.saldo += valorDeposito;
    }
    sacar(valorSaque) {
        this.saldo -= valorSaque

    }
    consultarSaldo() {
        return this.saldo;
        //console.log("Seu saldo é: R$ " + this.saldo);
    } 
}
//Instanciar objeto
let contaX = new ContaBancaria();
let contaY = new ContaBancaria();

console.log(contaX.consultarSaldo())
contaX.depositar(450)
console.log(contaX.consultarSaldo())
//sacar
contaX.sacar(200)
console.log(contaX.consultarSaldo())

console.log(contaY.consultarSaldo())

//Acessar atributos
//console.log(contaX.agencia);
//console.log(contaX.numeroConta);
//console.log(contaX.saldo);
//console.log(contaX.limite)
