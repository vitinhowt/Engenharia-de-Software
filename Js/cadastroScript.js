function enviarPagamento() {
  const numeroCartao = document.getElementById("cardNumber").value;
  const nomeCartao = document.getElementById("cardName").value;
  const dataValidade = document.getElementById("expiryDate").value;
  const csv = document.getElementById("csv").value;
  const feedback = document.getElementById("feedback");

  // Limpa a mensagem anterior
  feedback.innerHTML = "";
  feedback.className = "";

  // Validação básica
  if (!validarNumeroCartao(numeroCartao)) {
    feedback.innerHTML = "Número do cartão inválido.";
    feedback.className = "error";
    return;
  }

  if (nomeCartao.trim() === "") {
    feedback.innerHTML = "O nome no cartão é obrigatório.";
    feedback.className = "error";
    return;
  }

  if (!validarDataValidade(dataValidade)) {
    feedback.innerHTML = "Data de validade inválida. Deve ser uma data futura.";
    feedback.className = "error";
    return;
  }

  if (!validarCSV(csv)) {
    feedback.innerHTML = "CSV inválido.";
    feedback.className = "error";
    return;
  }

  // Se todos os dados forem válidos
  feedback.innerHTML = "Forma de pagamento cadastrada com sucesso!";
  feedback.className = "success";
}

// Função para validar o número do cartão de crédito
function validarNumeroCartao(numero) {
  // Remove espaços para validação
  const limparNumero = numero.replace(/\s+/g, "");
  // Número do cartão deve ter entre 13 e 19 dígitos
  const regex = /^\d{13,19}$/;
  return regex.test(limparNumero);
}

// Função para validar o CSV
function validarCSV(csv) {
  // CSV deve ter 3 ou 4 dígitos
  const regex = /^\d{3,4}$/;
  return regex.test(csv);
}

// Função para validar a data de validade
function validarDataValidade(data) {
  const hoje = new Date();
  const [ano, mes] = data.split("-");
  const dataInserida = new Date(ano, mes - 1);

  return dataInserida > hoje;
}

// Função para formatar o número do cartão com espaços a cada 4 dígitos
function formatarNumeroCartao(input) {
  const valor = input.value.replace(/\s+/g, "").replace(/[^0-9]/g, "");
  const valorFormatado = valor.match(/.{1,4}/g)?.join(" ") || valor;
  input.value = valorFormatado;
}
