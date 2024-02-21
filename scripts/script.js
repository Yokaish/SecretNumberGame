let numeroSecreto;
let tentativas = 1;
let fileName = window.location.pathname.split('/').pop(); // Obtém o nome do arquivo HTML atual

if (fileName === 'index.html' ) {
    numeroSecreto = gerarNumeroAleatorio(100); 
    exibirTextoNaTela('p', 'Choose a number between 1 and 100');
} else if (fileName === 'index10.html') {
    numeroSecreto = gerarNumeroAleatorio(10);
    exibirTextoNaTela('p', 'Choose a number between 1 and 10');
} else if (fileName = 'index1000.html') {
    numeroSecreto = gerarNumeroAleatorio(1000);
    exibirTextoNaTela('p', 'Choose a number between 1 and 1000');
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//essa função serve para exibir os textos iniciais do <h1> e do <p> caso resetar
function mensagemInicial() {
    exibirTextoNaTela('h1', 'Secret Number Game');
}

//aqui eu chamo a função para ela ficar ativa
mensagemInicial();

//essa função gera um número aleatório 
function gerarNumeroAleatorio(numero) {
    return parseInt(Math.random() * numero + 1);
}

//essa função exerce o papel de verificar se o chute está certo, dar dicas e contar as tentativas
function verificarChute() {

    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tries' : 'try';
        exibirTextoNaTela('p',`You guessed the secret number ${numeroSecreto}!<br> With ${tentativas} ${palavraTentativa}.`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled');
    } else if (chute > numeroSecreto) {
        exibirTextoNaTela('p',`The secret number is smaller than ${chute}`);
    } else {
        exibirTextoNaTela('p',`The secret number is higher than ${chute}`);
    }
    tentativas++; //conta quantas tentativas o usuario fez, tentativas = tentativas + 1
    limparCampo(); //chama pra limpar o campo após uma tentativa
}

//esssa função serve para limpar o campo após cada tentativa
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//essa função reiniciar o jogo
function reiniciarJogo() {
    mensagemInicial();
    limparCampo();
    tentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').setAttribute('enabled', true);

    fileName = window.location.pathname.split('/').pop(); // Obtém o nome do arquivo HTML atual

    if (fileName === 'index.html' ) {
        numeroSecreto = gerarNumeroAleatorio(100); 
        exibirTextoNaTela('p', 'Choose a number between 1 and 100');
    } else if (fileName === 'index10.html') {
        numeroSecreto = gerarNumeroAleatorio(10);
        exibirTextoNaTela('p', 'Choose a number between 1 and 10');
    } else if (fileName = 'index1000.html') {
        numeroSecreto = gerarNumeroAleatorio(1000);
        exibirTextoNaTela('p', 'Choose a number between 1 and 1000');
    }
}



