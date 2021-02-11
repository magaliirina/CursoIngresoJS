function mostrar()
{
	let destino;

	destino = txtIdDestino.value;

	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("Su destino es frio");
			break;
		case "Cataratas":
		case "Mar del plata":
			alert("Su destino es caluroso 3");
			break;
			
	}


}//FIN DE LA FUNCIÓN