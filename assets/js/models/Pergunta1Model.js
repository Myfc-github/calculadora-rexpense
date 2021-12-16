class Pergunta1Model{

    constructor(){

        this._pergunta = 'Quantas pessoas na sua empresa enviam relatórios de despesas por mês?';
    };

    get pergunta(){

        return this._pergunta;
    };

    verifica(input){

        if(input != null && input >= 1 && Number.isInteger(input)){
            
            return true;
        } else {
            
            console.log("Digite um número válido");
            return false;
        }
    }
};