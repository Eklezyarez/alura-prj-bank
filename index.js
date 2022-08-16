import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js"
import { ContaSalario } from "./Conta/ContaSalario.js";


const cliente1 = new Cliente("Joaquim", 11122233344, 112223334);
const cliente2 = new Cliente("Joana", 44455566677, 223334445);


const contaCorrenteJoaquim = new ContaCorrente(cliente1, 1001);
const contaCorrenteJoana = new ContaCorrente(cliente2, 1002);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);
const contaSalario = new ContaSalario(cliente1);

contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);


