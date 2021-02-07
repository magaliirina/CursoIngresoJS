function mostrar()
{
	let edad;

	edad = parseInt(txtIdEdad.value);

	if( edad >= 18){
		alert("Mayor de edad");
	}

	//Esta condicion no es optima ya que se evalua dos veces la condicion
	// if(edad <= 18){
	// 	alert("Menor de edad");
	// }
	// alert("fin");


	//else (si no) no necesita otra condicion, se ejecuta cuando el if no lo hace
	else {
		alert("Menor de edad");
	}
	alert("Fin");


}//FIN DE LA FUNCIÓN