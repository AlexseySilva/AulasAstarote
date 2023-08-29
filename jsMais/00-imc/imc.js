const calcular = document.getElementById('calcular');

calcular.addEventListener('click',imc);

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso  = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
    // fazendo a comparação logica
    if(nome !=='' && altura !== '' && peso !==''){
        const valorImc = (peso/(altura*altura)).toFixed(1)
        
        let classificacao = '';
        if(valorImc < 18.5){
            classificacao = "Abaixo do peso";
        }else if(valorImc<25){
            classificacao = 'Você está com o peso ideal parabéns';
        }else if(valorImc<30){
            classificacao = 'Você está um pouco acima do peso';
        }else if(valorImc<35){
            classificacao = 'Com obesidade grau 1';
        }else if(valorImc<40){
            classificacao = 'Com obesidade gra 2';
        }else{
            classificacao = 'Você precisa procurar um medico o mais rapido possivel';
        }
        resultado.textContent = `${nome} seu IMC é ${valorImc} e você esta ${classificacao}`;
    }else{
        resultado.textContent = "Preencha todos os campos!"
    }

}