//Espera o documento ser totalmente carregado antes de executar o código
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona o botão e o paragrafo pelo ID
    const meuBotao = document.getElementById('meuBotao');
    const mensagemElemento = document.getElementById('mensagem');

    // Adiciona um "ouvinte de evento" ao botão. Quando ele é clicado, a função é executada
    meuBotao.addEventListener('click', () => {
        // Altera o texto do parágrafo
        mensagemElemento.TextContaint ='parabéns! Você ativou o JavaScript!';

        // Exibe uma mensagem no console do navegador(útil para dewpuração)
        console.log('O botão foi clicado')
    })

}

)