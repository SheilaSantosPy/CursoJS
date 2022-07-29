
function soma(x,y){
    if (typeof x !== 'number' || typeof y !== 'number'){
        throw('x e y precisam ser numéricos.');
    }

    return x + y;
}

try {
    console.log(soma(1,1));
    console.log(soma('1',2));
} catch (error) {
    console.log(error)
}