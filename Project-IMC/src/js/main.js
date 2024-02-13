const btnSend = document.querySelector('#send');

btnSend.addEventListener('click', function(event) {
    event.preventDefault()

    const result = document.querySelector('.out')
    let name = document.querySelector('#name').value;
    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;
    
    let mensagem = 'Digite corretamente seus dados...'
    const imc = Number(weight) / (Number(height) * Number(height)); 

    if (!Number.isNaN(imc)) {
        if (imc < 18.5) {
            mensagem = 'Abaixo do peso';
        } else if (imc >= 18.6 && imc <= 24.9) {
            mensagem = 'no Peso ideal (Parabens)';
        } else if (imc >= 25 && imc <= 29.9) {
            mensagem = 'Acima do peso';
        } else if (imc >= 30 && imc <= 34.9) {
            mensagem = 'com Obesidade grau I';
        } else if (imc >= 35 && imc <= 39.9) {
            mensagem = 'com Obesidade grau II (Severa)'
        } else {
            mensagem = 'com Obesidade III (Morbida)' 
        }
    } else {
        return result.innerHTML = mensagem;
    }

    return result.innerHTML = (`${String(name)} seu IMC é ${imc.toFixed(2)} e você está ${mensagem}`)
})  
