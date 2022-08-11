class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;
}

const cliente1 = new Cliente();
cliente1.nome = "Joaquim";
cliente1.cpf = 11122233344;
cliente1.rg = 112223334

const cliente2 = new Cliente();
cliente2.nome = "Joana";
cliente2.cpf = 44455566677;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.agencia = 1000;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);
let valorSacado = 200;
contaCorrenteRicardo.saldo -= valorSacado;




console.log(cliente1, cliente1);
console.log(cliente1, cliente2);