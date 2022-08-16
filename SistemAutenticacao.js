export class SistemAutenticacao{
    static login(funcionario, senha){
        return funcionario.senha == senha;
    }

}