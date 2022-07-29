// defineProperty ( Apenas uma chave).
 function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Objetct.defineProperty(this,'estoque',{
        enumerable: true, // pode permitir ou não mostrar a chave 
        value: estoque, // valor
        writable:true, // pode permitir ou não trocar/alterar um valor
        configurable: true // pode permitir ou não trocar/alterar ou configurar um valor
    });
 }

 const p1 = new Produto('Camiseta', 20, 3);
 console.log();

//defineProperties (Várias chaves).
 function Produto (nome, preco, estoque){
    Objetct.defineProperty(this,'estoque',{
        enumerable: true, 
        value: estoque, 
        writable:true, 
        configurable: true 
    });

    Object.defineProperties(this,{
        nome:{
            enumerable: true, 
            value: nome, 
            writable:true, 
            configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco, 
            writable:true, 
            configurable: true
        },
    });
 };

 
