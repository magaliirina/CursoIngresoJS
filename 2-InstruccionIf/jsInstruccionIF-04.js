function mostrar()
{
	let edad; 
	edad = parseInt(document.getElementById("txtIdEdad").value);  
	
	
	// if (edad >= 13){
		
	// 	if(edad <= 17)
		
	// 	alert("Es adolecente");
	// }

	//si, estoy adentro...
	// if(edad >= 13 && edad <= 17){
	// 	alert("Es adolecente");
	// }
	
	if (!(edad < 13 || edad > 17)){
	//operador not: si, no (estoy afuera) = estoy adentro 	
		alert("Es adolecente");
	}

}//FIN DE LA FUNCIÓN