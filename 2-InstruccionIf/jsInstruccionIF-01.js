function mostrar()
{
	let edad;

	//Funciona con number = number
				// string = string
				// string = nomber
	//Para acerlo más restrictivo se usa el === o !=== (tiene que ser diferente tipo y valor)  
	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad == 15 ) {
		alert("Niña bonita");
	}

}//FIN DE LA FUNCIÓN