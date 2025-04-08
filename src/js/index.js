/* 
  O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
  marcar o botão como selecionado e mostrar o personagem correspondente.
*/

// Seleciona os elementos necessários
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

/**
 * Remove a classe "selecionado" do botão atualmente selecionado.
 */
function desmarcarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.botao.selecionado');
    if (botaoSelecionado) {
        botaoSelecionado.classList.remove('selecionado');
    }
}

/**
 * Adiciona a classe "selecionado" ao botão clicado.
 * @param {HTMLElement} botao - O botão que foi clicado.
 */
function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

/**
 * Remove a classe "selecionado" do personagem atualmente visível.
 */
function desmarcarPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.personagem.selecionado');
    if (personagemSelecionado) {
        personagemSelecionado.classList.remove('selecionado');
    }
}

/**
 * Adiciona a classe "selecionado" ao personagem correspondente ao botão clicado.
 * @param {number} indice - O índice do botão clicado, que corresponde ao personagem.
 */
function mostrarPersonagemSelecionado(indice) {
    personagens[indice].classList.add('selecionado');
}

/**
 * Configura o evento de clique para cada botão.
 */
function configurarEventosDeClique() {
    botoes.forEach((botao, indice) => {
        botao.addEventListener('click', () => {
            // Passo 1: Desmarcar o botão atualmente selecionado
            desmarcarBotaoSelecionado();

            // Passo 2: Marcar o botão clicado como selecionado
            marcarBotaoSelecionado(botao);

            // Passo 3: Desmarcar o personagem atualmente visível
            desmarcarPersonagemSelecionado();

            // Passo 4: Mostrar o personagem correspondente ao botão clicado
            mostrarPersonagemSelecionado(indice);
        });
    });
}

// Inicializa os eventos de clique
configurarEventosDeClique();


