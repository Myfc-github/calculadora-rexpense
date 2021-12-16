class Pergunta3Model{

    constructor(){

        this._pergunta = 'Qual o total em reais das despesas dos colaboradores mensal?';
    };

    get pergunta(){

        return this._pergunta;
    };

    verifica(input){

        if(input != null && input >= 0){

            return true;
        } else {
            
            console.log("Digite um valor válido");
            return false;
        };
    }
};