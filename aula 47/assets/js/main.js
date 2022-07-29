//Function Fabrica

/*function criaCalculadora() {
    return  {
        display: document.querySelector('.display'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('Keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta;
                }
            });
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            }catch(e){
                alert('Conta inválida');
                return;
            }
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0,-1);
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e){
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();*/

//Função Construtora

function Calculadora () {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode !== 13 ) return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', e => {
            const el = e.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);

            if(!conta){
                alert ('Conta inválida');
                return;
            }
        }catch(e) {
            alert('Conta inválida');
            return;
        }
    };

    this.addNumDisplay = el =>{
         this.display.value += el.innerText;
         this.display.focus();
    };
    
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0,-1);
}

const calculadora = new Calculadora();
calculadora.inicia();
