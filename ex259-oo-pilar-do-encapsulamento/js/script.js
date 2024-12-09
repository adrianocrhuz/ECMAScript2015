class Tv {
    //modelo
    constructor() {
        this._relacaoDeCanais = Array(2, 4 , 5, 7, 10);
        this._canalAtivo = Array(5)
        this._colume = 5
    }
    //metodos getters e setters
    get canalAtivo() {
        return this._canalAtivo;
    }
    set canalAtivo(canal) {
        //controle
        if (this._relacaoDeCanais.indexOf(canal) !== -1) {
            this._canalAtivo = canal
        }
        
        //this._canalAtivo = canal

    }
}
//objeto
let tv = new Tv()
tv.canalAtivo = 7

//console.log(tv._relacaoDeCanais)
console.log(tv.canalAtivo)