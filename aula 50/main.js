// Map -> Altera os valores originais

// Dobre os números
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosDobro = numeros.map(valor => valor * 2);
console.log(numerosDobro);

/*
    Para cada elemento:
    Retorne apenas uma string com o nome da pessoa;
    Remova apenas a chave 'nome' do objeto;
    Adicione uma chave id em cada objeto.
*/

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 23},
    {nome:'Eduardo', idade: 55},
    {nome:'Leticia', idade: 19},
    {nome:'Rosana', idade: 32},
    {nome:'Wallace', idade: 47},
];

//Retorne apenas uma string com o nome da pessoa;
const nomes = pessoas.map(obj => obj.nome);
console.log(nomes);

//Retorne apenas uma string com o nome da pessoa;
const idades = pessoas.map(obj => ({idade: obj.idade}));
console.log(idades);

//Adicione uma chave id em cada objeto.
const comIds = pessoas.map(function(obj, indice){
    const newObj = {...obj};
    newObj.id = (indice + 1)*1000;
    return newObj;
});
console.log(comIds);