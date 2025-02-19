document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os botões com o atributo data-tab-button
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;

    window.addEventListener('scroll', function () {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

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

    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

// Função para remover a classe ativa de todos os botões
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is--active');
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is--open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}

// Função para esconder todas as abas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]'); // Seleciona todos os elementos com data-tab-id

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is--active');
    }
}


function ocultaElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function exibeElementosDoHeader() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}