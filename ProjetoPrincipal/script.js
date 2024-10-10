let registeredUsername = localStorage.getItem("registeredUsername") || "";
let registeredPassword = localStorage.getItem("registeredPassword") || "";
let correctVerificationCode = "123456"; // Defina o código de verificação correto

function handleSignup() {
  const signupUsername = document.getElementById("signup-username").value;
  const signupPassword = document.getElementById("signup-password").value;
  const signupMessage = document.getElementById("signup-message");

  // Verifica se os campos de cadastro estão preenchidos
  if (signupUsername && signupPassword) {
    // Armazena as credenciais de cadastro no localStorage
    localStorage.setItem("registeredUsername", signupUsername);
    localStorage.setItem("registeredPassword", signupPassword);

    // Atualiza a mensagem de sucesso
    signupMessage.textContent =
      "Cadastro realizado com sucesso! Agora faça login.";
    signupMessage.style.color = "green";

    // Mostra o formulário de login e oculta o formulário de cadastro
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
  } else {
    // Atualiza a mensagem de erro se algum campo estiver vazio
    signupMessage.textContent = "Preencha todos os campos para cadastro.";
    signupMessage.style.color = "red";
  }
}

function handleLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");
  const loginForm = document.getElementById("login-form");
  const verificationForm = document.getElementById("verification-form");

  // Obtém as credenciais armazenadas
  registeredUsername = localStorage.getItem("registeredUsername");
  registeredPassword = localStorage.getItem("registeredPassword");

  // Verifica se as credenciais de login são válidas
  if (username === registeredUsername && password === registeredPassword) {
    message.textContent = "";
    loginForm.style.display = "none";
    verificationForm.style.display = "block";
  } else {
    // Atualiza a mensagem de erro se as credenciais forem incorretas
    message.textContent = "Usuário ou senha incorretos.";
    message.style.color = "red";
  }
}

function handleVerification() {
  const verificationCode = document.getElementById("verification-code").value;
  const verificationMessage = document.getElementById("verification-message");
  const redirectButtons = document.getElementById("redirect-buttons");

  // Verifica se o código de verificação está correto
  if (verificationCode === correctVerificationCode) {
    verificationMessage.textContent =
      "Autenticação bem-sucedida! Escolha sua próxima ação:";
    verificationMessage.style.color = "green";
    redirectButtons.style.display = "block"; // Exibe os botões de redirecionamento
  } else {
    // Atualiza a mensagem de erro se o código de verificação estiver incorreto
    verificationMessage.textContent = "Código de verificação incorreto.";
    verificationMessage.style.color = "red";
    redirectButtons.style.display = "none"; // Esconde os botões de redirecionamento
  }
}

function redirectToPage1() {
  window.location.href = "../Html/Menu.html"; // Redireciona para a página do usuário
}

function redirectToPage2() {
  window.location.href = "../Html/motorista.html"; // Redireciona para a página do motorista
}
