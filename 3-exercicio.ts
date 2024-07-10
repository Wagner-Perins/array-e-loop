// Crie um array de números aleatórios e faça um programa
// que calcule e imprima na tela a soma dos itens de um array;
// Requisito: usar o loop for tradicional;

// Minha resolução do exercício;

const numerosAleatorios: number[] = [21, 55, 88, 54, 67, 2, 89];

let soma = 0;

for(let i = 0; i < numerosAleatorios.length; i++) {
    soma += numerosAleatorios[i];
    
}
console.log(soma);

//Resolução do Prf Guido;

// const numeros = [1, 34, 89, 23, 2, 4];

// let resultado = 0;

// for(let i = 0; i < numeros.length; i++){
//     resultado += numeros[i]
// }

// console.log(resultado);
