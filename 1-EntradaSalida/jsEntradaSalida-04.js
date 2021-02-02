/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	/*Primero guardo espacio en la memoria*/
	let nombre;

	/*Asigno lo que escribe el usuario en la variable */
	nombre = prompt ("Ingrese su nombre")

	/*envio los datos de la variable a la caja de texto de html */
	/*el valor de esta caja de texto va ser los que se escribio en la variable */
	document.getElementById("txtIdNombre").value = nombre  
}

