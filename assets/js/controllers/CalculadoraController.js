class CalculadoraController{

    constructor(){

		this._label = $('#labelCalculadora');

		this.respostaGeral = null;

		this._vaiSerRespondido = 1;

		this.pergunta1 = new Pergunta1Model();
		this._labelPergunta1 = $('#pergunta1');
		this._inputResposta1 = $('#resposta1');

        this.pergunta2 = new Pergunta2Model();
		this._labelPergunta2 = $('#pergunta2');
		this._inputResposta2h = $('#resposta2h');
		this._inputResposta2m = $('#resposta2m');
		
        this.pergunta3 = new Pergunta3Model();
		this._labelPergunta3 = $('#pergunta3');
		this._inputResposta3 = $('#resposta3');

        this.pergunta4 = new Pergunta4Model();
		this._labelPergunta4 = $('#pergunta4');
		this._inputResposta4 = $('#resposta4');

        this.pergunta5 = new Pergunta5Model();
		this._labelPergunta5 = $('#pergunta5');
		this._inputResposta5h = $('#resposta5h');
		this._inputResposta5m = $('#resposta5m');

		this.listaResposta = new ListaRespostaModel();

		this._resultado = $('#resultado');

		this._inputResulado1 = $('#resultado1');
		this._inputResulado2 = $('#resultado2');
		this._inputResulado3 = $('#resultado3');
	}

	adiciona(event) {

		event.preventDefault();

		switch(this._vaiSerRespondido){

			case 1:

				this.respostaGeral = this.pergunta1.verifica(Number(this._inputResposta1.value));
				if (this.respostaGeral) {

					this.listaResposta.adiciona(Number(this._inputResposta1.value));

					this.updateForm(2, this.pergunta2.pergunta, this._labelPergunta1, this._labelPergunta2, this._inputResposta2h);
					
					this._vaiSerRespondido = 2;
				} else {

					this._inputResposta1.value = '';
					this._inputResposta1.focus();
				};

				break;

			case 2:

				this.respostaGeral = this.pergunta2.verifica(Number(this._inputResposta2h.value), Number(this._inputResposta2m.value));
				if (this.respostaGeral) {

					let resp2 = this.pergunta2.concatena(Number(this._inputResposta2h.value), Number(this._inputResposta2m.value));

					this.listaResposta.adiciona(resp2);

					this.updateForm(3, this.pergunta3.pergunta, this._labelPergunta2, this._labelPergunta3, this._inputResposta3);
					
					this._vaiSerRespondido = 3;
				} else {

					this._inputResposta2h.value = '';
					this._inputResposta2m.value = '';
					this._inputResposta2h.focus();
				};

				break;

			case 3:

				this.respostaGeral = this.pergunta3.verifica(Number(this._inputResposta3.value));
				if (this.respostaGeral) {

					this.listaResposta.adiciona(Number(this._inputResposta3.value));

					this.updateForm(4, this.pergunta4.pergunta, this._labelPergunta3, this._labelPergunta4, this._inputResposta4);
					
					this._vaiSerRespondido = 4;
				} else {

					this._inputResposta3.value = '.00';
					this._inputResposta3.focus();
				};

				break;

			case 4:

				this.respostaGeral = this.pergunta4.verifica(Number(this._inputResposta4.value));
				if (this.respostaGeral) {

					this.listaResposta.adiciona(Number(this._inputResposta4.value));

					this.updateForm(5, this.pergunta5.pergunta, this._labelPergunta4, this._labelPergunta5, this._inputResposta5h);
					
					this._vaiSerRespondido = 5;
				} else {

					this._inputResposta4.value = '.00';
					this._inputResposta4.focus();
				};

				break;

			case 5:

				this.respostaGeral = this.pergunta5.verifica(Number(this._inputResposta5h.value), Number(this._inputResposta5m.value));
				if (this.respostaGeral) {

					let resp5 = this.pergunta5.concatena(Number(this._inputResposta5h.value), Number(this._inputResposta5m.value));

					this.listaResposta.adiciona(resp5);

					this._inputResulado1.value = `${this.listaResposta.resultados[0]}`;
					this._inputResulado2.value = `${this.listaResposta.resultados[1]}`;
					this._inputResulado3.value = `${this.listaResposta.resultados[2]}`;

					this.limpaForm("#formCalculadora1");
					this.montaResultado();
				} else {

					this._inputResposta5h.value = '';
					this._inputResposta5m.value = '';
					this._inputResposta5h.focus();
				};

				break;
		}
	}

	updateForm(nPergunta, pergunta, perguntaAnt, perguntaProx, respostaProx){

		this.limpaForm("#containlabelCalculadora");
		this.montaLabel(pergunta, nPergunta);

		perguntaAnt.classList.add("displaynone");

		perguntaProx.classList.remove("displaynone");
		respostaProx.focus();
	}

	limpaForm(item){

		let containItem = $(`${item}`);
		let parent = containItem.parentNode;
        parent.removeChild(containItem);
    }

	montaLabel(pergunta, nPergunta) {

		this._label.innerHTML = `
			<div class="containlabelCalculadora" id="containlabelCalculadora">
				<span class="numeroPerguntaCalculadora">${nPergunta}.</span>
				<span class="perguntaCalculadora">${pergunta}</span>
			</div>
        `;
	}

	montaResultado() {

		let resultadoContainer = $("#resultadoContainer");
		resultadoContainer.classList.remove("displaynone");

		this._resultado.innerHTML = `
			<h3 class="h3Resultado">Veja a economia mensal da sua empresa.</h4>
			<div class="resultadoWrapper">
				<div class="resultadoContainL">
					<p class="pResultado">Custo por hora</p>
					<h2 class="h2Resultado">${this.listaResposta.resultados[0]}</h2>
				</div>
				<div class="resultadoContainM">
					<p class="pResultado">Tempo economizado</p>
					<h2 class="h2Resultado">${this.listaResposta.resultados[1]}</h2>
				</div>
				<div class="resultadoContainR">
					<p class="pResultado">Total economizado por mês</p>
					<h2 class="h2Resultado">${this.listaResposta.resultados[2]}</h2>
				</div>
			</div>
			<h3 class="h3Resultado">Invista na automatização dos processos financeiros.</h3>
        `;
	}
};