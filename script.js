// =====================================================
// ACESSIBILIDADE - ÁGUA VIRTUAL
// =====================================================


// Tamanho inicial da fonte
let tamanhoFonte = 20;


// Elementos da página
const corpo = document.body;

const aumentarFonte =
    document.getElementById("aumentarFonte");

const diminuirFonte =
    document.getElementById("diminuirFonte");

const contraste =
    document.getElementById("contraste");

const espacamento =
    document.getElementById("espacamento");

const lerTexto =
    document.getElementById("lerTexto");

const pararLeitura =
    document.getElementById("pararLeitura");


// =====================================================
// AUMENTAR FONTE
// =====================================================

aumentarFonte.addEventListener("click", function () {

    if (tamanhoFonte < 32) {

        tamanhoFonte += 2;

        corpo.style.fontSize = tamanhoFonte + "px";

    }

});


// =====================================================
// DIMINUIR FONTE
// =====================================================

diminuirFonte.addEventListener("click", function () {

    if (tamanhoFonte > 16) {

        tamanhoFonte -= 2;

        corpo.style.fontSize = tamanhoFonte + "px";

    }

});


// =====================================================
// ALTO CONTRASTE
// =====================================================

contraste.addEventListener("click", function () {

    corpo.classList.toggle("alto-contraste");

    const ativado =
        corpo.classList.contains("alto-contraste");

    contraste.setAttribute(
        "aria-pressed",
        ativado
    );

});


// =====================================================
// ESPAÇAMENTO DO TEXTO
// =====================================================

espacamento.addEventListener("click", function () {

    corpo.classList.toggle("espacamento");

    const ativado =
        corpo.classList.contains("espacamento");

    espacamento.setAttribute(
        "aria-pressed",
        ativado
    );

});


// =====================================================
// LEITURA DO TEXTO
// =====================================================

lerTexto.addEventListener("click", function () {

    // Verifica se o navegador oferece síntese de voz
    if (!("speechSynthesis" in window)) {

        alert(
            "Desculpe. A leitura de texto não está disponível neste navegador."
        );

        return;
    }


    // Interrompe uma leitura anterior
    window.speechSynthesis.cancel();


    // Seleciona somente o conteúdo principal
    const texto =
        document.getElementById("conteudo").innerText;


    // Cria o objeto de fala
    const fala =
        new SpeechSynthesisUtterance(texto);


    // Define idioma português do Brasil
    fala.lang = "pt-BR";


    // Velocidade da leitura
    fala.rate = 0.9;


    // Tom da voz
    fala.pitch = 1;


    // Inicia a leitura
    window.speechSynthesis.speak(fala);

});


// =====================================================
// PARAR LEITURA
// =====================================================

pararLeitura.addEventListener("click", function () {

    if ("speechSynthesis" in window) {

        window.speechSynthesis.cancel();

    }

});


// =====================================================
// TECLA ESC PARA PARAR A LEITURA
// =====================================================

document.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        if ("speechSynthesis" in window) {

            window.speechSynthesis.cancel();

        }

    }

});
