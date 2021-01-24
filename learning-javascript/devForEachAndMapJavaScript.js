//DEV SOUTINHO É TOP
({
    babel: true
})

const nomes= ['Teste', 'Bagulhos', 'Windows', 'Freway'];

nomes.forEach(function(nome, i) {
    console.log(nome, i);
})

//Implementando o nosso ForEach e entendendo como é feito a implementação do mesmo.
function nossoForEach(arr, funcao) {
    for (let i  = 0; i < arr.length; i++) {
        let itemDoArray = arr[i];
        funcao(itemDoArray, i);
    }
}

nossoForEach(nomes, function(item, i) {
    console.log(item, i);
})

const retornoDoForEach = nomes.forEach(function(nome, i) {
    console.log(nome, i);
})


const retornoDoMap = nomes.map(function(nome, i) {
    console.log(nome, i);
})

retornoDoForEach

retornoDoMap

//--Implementando nosso map e entendendo como é o functionamento do mesmo.
function nossoMap(arr, funcao) {
    let novoArray = [];    
    for (let i  = 0; i < arr.length; i++) {
            let itemDoArray = arr[i];
            novoArray.push(funcao(itemDoArray, i));
    }

    return novoArray;
}

const retornoNossoMap = nossoMap(nomes, function(item, i){
    return item.toUpperCase();
})

console.log(retornoNossoMap);