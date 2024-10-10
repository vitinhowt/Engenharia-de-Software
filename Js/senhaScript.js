function redefinir(){
    var senha
    var senha2

    senha = document.getElementById("senha").value
    senha2 = document.getElementById("senhaConfirmada").value

    for (let i = 0; i < senha.length; i++) {
        if (senha.includes("@") || senha.includes("&")) {
            document.getElementById("resposta").innerText = "A sua senha contém caracteres inválidos."
        }else if(senha.length < 4){
            document.getElementById("resposta").innerText = "Sua senha deve conter no mínimo 4 caracteres"
        } else {
            if (senha == senha2) {
                document.getElementById("resposta").innerHTML = "Sua senha foi alterada com sucesso."
                cond++
            } else {
                document.getElementById("resposta").innerHTML = "As suas senhas nâo coincidem."
            }
            
        }
    }
    
}

function mostrar(){
    var tipoSenha

    tipoSenha = document.getElementById("senha")

    if (tipoSenha.type === "password") {
        tipoSenha.type = "text"
    } else {
        tipoSenha.type = "password"
    }
}

function mostrar2(){
    var tipoSenha

    tipoSenha = document.getElementById("senhaConfirmada")

    if (tipoSenha.type === "password") {
        tipoSenha.type = "text"
    } else {
        tipoSenha.type = "password"
    }
}