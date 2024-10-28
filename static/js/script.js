let randomNumber = Math.floor(Math.random() * 5) + 1; // Gera um número aleatório entre 1 e 5
let attempts = 5;

// Permite apenas a digitação de números
function allowOnlyNumbers(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
    }
}

// Manipula o envio do formulário
function handleSubmit(e) {
    e.preventDefault();
    const guess = document.querySelector('input[name="guess"]').value;
    
    if (parseInt(guess) === randomNumber) {
        window.location.href = 'templates/win.html'; // Redireciona para a página de vitória
    } else {
        attempts -= 1;
        document.querySelector('.message').innerText = 'Tente novamente!';
        document.querySelector('.attempts').innerText = `Tentativas: ${attempts}`;
        if (attempts <= 0) {
            document.querySelector('.message').innerText = 'Você perdeu! O número era ' + randomNumber;
            document.querySelector('form').remove(); // Remove o formulário após as tentativas se esgotarem
        }
    }
}
