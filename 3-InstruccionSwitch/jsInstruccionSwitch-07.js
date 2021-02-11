function mostrar()
{
	let destino;

	destino = txtIdDestino.value;

	switch(destino){
		case "Bariloche":
			alert("Su destino se encuentra en el Sur");
			break;
		case "Cataratas":
			alert("Su destino se encuentra en el Norte");
			break;
		case "Mar del plata":
			alert("Su destino se encuentra en el Este");
			break;
		case "Ushuaia":
			alert("Su destino se encuentra en el Oeste");
			break;
	}

}//FIN DE LA FUNCIÓN