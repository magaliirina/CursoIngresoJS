/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//Variables
	let numero;
	let positivos=0;
	let negativos=0;
	let contadorPositivo=0;
	let contadorNegativo=0;
	let ceros=0;
	let par;
	let contadorPares=0;
	let promedioPositivo;
	let promedioNegativo;
	let diferencia;
	let respuesta;
	//Bucle
	do{
		numero=parseInt(prompt("Ingrese un numero"));
		console.log(numero);
		if(numero>0){
			positivos= positivos+numero;
			contadorPositivo++;
			//console.log(contadorPositivo);
		}
		else if (numero<0){
			negativos= negativos+numero;
			contadorNegativo++;
			//console.log(contadorNegativo);
		}
		//Solo con else cuando no se ponia ningun numero aparecia un cero
		else if (numero==0){
			ceros++;
		}
		//resto de la division por 2
		par= numero%2;

		if(par==0){
			contadorPares++;
		}
		respuesta=confirm("¿Desea ingresar otro numero?")
	}while(respuesta==true);
	
	
	diferencia=positivos+negativos;
	
	if(contadorPositivo!=0){
		promedioPositivo=positivos/contadorPositivo;
	}else{
		promedioPositivo=0;
	}
	if(contadorNegativo!=0){
		promedioNegativo=negativos/contadorNegativo;
	}else{
		promedioNegativo=0;
	}

	console.log("La suma de los positivos es "+ positivos);
	console.log("La suma de los negativos es " + negativos);
	console.log("Cantidad de positivos "+ contadorPositivo);
	console.log("Cantidad de negativos "+ contadorNegativo);
	console.log("Cantidad de ceros "+ ceros);
	console.log("Cantidad de pares "+ contadorPares);
	console.log("Promedio positivo "+ promedioPositivo);
	console.log("Promedio negativo " + promedioNegativo);
	console.log("La diferencia es " + diferencia);

}//FIN DE LA FUNCIÓN