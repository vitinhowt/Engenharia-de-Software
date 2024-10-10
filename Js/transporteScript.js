function Normal(){
    document.getElementById("Uber Padrao").innerHTML = "<h4>Uber Padrão selecionado</h4><br><h4>O motorista está vindo até você...</h4>"
    document.getElementById("Uber Black").remove()
    document.getElementById("Uber Moto").remove()
    document.getElementById("Uber Comfort").remove()
    document.getElementById("Titulo").remove()

    document.getElementById("acompanhar").innerHTML = "<p>Quer acompanhar o trajeto?<a href='acompanharTrajeto.html'>Clique aqui.</a></p>"
    document.getElementById("botao").innerHTML = "<button onClick = 'voltar()'> Cancelar viagem </button>" 
}

function Black(){
    document.getElementById("Uber Padrao").innerHTML = "<h4>Uber Black selecionado</h4><br><h4>O motorista está vindo até você...</h4>"
    document.getElementById("Uber Black").remove()
    document.getElementById("Uber Moto").remove()
    document.getElementById("Uber Comfort").remove()
    document.getElementById("Titulo").remove()
    
    document.getElementById("acompanhar").innerHTML = "<p>Quer acompanhar o trajeto?<a href='acompanharTrajeto.html'>Clique aqui.</a></p>"
    document.getElementById("botao").innerHTML = "<button onClick = 'voltar()'> Cancelar viagem </button>" 
}

function Moto(){
    document.getElementById("Uber Padrao").innerHTML = "<h4>Uber Moto selecionado</h4><br><h4>O motorista está vindo até você...</h4>"
    document.getElementById("Uber Black").remove()
    document.getElementById("Uber Moto").remove()
    document.getElementById("Uber Comfort").remove()
    document.getElementById("Titulo").remove()
    
    document.getElementById("acompanhar").innerHTML = "<p>Quer acompanhar o trajeto?<a href='acompanharTrajeto.html'>Clique aqui.</a></p>"
    document.getElementById("botao").innerHTML = "<button onClick = 'voltar()'> Cancelar viagem </button>" 
}

function Comfort(){
    document.getElementById("Uber Padrao").innerHTML = "<h4>Uber Comfort selecionado</h4><br><h4>O motorista está vindo até você...</h4>"
    document.getElementById("Uber Black").remove()
    document.getElementById("Uber Moto").remove()
    document.getElementById("Uber Comfort").remove()
    document.getElementById("Titulo").remove()
    
    document.getElementById("acompanhar").innerHTML = "<p>Quer acompanhar o trajeto?<a href='acompanharTrajeto.html'>Clique aqui.</a></p>"
    document.getElementById("botao").innerHTML = "<button onClick = 'voltar()'> Cancelar viagem </button>" 
}

function voltar(){
    window.location.href = "../Html/transporte.html";

}