class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if(this.ligado) {
            console.log(this.nome + 'já está ligado.');
            return;
        }

        this.ligado = true;
    }

    desligar() {
        if(!this.ligado) {
            console.log(this.nome + 'já está ligado.');
            return;
        }

        this.ligado = false;
    }
}

class Smarthphone extends DispositivoEletronico { // extends: herda tudo
    constructor(nome, cor, modelo) {
        super(nome); // super: chamar o constructor da classe pai
        this.cor = cor;
        this.modelo = modelo;
} 
}

const d1 = new Smarthphone('Iphone', 'Preto', 'Galaxy S10');
console.log(d1);