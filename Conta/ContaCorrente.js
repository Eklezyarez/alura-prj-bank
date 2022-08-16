import { Cliente } from "../Cliente.js";
import { Conta } from "./Conta.js";
export class ContaCorrente extends Conta{
 
    constructor(cliente, agencia){
        super(0, cliente, agencia);
    }

    //sobreescrevendo o comportamento sacar
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
  
}