import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"


const cliente1 = new Cliente();
cliente1.nome = "Joaquim";
cliente1.cpf = 11122233344;
cliente1.rg = 112223334

const cliente2 = new Cliente();
cliente2.nome = "Joana";
cliente2.cpf = 44455566677;
cliente1.rg = 223334445;

const contaCorrenteRicardo = new ContaCorrente();

contaCorrenteRicardo.agencia = 1000;

contaCorrenteRicardo.depositar(100);
const valorSacado = contaCorrenteRicardo.sacar(20);


console.log(valorSacado);
console.log(contaCorrenteRicardo);



