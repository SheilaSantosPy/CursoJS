/*
    Object.keys: Retorna as chaves;
    Object.freeze: Congela o objeto, não permitindo alterações;
    ... (spread): espalha os valores;
    Object.defineProperty (define uma propriedade);
    Object.values: mostra os valores dentro das chaves;
    Object.entries: mostra os valores dentro de um array;
    Object.assign: ele copia td que está em produto para as chaves vazias e pode criar outros metodos.

*/

const produto = { nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto); 

caneca.nome =  'Outro nome';
caneca.preco = 2.5;

