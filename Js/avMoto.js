document.addEventListener('DOMContentLoaded', () => {
    const nameMotorista = "Nome do Motorista"; // Substitua pelo nome do motorista
    const urlFotoMoto = "urlFotoMoto.jpg"; // Substitua pela URL da foto do motorista

    // Configura o nome e a foto do motorista
    document.getElementById('motoristaNome').textContent = nameMotorista;
    document.getElementById('motoristaFoto').src = urlFotoMoto;

    let rating = 0; // Avaliação do usuário
    let hover = 0; // Controle de hover
    const motivos = []; // Armazena os motivos selecionados

    // Adiciona estrelas dinamicamente
    const estrelasContainer = document.getElementById('estrelas');
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        star.innerHTML = '&#9733;'; // Código para estrela
        star.addEventListener('click', () => {
            rating = i;
            updateStars();
        });
        star.addEventListener('mouseenter', () => {
            hover = i;
            updateStars();
        });
        star.addEventListener('mouseleave', () => {
            hover = 0;
            updateStars();
        });
        estrelasContainer.appendChild(star);
    }

    // Atualiza as estrelas com base na avaliação
    const updateStars = () => {
        const stars = document.querySelectorAll('.star');
        stars.forEach((star, index) => {
            star.classList.toggle('filled', index < (hover || rating));
        });
    };

    // Adiciona motivos dinamicamente
    const motivosArray = ['Conversação brusca', 'Veículo diferente do cadastrado', 'Embarque inadequado', 'Recusou ir até o destino', 'Parou para abastecer'];
    const motivosContainer = document.getElementById('motivosContainer');

    motivosArray.forEach(motivo => {
        const motivoDiv = document.createElement('div');
        motivoDiv.className = 'motivos';
        motivoDiv.textContent = motivo;
        motivoDiv.addEventListener('click', () => {
            const index = motivos.indexOf(motivo);
            if (index > -1) {
                motivos.splice(index, 1); // Remove o motivo
                motivoDiv.classList.remove('selected');
            } else {
                motivos.push(motivo); // Adiciona o motivo
                motivoDiv.classList.add('selected');
            }
        });
        motivosContainer.appendChild(motivoDiv);
    });

    // Função para enviar a avaliação
    document.getElementById('enviarBtn').addEventListener('click', () => {
        const errorContainer = document.getElementById('errorContainer');
        errorContainer.innerHTML = ''; // Limpa mensagens de erro

        if (rating === 0) {
            const error = document.createElement('span');
            error.className = 'error';
            error.textContent = "Selecione a quantidade de estrelas";
            errorContainer.appendChild(error);
            return;
        }

        if (motivos.length === 0 && rating !== 5) {
            const error = document.createElement('span');
            error.className = 'error';
            error.textContent = "Selecione um motivo";
            errorContainer.appendChild(error);
            return;
        }

        const content = `Avaliação do motorista ${nameMotorista}:\n` +
                        `Nota: ${rating}\n` +
                        `Motivos: ${motivos.join(', ')}\n`;

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `avaliacao_${nameMotorista}.txt`;
        link.click();

        // Redirecionar após o download
        window.location.href = 'http://localhost:3000/';
    });
});
