// Permite apenas a digitação de números
function allowOnlyNumbers(e) {
    var charCode = (e.which) ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        e.preventDefault();
    }
}

// Manipula o envio do formulário
async function handleSubmit(e) {
    e.preventDefault();
    const guess = document.querySelector('input[name="guess"]').value;
    const response = await fetch('/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess }),
    });
    const data = await response.json();
    document.querySelector('.message').innerText = data.message;
    document.querySelector('.attempts').innerText = `Tentativas: ${data.attempts}`;
    document.querySelector('.level').innerText = `Dificuldade: ${data.level} (${data.difficulty} copos)`;
}
