//se crearon todas la variables

let numeroSecreto = Math.floor(Math.random()*10)+1;
let numUsuario = 0;
let intentos = 1; 
// let palabraVeces = "vez";
let maxIntentos =5;


// solo lo utilizo para mostar en codigo console.log(typeof numeroSecreto);
// minetras sean diferentes pedimos nuevamente ingresar numero
while (numUsuario != numeroSecreto){ 
 numUsuario= prompt("ingresa un numero del 1 al 10");
 
 // inica ciclo
    if (numUsuario == numeroSecreto){
// si la condicion se cumple muestra alerta
// se utiliza operadores ternarios $intentos == veces? utilizado como if : utilizados ocmoo else 
    
        alert(`felicidades acertaste el numero secreto es ${numeroSecreto}.lo hiciste en ${intentos} ${intentos== 1? 'vez':'veces'} `);
       
        
    } else {
        // si la cndicion es negativa muestra esta alerte
         if (numUsuario > numeroSecreto){
            alert ("el numero secreto es menor");
        

        }else{
            alert ("el numero secreto es mayor");
        }
// iniciar contador
         intentos++;

//  palabraVeces="veces";
        if (intentos>maxIntentos){
            alert ("llegaste el maximo de intentos permitidos");
          break;
        }
       
} 


}