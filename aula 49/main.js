// filter -> Sempre vai retornar um array, com a mesma qtde de elementos ou menos
// retornando os numeros maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosFiltrados = numeros.filter(valor => valor > 10);
console.log(numerosFiltrados);

/* Retorne as pessoas que tem o nome com 5 letras ou mais
   Retorne as pessoas com mais de 50 anos
   Retorne as pessoas com cujo nome termina com 'a' 
*/

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Leticia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
];
// Retorne as pessoas que tem o nome com 5 letras ou mais
const pessoasComNomesGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomesGrande);
//Retorne as pessoas com mais de 50 anos
const pessoas2 = pessoas.filter(obj => obj.idade > 50);
console.log(pessoas2);
//Retorne as pessoas com cujo nome termina com 'a'
const nomeTerminaComA = pessoas.filter(obj => { 
    return obj.nome.toLowerCase().endsWith('a')});
console.log(nomeTerminaComA);
