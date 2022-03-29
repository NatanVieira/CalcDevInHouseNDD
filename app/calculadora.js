import * as operacao from "./operacao.js";
import * as visualizacao from "./visualizacao.js";

function init() {
    let num1 = visualizacao.pedirNumero();
    let num2 = visualizacao.pedirNumero();
    let operador = visualizacao.pedirOperacao();
    let resultado = operacao.realizaOperacao(operador, num1, num2)
    visualizacao.mostraResultado(resultado);
};

init();