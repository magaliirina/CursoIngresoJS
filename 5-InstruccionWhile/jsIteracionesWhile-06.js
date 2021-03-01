function mostrar()
{

	let numero;
	let suma;
	let promedio;
	let acumulador=0;
	let i=0;


	/*numerouno= parseInt(prompt("Ingrese un numero"));
	numerodos= parseInt(prompt("Ingrese un numero"));
	numerotres= parseInt(prompt("Ingrese un numero"));
	numerocuatro= parseInt(prompt("Ingrese un numero"));
	numerocinco= parseInt(prompt("Ingrese un numero"));*/

	while(i<5){
		numero= parseInt(prompt("Ingrese un numero"));
		//sin arrays
		//acumulador=variable+variable;
		acumulador= acumulador+numero;
		//contador=variable+constante: i=i+1;
		i++;
	}

	suma= acumulador;
	promedio= suma/5;

	txtIdSuma.value= suma;
	txtIdPromedio.value= promedio;


















	/*var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;*/
}//FIN DE LA FUNCIÓN