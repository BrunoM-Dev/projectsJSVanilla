const lampada = document.querySelector('#lampada');
const btnOn = document.querySelector('#turnOn');
const btnOff = document.querySelector('#turnOff');
const btnRestoure = document.querySelector('#restoure')

let quebrada = false

lampada.addEventListener('dblclick', () => {
    lampada.src = './src/img/quebrada.jpg';
    quebrada = true
})

btnRestoure.addEventListener('click', () => {
    lampada.src = './src/img/desligada.jpg';
    quebrada = false
}) 

btnOn.addEventListener('click', () => {
    if (!quebrada) {
        lampada.src = './src/img/ligada.jpg';
    }    
})

btnOff.addEventListener('click', () => {
    if (!quebrada) {
        lampada.src = './src/img/desligada.jpg';
    }
})

lampada.addEventListener('mouseover', () => {
    if (!quebrada) {
        lampada.src = './src/img/ligada.jpg';
    }
})

lampada.addEventListener('mouseout', () => {
    if (!quebrada) {
        lampada.src = './src/img/desligada.jpg';    
    }
})
