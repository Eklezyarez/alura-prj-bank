class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }else console.log("Impossível");

    }
}

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

contaCorrenteRicardo.saldo = 0;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.saldo = 100;
console.log(contaCorrenteRicardo.saldo);

contaCorrenteRicardo.sacar(200);
console.log(contaCorrenteRicardo.saldo);




console.log(cliente1);
console.log(cliente2);