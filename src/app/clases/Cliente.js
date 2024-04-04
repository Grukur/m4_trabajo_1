export default class Cliente {
    constructor(cliente, Impuesto){
        this._cliente = ()=>{
            return cliente;
        }
        this._impuesto = ()=>{
            return Impuesto;
        }
    }

    get cliente(){
        return this._cliente()
    }

    set cliente(name){
        this._ciente = ()=>{
            return name;
        }
    }

    calcularImpuesto(){
        return (`El impuesto total es:
        ${(this._impuesto()._montoBruto() -
            this._impuesto()._deducciones()) * 0.21}
        `)
    }
}
