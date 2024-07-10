// Faça um programa que conte de 10 a 0;
// (De trás para frente mesmo);

//Meu jeito de resolver o exercício;

// const contagem: number[] = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// let i = 0;

// while(i < contagem.length) {
//     console.log(contagem[i]);
//     i++

// }

// Jeito do Prf Guido;

let contagem = 10;

while(contagem >= 0){
    console.log(contagem);
    contagem--

}

// PS: O jeito dele foi bem mais prático hehe;