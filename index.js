import { Cliente } from "./Cliente.js"
import { Gerente } from "./Funcionario/Gerente.js"
import { Diretor } from "./Funcionario/Diretor.js"
import { SistemAutenticacao } from "./SistemAutenticacao.js"


const diretor  = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");

const gerente = new Gerente ("Ricardo", 5000, 12345648901);
gerente.cadastrarSenha("12345");

const estaLogado = SistemAutenticacao.login(gerente, "12345");

console.log(estaLogado);



