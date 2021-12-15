class Pergunta2Model{

    constructor(){

        this._pergunta = 'Quantas horas são gastas em todo o processo de gerenciamento de despesas por mês?';
    };

    get pergunta(){

        return this._pergunta;
    };

    verifica(inputH, inputM){

        if(this.verificaHora(inputH) && this.verificaMin(inputM) && (inputH != 0 || inputM != 0)){

            return true;
        }
    }

    verificaHora(input){

        if(input != null && Number.isInteger(input) && input >= 0){

            return true;
        } else {
            
            console.log("Digite uma hora válida");
            return false;
        };
    }

    verificaMin(input){

        if(input != null && Number.isInteger(input) && input >= 0 && input <= 59){

            return true;
        } else {
            
            console.log("Digite um minuto válido");
            return false;
        };
    }

    concatena(inputH, inputM){

        return (parseInt(inputM) / 60) + parseInt(inputH);
    }
};