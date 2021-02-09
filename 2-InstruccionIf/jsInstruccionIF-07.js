function mostrar()
{
	let edad; 
	let estadoCivico;

	edad = parseInt(document.getElementById("txtIdEdad").value); 
	estadoCivico = document.getElementById("estadoCivil").value; 

	if (edad < 18 && estadoCivico != "Soltero" )
	{
		alert("Usted es muy joven para NO ser soltero");
	}
	


}//FIN DE LA FUNCIÓN