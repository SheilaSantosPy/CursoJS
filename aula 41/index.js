/*
Escreva uma função chamada ePaisagem que recebe dois argumentos,largura
e altura de uma imagem (number).
Retorne true se a imagem estiver modo paisagem.
*/

function ePaisagem(largura, altura){
    return largura > altura ? true : false;
}

//Ou

function ePaisagem(largura, altura){
    return largura >= altura;
}

// Ou

const ePaisagem = (largura,altura) => largura > altura;

console.log(ePaisagem(1080,1920));