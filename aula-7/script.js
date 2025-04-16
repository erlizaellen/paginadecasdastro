// armazenar valores dos input altura e peso

var altura = document.getElementById("altura")

var peso =document.getElementById("peso")

//armazenar o valor do botao por id

var btn =document.getElementById("btn")

//armazenar o valor da div fim
var fim =document.getElementById("fim")

//função para calcular imc

function calcularImc(){
    //armazenar apenas o valor do input
    const valorAltura = altura.value
    const valorPeso=peso.value

    //calcular o Imc 

    const imc= valorPeso / (valorAltura*valorAltura)
    return imc

}

//criar função de click
function calcular(){
    //chama a funçao de calcularImc 
    const imc=calcularImc()
    var mensagem =""

    if (imc <18.5 ){
        mensagem = "Você está abaixo do peso"

    }

    if (imc >=18.5 && imc <24.9){
        mensagem = "Você está no peso normal"

    }
    
    if (imc >=25 && imc <29.9){
        mensagem = "Você está sobrepeso"
        
    }
    if (imc >=30 && imc <=34,99){
        mensagem ="Você está com Obesidade Grau I"
    }
    if (imc >=35 && imc <=39,99){
        mensagem ="Você está com Obesidade Grau II"
    }
    if (imc >=40 ){
        mensagem ="Você está com Obesidade Grau III"
    }
    //renderizar o resultado fim  
    fim.innerHTML = `
    <div class="linha"/></div>
    <div class="resultado">
        <div class="esquerda">
            <h2>${imc.toFixed(2)}</h2>
            <p> Seu Imc </p>
        </div>
        <div class="direita">
        <p>${mensagem}</p>
        </div> 
    </div>  
    <div class="linha"/> </div>  
    `
}
//adicionar evento de click no botao 

btn.addEventListener("click" , calcular)

