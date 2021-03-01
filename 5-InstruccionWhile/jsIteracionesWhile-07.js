/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let mensaje;
	//let mensaje=true; No la inicializo porque use DO
	let i=0;
	let acumulador=0;

	//i<100 && No necesito esto porque mensaje cambia y se repite
	//aprendimos a usar Do cuando al menos el codigo se ejecuta una vez
	//while(mensaje==true){ esto pasa a estar al dinal y se cierra con un ;
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		acumulador= acumulador+numero;
		mensaje= confirm("¿Desea continuar?");
		i++
	}while(mensaje==true);

	console.log(i);
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/i;


}//FIN DE LA FUNCIÓN