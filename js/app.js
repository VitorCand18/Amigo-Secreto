let amigos = [];

function adicionar() {
    let nomeInserido = document.getElementById("nome-amigo");
    let lista = document.getElementById("lista-amigos");

    // Verifica se o nome inserido não está vazio e não é duplicado
    if (nomeInserido.value.trim() === '') {
        alert('Insira um nome, por favor.');
    } else if (amigos.includes(nomeInserido.value)) {
        // Verifica se o nome já existe no array 'amigos'
        alert('Este nome já foi inserido!');
    } else {
        amigos.push(nomeInserido.value); // Adiciona o nome ao array 'amigos'
        lista.textContent = lista.textContent ? lista.textContent + ', ' + nomeInserido.value : nomeInserido.value; // Adiciona o nome à lista
    }

    nomeInserido.value = ''; // Limpa o campo de entrada
}



function sortear(){ 
    // Verifica se há pelo menos 3 amigos para o sorteio
    if (amigos.length < 3) {
        alert('Por favor, insira pelo menos 3 amigos para realizar o sorteio.');
        return; // Impede o sorteio se houver menos de 3 amigos
    }

    embaralha(amigos); // Embaralha os amigos
    let sorteio = document.getElementById("lista-sorteio");

    // Realiza o sorteio e exibe o resultado
    for(let i = 0; i < amigos.length; i++){ 
        
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}


function embaralha(amigos) { // Para embaralhar o array

    for (let indice = amigos.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [amigos[indice - 1], amigos[indiceAleatorio]] = 
            [amigos[indiceAleatorio], amigos[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = '';
    let sorteio = document.getElementById("lista-sorteio").innerHTML = '';

}