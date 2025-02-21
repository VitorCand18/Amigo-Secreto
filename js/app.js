function adicionar(){
    let nomeInserido = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    if(lista.textContent == ''){
        lista.textContent = nomeInserido.value;
    } else{
        lista.textContent = lista.textContent + ', ' + nomeInserido.value;
    }

    nomeInserido.value = '';
}

function sortear(){

}

function reiniciar(){

}