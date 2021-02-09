function mostrar()
{
	let edad; 
	edad = parseInt(document.getElementById("txtIdEdad").value);  


	// if(edad >= 13 && edad <= 17){
	// 	alert("Es adolecente");

	// }	
	// else{

	// 	if(edad >= 18){
				
	// 		alert("Mayor de edad");
	// 	}
	// 	else{

	// 		alert("Niño");
	// 	}
	// 	}

	//Codigo mas limpio

	//el if abre y cierra
	if (edad >= 13 && edad <= 17)
	{
		alert("Es adolecente");
	}	
	else if(edad >= 18)
	{
		alert("Mayor de edad");
	}
	else
	{
		alert("Niño");
	}
		

}//FIN DE LA FUNCIÓN