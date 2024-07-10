const frutas = ['banana', 'abacaxi', 'maçã', 'pera', 'uva', 'manga'];

console.log(frutas.length);

frutas[6] = 'morango';

console.log(frutas.length);

// Tamanho - 1;

console.log(frutas);
console.log(frutas[frutas.length - 1]);

// O proximo indice a ser adicionado é sempre o tamanho do array;
frutas[frutas.length] = 'abacate'

console.log(frutas);