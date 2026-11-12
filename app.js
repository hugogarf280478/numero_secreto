//se crearon la variables

let numeroSecreto = 7;
let numUsuario = 0;
let intentos = 1; 
let palabraVeces = "vez";


console.log(typeof numeroSecreto);
// minetras sean diferentes pedimos nuevamente ingresar numero
while (numUsuario != numeroSecreto){ 
 numUsuario= prompt("ingresa un numero del 1 al 10");
 
 // inica ciclo
    if (numUsuario == numeroSecreto){
    // si la condicion se cumple muestra alerta
        alert(`felicidades acertaste el numero secreto es ${numeroSecreto}.lo hiciste en ${intentos} ${palabraVeces}`);
       
        
    } else {
        // si la cndicion es negativa muestra esta alerte
         if (numUsuario > numeroSecreto){
            alert ("el numero secreto es menor");
        

        }else{
            alert ("el numero secreto es mayor");
        }
// iniciar contador
         intentos=intentos+1;
         palabraVeces="veces";
       
} 


}