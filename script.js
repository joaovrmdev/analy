document.addEventListener("DOMContentLoaded", () => {
    const btnEasterEgg = document.getElementById("easter-egg-btn");
    const mensagemSecreta = document.getElementById("mensagem-secreta");

    btnEasterEgg.addEventListener("click", () => {
        // Remove a classe hidden para mostrar a mensagem
        mensagemSecreta.classList.remove("hidden");
        
        // Esconde o botão após clicar
        btnEasterEgg.style.display = "none";
        
        // Rola a página suavemente até a mensagem
        mensagemSecreta.scrollIntoView({ behavior: "smooth" });
    });
});
