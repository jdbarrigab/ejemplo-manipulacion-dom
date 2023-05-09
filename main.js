const h1 = document.querySelector('h1')
const form = document.querySelector('#formulario')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const pResult = document.querySelector('#result')

form.addEventListener('submit', btnOnClick) //para este caso la función btnOnClick no require parentesis

function btnOnClick(event) {
    console.log({event});
    event.preventDefault();  //no ejecuta la funnción, prevent-default
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
}