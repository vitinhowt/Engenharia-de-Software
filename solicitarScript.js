document.getElementById('requestRide').addEventListener('click', function() {
    const origin = document.getElementById('origin').value.trim();
    const destination = document.getElementById('destination').value.trim();
    const messageDiv = document.getElementById('message');

    const addressPattern = /^[A-Za-z0-9\s]+,\s*\d+$/; // Regex para validar endereço

    if (addressPattern.test(origin) && addressPattern.test(destination)) {
        if (origin !== destination) {
            messageDiv.textContent = `Corrida solicitada de ${origin} para ${destination}.`;
            messageDiv.style.color = '#28a745'; // Cor de sucesso
            document.getElementById("resposta").innerHTML = "<a href='transporte.html'>prosseguir para escolha do serviço.</a>"
        } else {
            messageDiv.textContent = 'A origem e o destino não podem ser iguais.';
            messageDiv.style.color = '#d9534f'; // Cor de erro
        }
    } else {
        messageDiv.textContent = 'Por favor, insira endereços válidos (Ex: Rua A, 123).';
        messageDiv.style.color = '#d9534f'; // Cor de erro
    }
});