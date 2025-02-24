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
    // Verifica se já existe um sorteio
    let sorteio = document.getElementById("lista-sorteio");
    
    // Se já houver um sorteio realizado, pergunta ao usuário se deseja realizar um novo
    if (sorteio.innerHTML.trim() !== '') {
        const confirmar = confirm('Já existe um sorteio realizado. Deseja realizar um novo sorteio?');
        if (!confirmar) {
            return; // Se o usuário não confirmar, cancela o novo sorteio
        } else {
            sorteio.innerHTML = ''; // Limpa a lista de sorteio antes de realizar um novo sorteio
        }
    }

    // Verifica se há pelo menos 3 amigos para o sorteio
    if (amigos.length < 3) {
        alert('Por favor, insira pelo menos 3 amigos para realizar o sorteio.');
        return; // Impede o sorteio se houver menos de 3 amigos
    }

    embaralha(amigos); // Embaralha os amigos aleatoriamente

    // Exibe o novo sorteio
    for(let i = 0; i < amigos.length; i++){ 
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'; // Conecta o último amigo com o primeiro
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>'; // Conecta amigos consecutivos
        }
    }
}


function embaralha(amigos) { // Para embaralhar o array

    for (let indice = amigos.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice); // Gera um índice aleatório

        // Atribuição via destructuring para trocar os elementos de posição
        [amigos[indice - 1], amigos[indiceAleatorio]] = 
            [amigos[indiceAleatorio], amigos[indice - 1]];
    }
}

function reiniciar(){
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = '';
    let sorteio = document.getElementById("lista-sorteio").innerHTML = '';
}
