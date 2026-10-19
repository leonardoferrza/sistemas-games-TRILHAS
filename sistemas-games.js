const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n===============================================");
    console.log("---SISTEMA DE GAMERS---");
    console.log("1 - Cadastrar Jogador");
    console.log("2 - Deletar Jogador");
    console.log("3 - Mostrar Equipe");
    console.log("4 - Calculo Média da Equipe");
    console.log("5 - Sair");
    console.log("\n");
}

function mostraEquipe() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados!");
        return;
    }

    for (let i = 0; i < time.length; i++) {
        let jogador = time[i];
        console.log((i + 1) + ": " + jogador.nome + " | Função: " + jogador.funcao + " | Pontuação: " + jogador.pontuacao);
    }
}

function cadastrarJogador() {
    let nomeJogador = prompt("Digite o nome do usuário:");
    let funcaoJogador = prompt("Digite a função do jogador:");
    let pontuacaoJogador = parseFloat(prompt("Digite a pontuação do jogador:"));

    if (isNaN(pontuacaoJogador)) {
        console.log("Pontuação inválida! Por favor, insira um número.");
        return;
    } else {
        let recruta = {
            nome: nomeJogador,
            funcao: funcaoJogador,
            pontuacao: pontuacaoJogador
        }

        time.push(recruta);
        console.log("Usuario "+ nomeJogador + " cadastrado com sucesso!");
    }

    
}

function deletarJogador() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados para deletar!");
        return;
    }

    let nomeDeletado = prompt("Digite o nome do usuário que deseja deletar:");
    let indexDeletado = -1;

    for (let i = 0; i < time.length; i++) {

        if (time[i].nome === nomeDeletado) {
            indexDeletado = i;
            break;
        }
    
    }

    if (indexDeletado === -1) {
        console.log("Jogador não encontrado!");
        return;
    }

    time.splice(indexDeletado, 1);
    console.log("Jogador deletado com sucesso!");
}

function calcularMedia() {
    if (time.length === 0) {
        console.log("Não há jogadores cadastrados para calcular a média!");
        return;
    }

    let totalPontuacao = 0;

    for (let i = 0; i < time.length; i++) {
        totalPontuacao = totalPontuacao + time[i].pontuacao;
    }

    let mediaPontuacao = totalPontuacao / time.length;
    console.log("A média da equipe é: " + mediaPontuacao.toFixed(2));
}


while (continuar === true) {
    mostrarMenu();
    let opcao = prompt("Digite sua opção: ");

    if (opcao === "1") {
        cadastrarJogador();
    } else if (opcao === "2") {
        deletarJogador();
    } else if (opcao === "3") {
        mostraEquipe();
    } else if (opcao === "4") {
        calcularMedia();
    } else if (opcao === "5") {
        continuar = false;
    } else {
        console.log("Opção inválida! Digite outra opção...");
    }
}