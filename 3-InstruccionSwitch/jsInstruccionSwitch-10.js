function mostrar()
{
	let destino;
	let estacion;
	let mensaje;

	destino= document.getElementById("txtIdDestino").value;
	estacion= document.getElementById("txtIdEstacion").value;

	switch(estacion){
		case "Invierno":
			if (destino== "Bariloche"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;
		case "Verano":
			if (destino== "Mar del plata" || destino== "Cataratas"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;
		case "Primavera":
			if (destino!= "Bariloche"){
				alert("Se viaja");
			}
			else{
				alert("No se viaja");
			}
			break;
		default:
			alert("Se viaja")
			break;
	}




	/*if(estacion== "Invierno"){
		switch(destino){
			case "Bariloche":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
				break;
		}
	}
	else if(estacion== "Verano"){
		switch(destino){
			case "Mar del plata":
			case "Cataratas":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
		}
	}
	else if(estacion== "Primavera"){
		switch(destino){
			case "Mar del plata":
			case "Cordoba":
			case "Cataratas":
				alert("Se viaja");
				break;
			default:
				alert("No se viaja");
		}
	}
	else{
		alert("Se viaja");
	}
*/
	


}//FIN DE LA FUNCIÓN