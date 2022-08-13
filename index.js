import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"


const cliente1 = new Cliente("Joaquim", 11122233344, 112223334);
const cliente2 = new Cliente("Joana", 44455566677, 223334445);


const contaCorrenteJoaquim = new ContaCorrente(1001, cliente1);
const contaCorrenteJoana = new ContaCorrente(102, cliente2);

contaCorrenteJoaquim.depositar(500);
contaCorrenteJoaquim.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);


console.log(contaPoupanca);

console.log(contaCorrenteJoaquim);
console.log(contaCorrenteJoana);



