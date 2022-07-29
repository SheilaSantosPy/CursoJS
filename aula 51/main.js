// Reduce

/* 
    Some todos os números (reduce);
    Retorne um array com os pares (filter);
    Retorne um array com o dobro dos valores(Map).
*/

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

//  Some todos os números (reduce);
const total = numeros.reduce(function(acumulador,valor,indice,array){
    acumulador += valor;
    return acumulador;
},0); //este zero é o valor inicial do acumulador.
console.log(total);

// Retorne um array com os pares (Não recomendável, já que podemos utilizar com o Filter.)
const numPares = numeros.reduce(function(acumulador,valor,indice,array){
    if(valor % 2 === 0) acumulador.push(valor);
    return acumulador;
},[]);
console.log(numPares);

// Retorne um array com o dobro dos valores (Não recomendável, já que podemos utilizar com o Map.)
const numDobro = numeros.reduce(function(acumulador,valor){
    acumulador.push(valor * 2);
    return acumulador;
},[]);
console.log(numDobro);

// Retornando a pessoa com a idade maior no array.

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Leticia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
];

const maisVelha = pessoas.reduce(function(acumulador,valor){
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelha);