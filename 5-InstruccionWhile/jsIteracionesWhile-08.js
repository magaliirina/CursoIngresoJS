/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let numero;
	let mensaje;
	let acumuladorPositivo=0;
	let acumuladorNegativo=1;
	//Bandera: indicador si algo paso (tambien se puede hacer con un contador.. contador=0 numero=0)
	let flag=0;

	do{
		numero= parseInt(prompt("Ingrese un numero"));
		if(numero>= 0){
			acumuladorPositivo= acumuladorPositivo+numero;
		}else{
			flag=1;
			acumuladorNegativo= acumuladorNegativo*numero;
			//ERROR cuando el usuario no ingresa ningun numero muestra 1
		}
		mensaje=confirm("¿Quiere ingresar otro numero?");
	}while(mensaje==true);

	if(flag==0){
		acumuladorNegativo=0;
	}

	txtIdSuma.value=acumuladorPositivo;
	txtIdProducto.value=acumuladorNegativo;





	/*do{
		numero= parseInt(prompt("Ingrese un numero"));
		while(numero>=0){
			acumuladorPositivo= acumuladorPositivo+numero;
			//console.log(acumuladorPositivo);
			break;
		}
		while(numero<0){
			//acumuladorNgativo*= numero (forma resumida de acumular el acumulador con otra variable)
			acumuladorNegativo= acumuladorNegativo*numero;
			//console.log(acumuladorNegativo);
			break;
		}
		mensaje= prompt("¿Quiere ingresar otro numero?");
	}while(mensaje=="si");

	txtIdSuma.value=acumuladorPositivo;
	txtIdProducto.value=acumuladorNegativo;*/

	

}//FIN DE LA FUNCIÓN