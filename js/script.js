let currentStep = 1;

function nextStep() {
    // Esconde o passo atual
    document.getElementById(`step-${currentStep}`).style.display = "none";

    // Avança para o próximo passo
    currentStep++;

    // Mostra o próximo passo
    document.getElementById(`step-${currentStep}`).style.display = "block";
}

function previousStep() {
    // Esconde o passo atual
    document.getElementById(`step-${currentStep}`).style.display = "none";

    // Volta para o passo anterior
    currentStep--;

    // Mostra o passo anterior
    document.getElementById(`step-${currentStep}`).style.display = "block";
}

// Muda o ícone do menu ao abrir/fechar
document.addEventListener("DOMContentLoaded", function () {
    const toggler = document.querySelector(".navbar-toggler");
    const icon = toggler.querySelector(".navbar-toggler-icon");

    toggler.addEventListener("click", function () {
        if (toggler.classList.contains("collapsed")) {
            icon.style.display = "block"; // Volta ao hamburguer
            toggler.innerHTML = '<span class="navbar-toggler-icon fs-4"></span>';
        } else {
            icon.style.display = "none"; // Esconde o hamburguer
            toggler.innerHTML = '<span class="fs-2 fw-bold text-white">✕</span>'; // Adiciona o X
        }
    });
});