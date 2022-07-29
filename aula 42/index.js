/*
 Escreva uma função que recebe um  n° e retorne o seguinte:
 N° é divisível por 3 = Fizz;
 N° é divisível por 5 = Buzz;
 N° é divisível por 3 e 5 = FizzBuzz;
 N° não é divisível por 3 e 5 = Retorna o próprio n°;
 Checar se o número é realmente um número;
 Use a função com n°s de 0 a 100.
*/

function fizzBuzz(numero){
    if(typeof numero !== 'number') return numero;
    if (numero % 3 === 0 && numero % 5 === 0) return 'FizzBuzz';
    if (numero % 3 === 0) return 'Fizz';
    if (numero % 5 === 0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for ( let i = 0; i <= 100; i ++){
    console.log(i, fizzBuzz(i));
}
