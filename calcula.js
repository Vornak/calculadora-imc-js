// const envia = document.getElementById('envia');

function calcula(){
    const altura = (document.getElementById("altura").value)/100;
    const peso = (document.getElementById("peso").value);

    let imc = peso/altura**2;
    imc = imc.toFixed(2);
    console.log(imc);
    
    if(imc<18.5){
        document.getElementById('resultado').innerText="Você está muito magro(a)";
        
    }else if(imc<24.9){
        document.getElementById('resultado').innerText="Seu IMC está normal";
    }else if(imc<29.9){
        document.getElementById('resultado').innerText="Você está com sobrepeso";
    }else if(imc<39.9){
        document.getElementById('resultado').innerText="Você está com obesidade";
    }else if(imc>39.9){
        document.getElementById('resultado').innerText="Você está com obesidade mórbida";
        
    }

   
    
}











