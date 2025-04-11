//funçao receberá dias alugados 
// o valor por dia é 250

function calcularaluguel (dias){ //declarando a funçao

    const valorPorDia=250 //variavel  fixo 

    const calculo = dias * valorPorDia //variavel dinamica 
    console.log(calculo)
}

calcularaluguel (30) //chamando a função