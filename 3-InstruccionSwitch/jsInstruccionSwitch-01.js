function mostrar()
{
	let mes;

	mes = document.getElementById("txtIdMes").value;

	/*Switch (variable){
		case (valor que tomo la variable):
		accion;
		break; (termina el flujo del programa)
	}*/
	switch(mes){
		case "Enero":
			alert("¡¡Que comiences bien el año!!");
			break;
		case "Marzo":
			alert("¡A clases!");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices Fiestas");
			break;
			
	}


}//FIN DE LA FUNCIÓN