import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678932);
diretor.cadastrarSenha("123");
const gerente = new Gerente("Ricardo", 5000, 32165498745);
gerente.cadastrarSenha("321");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");

console.log(diretorEstaLogado, gerenteEstaLogado);