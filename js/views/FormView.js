class FormView{

    constructor(question, indice){

        calculadoraApp.innerHTML = `
            <form id="form" onsubmit="calculadoraController.add(event)">
                <label>${indice + 1}. ${question}</label>
                <input id="resposta">
                <button type="submit">
            </form>`;
    };
};