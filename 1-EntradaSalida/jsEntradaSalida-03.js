/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;

	nombre = document.getElementById("txtIdNombre").value;
	/*document: quiere decir que me lo proporciona html
	(".."): nombre del id
	value: es porque querimos el valor de esa casilla, donde escribira el usuario */

	alert(nombre);

	/* para que el nombre se borre automaticamente terminar*/

	document.getElementById("txtIdNombre").value = ""

}


