/**
 * DESAFIO - CALCULADORA IMC
 * 
 * FORMULA: PESO / ALTURA * ALTURA
 * 
 */

function calIMC(peso, altura){
    imc = peso/(altura*altura);
    return imc;
}

let calcIMC = (p, a) => p / (a*a);

console.log(calIMC(120, 1.78));

console.log(calcIMC(120, 1.78))