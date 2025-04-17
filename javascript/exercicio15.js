

//variavel com objeto - tipo json (chave valor)
const user ={
    //nome - chave - sempre após uma virgula (aqui foi criado um objeto)
    nome:"erliza", 
    altura: 1.53,
    peso: 82
    

}
//para acessar a chave é só especificar 
//console.log(user.altura)
// criar uma função que receba o objeto user e calcule o IMC
//Imc = peso /(altura*altura)

function calcularIMC (user) {
 
    const imc = user.peso / (user.altura * user.altura)
    
   // console.log (imc.toFixed(2)) // toFixed ele mostra só dois numeros após a virgula 

   if(imc <16 ){
    return console.log("Magreza Grave") //sempre if e return 
    

   } else if (imc >=16  && imc <16.9){
    return console.log("Magreza Moderada")
   }

   if(imc <17 ){
    return console.log("Abaixo do peso")

   } else if (imc >17 && imc <24){
    return console.log("Peso normal")
    }

    if(imc >25 ){
        return console.log("Acima do Peso")
    
    }

    if(imc >30 ){
        return console.log("Obesidade Grau I")
    
    }



    if(imc >35){
        return console.log("Obesidade Grau II")
    }

    
    if(imc >40){
        return  console.log("Obesidade Grau III")
    }
}
calcularIMC(user)   //chamar a funçao 
