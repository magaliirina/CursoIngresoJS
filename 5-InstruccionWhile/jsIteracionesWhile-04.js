/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero;

	numero= parseInt(prompt("Ingrese un numero"));
	console.log(numero);
	
	while(!(numero>=0 && numero<=9)){
		numero= parseInt(prompt("Su numero no es valido. Ingrese un numero"));
		}
	
		txtIdNumero.value= "Su numero es "+numero+ " y esta validado";

	
}//FIN DE LA FUNCIÓN