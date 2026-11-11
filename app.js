//se crearon la variables

let numeroSecreto = 7;
let numUsuario = prompt("ingresa un numero del 1 al 10");

console.log(typeof numeroSecreto);

if (numUsuario == numeroSecreto){
    // si la condicion se cumple muestra alerta
        alert(`felicidades acertaste el numero secreto es ${numeroSecreto}`);
        
    } else {
        // si la cndicion es negativa muestra esta alerte
        alert('numero incorrecto intenta nuevamente')
} 


