document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões com o atributo data-tab-button
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    // Adiciona um ouvinte de evento de clique a cada botão
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function (botao) {
            // Obtém o valor do atributo data-tab-button do botão clicado
            const abaAlvo = botao.target.dataset.tabButton;
            // Seleciona a aba correspondente ao valor de abaAlvo
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            // Esconde todas as abas
            escondeTodasAbas();
            // Mostra a aba correspondente
            aba.classList.add('shows__list--is--active');
            // Remove a classe ativa de todos os botões
            removeBotaoAtivo();
            // Adiciona a classe ativa ao botão clicado
            botao.target.classList.add('shows__tabs__button--is--active');
        });
    }
});

// Função para remover a classe ativa de todos os botões
function removeBotaoAtivo () {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

// Função para esconder todas as abas
function escondeTodasAbas () {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); // Seleciona todos os elementos com data-tab-id

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}