class ListaRespostaModel{
    
    constructor(){

		this._respostas=[];
		this._resultados=[];
		this._contador=0;
	}

	get respostas(){

		return [].concat(this._respostas);
	}

	get resultados(){

		if (this._contador == 0){

			this._trasResultados();
			this._contador++;
		}

		return [].concat(this._resultados);
	}

	_trasResultados(){

		let _base2 = this._respostas[1] * 0.12; // hora
		let _base3 = this._respostas[2] * 0.89; // dinheiro
		let _base4 = this._respostas[3] * 0.77; // dinheiro
		let _base5 = this._respostas[4] * 0.40; // hora

		// Custo por hora
		this._resultados.push(this._preparaResultadoMonetario(280 * this._respostas[0]));

		// Tempo economizado para reembolsar o colaborador
		let _resultado2 = this._respostas[4] - _base5;
		this._resultados.push(this._preparaResultadoHora(_resultado2));

		// Total economizado por mês
		let _resultado3 = (((this._respostas[1] - _base2) * 280 * 24 * 30) + (this._respostas[2] - _base3) + (this._respostas[3] - _base4)) * this._respostas[0];
		this._resultados.push(this._preparaResultadoMonetario(_resultado3));
		
	}

	adiciona(resposta){

		this._respostas.push(resposta);
	}

	esvazia(){

		this._respostas=[];
	}
	
	_preparaResultadoMonetario(valor){

		let formatter = new Intl.NumberFormat('pt-BR', {

			style: 'currency',
			currency: 'BRL',
			minimumFractionDigits: 2,
		});
		
		return formatter.format(valor);
	}
	_preparaResultadoHora(valor){

		let hora = parseInt(valor);
		let minuto = (valor - hora) * 60;

		if (minuto == 0){

			return hora;
		} else {

			return hora + ":" + parseInt(minuto);
		}
	}
}