/* ===== FORMULÁRIO DE CONTATO ===== */
const formulario = document.getElementById("formContato");
const resultado = document.getElementById("resultado");

// Mostra uma mensagem embaixo do botão, com a cor escolhida
function mostrarMensagem(texto, cor) {
    resultado.textContent = texto;
    resultado.style.color = cor;
}

formulario.addEventListener("submit", async function (event) {

    // Impede a página de recarregar: o envio é feito aqui pelo JavaScript
    event.preventDefault();

    // Lê os campos (trim remove espaços no começo e no fim)
    const nome = document.getElementById("nomeContato").value.trim();
    const email = document.getElementById("emailContato").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // 1) Campos obrigatórios
    if (nome === "" || email === "" || mensagem === "") {
        mostrarMensagem("Preencha todos os campos!", "red");
        return;
    }

    // 2) Formato do e-mail: texto@texto.texto, sem espaços
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
        mostrarMensagem("Digite um e-mail válido!", "red");
        return;
    }

    // 3) Envio para o Formspree, que encaminha para o seu e-mail
    mostrarMensagem("Enviando...", "gray");

    try {
        const resposta = await fetch("https://formspree.io/f/moednggz", {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(formulario)   // usa o atributo name de cada campo
        });

        if (resposta.ok) {
            mostrarMensagem("Mensagem enviada com sucesso!", "green");
            formulario.reset();              // limpa os campos
        } else {
            mostrarMensagem("Erro ao enviar. Tente novamente.", "red");
        }
    } catch (erro) {
        // cai aqui se estiver sem internet
        mostrarMensagem("Erro de conexão. Tente novamente.", "red");
    }
});