const email = document.getElementById("email");
const confirmar = document.getElementById("confirmarEmail");

function validarEmail() {
    if (email.value !== confirmar.value) {
        confirmar.setCustomValidity("Os e-mails não são iguais.");
    } else {
        confirmar.setCustomValidity("");
    }
}

email.addEventListener("input", validarEmail);
confirmar.addEventListener("input", validarEmail);
