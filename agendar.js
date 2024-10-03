const destinations = []; // Array para armazenar os destinos agendados

document.getElementById('scheduleButton').addEventListener('click', () => {
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const rideInfo = document.getElementById('rideInfo');
    const errorContainer = document.getElementById('errorContainer');

    // Limpa as mensagens anteriores
    rideInfo.textContent = '';
    errorContainer.textContent = '';

    // Verifica se o destino já foi inserido
    if (pickup === destination) {
        errorContainer.textContent = 'O endereço de origem e de destino não pode ser o mesmo.';
        return;
    }

    // Verifica se o destino já foi inserido
    if (destinations.includes(destination)) {
        errorContainer.textContent = 'Você já agendou uma corrida para este destino.';
        return;
    }

    // Cria um objeto de data e hora a partir da data e hora inseridas
    const scheduledDateTime = new Date(`${date}T${time}`);
    const now = new Date();

    // Verifica se a data e hora agendadas são anteriores ao momento atual
    if (scheduledDateTime <= now) {
        errorContainer.textContent = 'Não agende corridas para datas ou horários anteriores a de hoje e agora.';
        return;
    }


    // Valida se todos os campos foram preenchidos
    if (pickup && destination && date && time) {
        // Adiciona o destino ao array
        destinations.push(destination);
        rideInfo.textContent = `Corrida agendada de "${pickup}" para "${destination}" no dia ${date} às ${time}.`;
    } else {
        errorContainer.textContent = 'Por favor, preencha todos os campos.';
    }
});
