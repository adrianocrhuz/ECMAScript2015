// 3 escopos: global, função e bloco
var serie = 'Friends'

{
    var serie = 'The Walking Dead'
    console.log('Dentro do bloco: '+ serie)
}
console.log('Fora do bloco: ' + serie)