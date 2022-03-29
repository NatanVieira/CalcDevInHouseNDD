export function pedirOperacao () {
    let operacao = prompt("Digite uma operacao: ");
    return operacao;
}

export function pedirNumero() {
    let numero = prompt("Digite um número: ");
    return Number(numero);
}

export function mostraResultado(resultado) {
    alert(resultado);
}

//export {pedirNumero, pedirOperacao, mostraResultado};