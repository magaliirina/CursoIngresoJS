/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo= prompt("ingrese f ó m .");

	while(!(sexo== "f" || sexo== "m")){
		sexo= prompt("Sexo invalido. Ingrese nuevamente:");
	}

	txtIdSexo.value=sexo;

}//FIN DE LA FUNCIÓN