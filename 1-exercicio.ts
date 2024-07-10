// Cria um array com 5 nomes de países;
// Aidicione um país ao fim da lista;
// Imprima a lista na tela;
// Altere o quinto país da lista para um novo país;
// Imprima a lista na tela;
// Imprima o último país da lista na tela;
// Imprima o seguno país da lista na tela;
// Imprima o país de índice 2 na tela;


const paises = ['Brasil', 'Japão', 'China', 'Espanha', 'Ítalia'];

paises[paises.length] = 'Argentina';

console.log(paises);

paises[4] = 'Coreia do Sul';

console.log(paises);

console.log(paises[paises.length - 1]);

console.log(paises[1]);

console.log(paises[2]);