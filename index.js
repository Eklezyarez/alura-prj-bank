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
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente1;
conta2.agencia = 102;

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

conta2.saldo = 30000;
console.log(conta2.saldo);



