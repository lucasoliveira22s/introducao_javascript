const OlaMundo = 'Olá mundo, introdução a JS';
const DataAtual = new Date();

console.log(OlaMundo);
console.log(`Data hora: ${DataAtual}`);

function mensagem(mensagem) {
    alert(mensagem);
}

function mensagem1() {
    mensagem('Aprendendo funções');
}

const mensagemFinal = (mensagemFinal) =>{
    console.log(mensagemFinal);
}

const verdadeiro = true;
const naoVerdadeiro = !verdadeiro;

const tudoEVerdadeiro = verdadeiro && naoVerdadeiro;
const tudoEFalso = !verdadeiro && naoVerdadeiro;
const algumEVerdadeiro = verdadeiro || naoVerdadeiro;
const algumEFalso = verdadeiro || naoVerdadeiro;

//console.log('verdadeiro', verdadeiro);
//console.log('naoverdadeiro', naoVerdadeiro);
//console.log('tudoEVerdadeiro', tudoEVerdadeiro);
//console.log('tudoEFalso', tudoEFalso);
//console.log('algumEVerdadeiro', algumEVerdadeiro);
//console.log('algumEFalso', algumEFalso);