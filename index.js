class Cliente{
    nome;
    cpf;
    rg;
}

class ContaCorrente{
    agencia;
    _saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
        }else console.log("Impossível");
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
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

contaCorrenteRicardo.depositar(100);
contaCorrenteRicardo.sacar(20);

console.log(contaCorrenteRicardo);



