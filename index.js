import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente("Joaquim", 11122233344, 112223334);
const cliente2 = new Cliente("Joana", 44455566677, 223334445);


const contaCorrenteJoaquim = new ContaCorrente(101, cliente1);
const contaCorrenteJoana = new ContaCorrente(102, cliente2);

contaCorrenteJoaquim.depositar(500);
const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteJoaquim.transferir(valor, conta2);

console.log(contaCorrenteJoaquim);
console.log(contaCorrenteJoana);



