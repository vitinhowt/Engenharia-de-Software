const corridas = [];
function exibirHistorico() {
  const historicoDiv = document.getElementById("historico");
  const mensagemDiv = document.getElementById("mensagem");

  if (corridas.length > 0) {
    corridas.forEach((corrida) => {
      const corridaDiv = document.createElement("div");
      corridaDiv.classList.add("corrida");
      corridaDiv.innerHTML = `
                <p><strong>Origem:</strong> ${corrida.origem}</p>
                <p><strong>Destino:</strong> ${corrida.destino}</p>
            `;
      historicoDiv.appendChild(corridaDiv);
    });
  } else {
    mensagemDiv.classList.add("mensagem");
    mensagemDiv.textContent = "Nenhuma corrida encontrada no histórico.";
  }
}

window.onload = exibirHistorico;
