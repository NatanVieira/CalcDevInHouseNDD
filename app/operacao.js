function soma(num1, num2){
    return num1 + num2;
}

function subtracao(num1, num2){
    return num1 - num2;
}

function divisao(num1, num2){
    return num1 / num2;
}

function multiplicacao(num1, num2){
    return num1 * num2;
}

export function realizaOperacao(operador, num1, num2){
    switch(operador){
        case '+':
            return soma(num1, num2);
        case '-':
            return subtracao(num1, num2);
        case '*':
            return multiplicacao(num1, num2);
        case '/':
            return divisao(num1, num2);
        default:
            return 'Operacao inválida';
    }
}
//export {realizaOperacao};