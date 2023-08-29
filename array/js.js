/* let meuArray = ["Alexsey", "Lua","Emmilly","Julia",22,32,12,36,35];
console.table(meuArray); // No Inicio 
meuArray.unshift(1,2);
console.table(meuArray); // No FInal 
meuArray.push("Terra","Santos")
console.table(meuArray);
meuArray.splice(2,1) // Apartir do item 2 remova o elemento 1º 
console.table(meuArray);
meuArray.unshift("Teste1","teste2","Teste3")
console.table(meuArray);
meuArray.splice(0,1);// Remove 
console.table(meuArray);
meuArray.splice(0,0,"Teste1");// Remove / adiciona
meuArray.splice(5,0,"Alexsey1");// Tira e adiciona 
console.table(meuArray);
let posicao = meuArray.indexOf("Santos"); // Achando um item na lista 
console.log("A posição que você quer ver é :"+posicao);
meuArray.splice(posicao);
console.table(meuArray);
meuArray.sort();
console.table(meuArray)
console.log("Tamanho da matriz: "+meuArray.length)//length diz tamanho da lista

// Criando a função soma 
function somaArray(val1,val2,val3){
    let resposta = val1+val2+val3;
    return resposta;
}
let x = somaArray(1,2,3);
console.log("A resposta é: "+x);

function mediaMedia(a,b,c){
    let media = (a+b+c)/3
    return media
}
let i = mediaMedia(9,8,9).toFixed(2);
console.log(i); */

/* // Calcular a soma dos números de um array[] 
function somarArray(x){
    let soma = 0;
    for(let a = 0; i < x.length; i++){
        soma += x[i]
    }
    return soma
}
// Passando os valores para array[] 

let teste =[1,4,7,8,9,2,5,78,47]
let resultado = somarArray(teste);
// console.log("Resultado da soma: "+ resultado)
console.log("Tamanho da matris: "+teste.length)
console.log(somaArray) */

/* function somarArray(x){
    let soma = 0;
    for (let a = 0; a < x.length; a++){
        soma += x[a];
    }
    return soma;
}
let pezinho = [12,2,3,5,6,8,8,9,5,5,3,6,5,684]
let resultado = somarArray(pezinho)
console.log("Resultado da soma: "+resultado) */

function somarArray(x){
    let soma = 0;
    for (let a = 0; a < x.length; a++){
        soma += x[a];
    }
    return soma/x.length
}
let pezinho = [12,2,893,58,698,8,8,935,5,545,23,6,52,684]
let resultado = somarArray(pezinho)

console.log("Resultado da divisão: "+ resultado.toFixed(0)) 

