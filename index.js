import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"


const cliente1 = new Cliente("Joaquim", 11122233344, 112223334);
const cliente2 = new Cliente("Joana", 44455566677, 223334445);


const contaCorrenteJoaquim = new ContaCorrente(cliente1, 1001);
const contaCorrenteJoana = new ContaCorrente(cliente2, 1002);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);



