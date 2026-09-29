// Validação do formulário de contato
const formulario = document.querySelector("form");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            alert("Digite um e-mail válido.");
            return;
        }

        alert("Mensagem enviada com sucesso!");
        formulario.reset();
    });
}


// Botão Voltar ao Topo
const botaoTopo = document.getElementById("voltarTopo");

if (botaoTopo) {

    window.addEventListener("scroll", function() {
        if (window.scrollY > 300) {
            botaoTopo.style.display = "block";
        } else {
            botaoTopo.style.display = "none";
        }
    });

    botaoTopo.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// Animação simples
const titulo = document.querySelector("main h2");

if (titulo) {
    titulo.style.opacity = "0";

    setTimeout(function() {
        titulo.style.transition = "opacity 1s";
        titulo.style.opacity = "1";
    }, 300);
}
