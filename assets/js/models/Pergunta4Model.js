class Pergunta4Model{

    constructor(){

        this._pergunta = 'Quanto é pago de despesas em KM pago por mês?';
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