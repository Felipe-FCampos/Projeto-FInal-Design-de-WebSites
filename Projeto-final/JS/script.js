let porcentagem
let dinheiros
let pessoa
let calculo

function bilhas() {
    dinheiros = document.querySelector('#bill').value
}

function pessas() {
    pessoa = document.querySelector('#person').value
}

function armazenar(numero) {
    if (numero === 0) {
        porcentagem = document.querySelector('#custom').value
        
        calculo = ((dinheiros/100)*porcentagem) / pessoa
        gorjas = dinheiros / pessoa
        console.log(isNaN('calculo'))
        let element = document.getElementById("contaFinal");
        element.innerHTML = "$"+calculo.toFixed(2);
        let elemento = document.getElementById("gorjeta");
        elemento.innerHTML = "$" +gorjas.toFixed(2);
        return  
    }
    porcentagem = numero
    
    calculo = ((dinheiros/100)*porcentagem) / pessoa
    gorjas = dinheiros / pessoa
    console.log(isNaN('calculo'))
    let element = document.getElementById("contaFinal");
    element.innerHTML = "$" +calculo.toFixed(2);
    let elemento = document.getElementById("gorjeta");
    elemento.innerHTML = "$" +gorjas.toFixed(2);
}

function reset(){
    document.getElementById("bill").value = ""
    document.getElementById("person").value = ""
    document.getElementById("custom").value = ""
    contaFinal.innerText = "$0,00";
    gorjeta.innerText = "$0,00";
}