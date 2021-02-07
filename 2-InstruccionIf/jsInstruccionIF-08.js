function mostrar()
{
	let edad; 
	let estadoCivico;

	edad = parseInt(document.getElementById("txtIdEdad").value); 
	estadoCivico = document.getElementById("estadoCivil").value; 

	if ( !(edad < 18) && estadoCivico == "Soltero" ){
		alert("Es soltero y no es menor");
	}
	


}//FIN DE LA FUNCIÓN