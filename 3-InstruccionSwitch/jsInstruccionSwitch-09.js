function mostrar()
{
	let destino;
	let temporada;
	let descuento;
	let aumento;
	let precioFinal;
	const precio = 15000;

	destino = document.getElementById("txtIdDestino").value;
	temporada = document.getElementById("txtIdEstacion").value;
	
	switch(temporada){
		case "Invierno":
			if(destino == "Bariloche"){
				aumento= 20;
				aumento= aumento * precio / 100;
				precioFinal= precio + aumento;
			}
			else if (destino == "Cordoba" || destino == "Cataratas"){
				descuento= 10;
				descuento= descuento*precio/100;
				precioFinal= precio - descuento;
			}
			else{
				descuento= 20;
				descuento= descuento*precio/100;
				precioFinal= precio - descuento;
			}
			alert(precioFinal);
			break;
			//Cierro Invierno
		case "Verano":
			if(destino == "Bariloche"){
				descuento= 20;
				descuento= descuento * precio / 100;
				precioFinal= precio - descuento;
			}
			else if (destino == "Cordoba" || destino == "Cataratas"){
				aumento= 10;
				aumento= aumento*precio/100;
				precioFinal= precio + aumento;
			}
			else{
				aumento= 20;
				aumento= aumento*precio/100;
				precioFinal= precio + aumento;
			}
			alert(precioFinal);
			break;
			//Cierro Verano
		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba"){
				aumento= 10;
				aumento= aumento*precio/100;
				precioFinal= precio + aumento;
			}
			else{
				precioFinal= precio;
			}
			alert(precioFinal);
			break;
			//Cierro Otoño-Primavera
	}

}//FIN DE LA FUNCIÓN