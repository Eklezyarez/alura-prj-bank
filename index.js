class Cliente{
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Joaquim";
cliente1.cpf = 11122233344;
cliente1.rg = 112223334
cliente1.agencia = 1000;
cliente1.saldo = 0;

cliente2.nome = "Joana";
cliente2.cpf = 44455566677;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);