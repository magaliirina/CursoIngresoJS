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
			}
			else if (destino == "Cordoba" || destino == "Cataratas"){
				descuento= 10;
			}
			else{
				descuento= 20;
			}
			break;
			//Cierro Invierno
		case "Verano":
			if(destino == "Bariloche"){
				descuento= 20;
			}
			else if (destino == "Cordoba" || destino == "Cataratas"){
				aumento= 10;
			}
			else{
				aumento= 20;
			}
			break;
			//Cierro Verano
		case "Otoño":
		case "Primavera":
			if (destino != "Cordoba"){
				aumento= 10;
				//Optimizado ;)
				/*aumento= aumento*precio/100;
				precioFinal= precio + aumento;*/
			}
			else{
				aumento= 0;
			}
			break;
			//Cierro Otoño-Primavera
	}

	
	if (aumento >= 0){
		//alert(aumento);
		aumento= precio*aumento/100;
		//alert(precio);
		//alert(aumento);
		precioFinal= precio+aumento;
	}
	else if (descuento != 0){
		descuento= precio*descuento/100;
		precioFinal= precio-descuento;
	}
	
	alert("Precio final " +precioFinal);

}//FIN DE LA FUNCIÓN